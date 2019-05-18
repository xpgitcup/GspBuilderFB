package frame

import groovy.swing.SwingBuilder

import javax.swing.ButtonGroup
import javax.swing.JButton
import javax.swing.JFrame
import javax.swing.JLabel
import javax.swing.JTabbedPane
import javax.swing.JTextField
import javax.swing.UIManager
import java.awt.BorderLayout
import java.awt.GridLayout
import java.awt.Toolkit
import java.awt.event.ActionEvent

class CommonFrame {

    //基础GUI设置
    def swing = new SwingBuilder()
    JFrame frame
    def toolkit = Toolkit.getDefaultToolkit()
    def screenSize = toolkit.getScreenSize()

    def WIDTH = 800
    def HEIGHT = 600
    int X = (screenSize.width - WIDTH) / 2
    int Y = (screenSize.height - HEIGHT) / 2
    /*
    * 处理用户的操作
    * */

    def commonAction(ActionEvent evt) {
        def actionName = evt.actionCommand

        println("通用事件处理：${actionName} -- ${evt}")
        println("事件来源：${evt.source.name}")

        //def ps = document.toolBarElement.get(evt.source.name)
        //println("${ps}")
        def params = [:]
        def pps = [:]
        /*
        ps.each { e ->
            def text = swing."${e}".text
            println("输入数据${e}：${text}")
            pps.put(e, text)
        }
        println("${pps}")
         */
        inputToolBar.getComponents().each { e->
            println("${e.class}")
            def item = e.class
            if ("${item}".contains("JTextField")) {
                println("输入${e.name} ${e.text}")
                //pps.put("${e.name}", "${e.text}")
                pps.put(e.name, e.text)
            }
        }
        params.put(evt.source.name, pps)
        println("${params}")
        gspSource.text = document.createGsp(params)
        jsPanel.text = document.createJsText(params)
        //controllerPanel.text = document.createController(params)
    }

    def document
    def group
    def inputToolBar

    def theToolBar = {
        /*
        swing.panel(layout: new GridLayout(document.toolBarElement.size(), 1), constraints: BorderLayout.NORTH) {
            document.toolBarElement.each { e ->
                toolBar() {
                    label(text: e.key)
                    label(text:"：")
                    e.value.each { ee ->
                        label(text: ee)
                        textField(id: ee)
                    }
                    button(text: "生成", actionPerformed: { evt -> commonAction(evt) }, name: e.key)
                }
            }
        }
         */
        swing.panel(layout: new GridLayout(2, 1), constraints: BorderLayout.NORTH) {
            toolBar() {
                group = new ButtonGroup()
                document.toolBarElement.each { e ->
                    group.add(radioButton(text: e.key, actionPerformed: { evt -> createInputText(evt.source.name) }, name: e.key))
                }
            }
            inputToolBar = toolBar() {}
        }
    }

    def createInputText(key) {
        def fields = document.toolBarElement.get(key)
        println("${fields}")
        inputToolBar.removeAll()
        inputToolBar.add(new JLabel(text: key))
        inputToolBar.add(new JLabel(text: "："))
        fields.each { e ->
            inputToolBar.add(new JLabel(text: e))
            inputToolBar.add(new JTextField(name: e))
        }
        inputToolBar.add(new JButton(text: "生成", actionPerformed: { evt -> commonAction(evt) }, name: key))
        inputToolBar.updateUI()
    }

    def mainTabs
    def gspSource
    def jsPanel
    def controllerPanel

    def mainTabPanel = {
        mainTabs = swing.tabbedPane(id: "tabs", tabLayoutPolicy: JTabbedPane.SCROLL_TAB_LAYOUT) {
            //主显示区
            scrollPane(id: 'gspPanel', title: 'gspPanel') {
                gspSource = textArea(id: 'console')
            }
            //目标
            scrollPane(id: 'jsPanel', title: 'jsPanel') {
                jsPanel = textArea()
            }
            scrollPane(id: 'controllerPanel', title: '控制器') {
                controllerPanel = textArea()
            }
        }
    }

    def setupUI() {
        theToolBar()
        mainTabPanel()
    }

    /*
    主消息循环
    * */

    def run() {
        UIManager.setLookAndFeel(UIManager.getSystemLookAndFeelClassName())
        frame = swing.frame(title: document.name,
                size: [WIDTH, HEIGHT],
                location: [X, Y],
                defaultCloseOperation: javax.swing.WindowConstants.DISPOSE_ON_CLOSE) {
            setupUI()
        }
        frame.setVisible(true)
    }

    /*
    构造函数
    * */

    public CommonFrame(doc) {
        document = doc
    }

}

