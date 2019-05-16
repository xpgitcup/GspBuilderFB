package frame

import groovy.swing.SwingBuilder

import javax.swing.JFrame
import javax.swing.JTabbedPane
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

        //println("通用事件处理：${actionName} -- ${evt}")
        //println("事件来源：${evt.source.name}")

        def ps = document.toolBarElement.get(evt.source.name)
        def params = [:]
        println("${ps}")
        def pps = [:]
        ps.each { e->
            def text = swing."${e}".text
            println("输入数据${e}：${text}")
            pps.put(e, text)
        }
        println("${pps}")
        params.put(evt.source.name, pps)
        gspSource.text = document.createGsp(params)
        jsPanel.text = document.createJsText(params)
        controllerPanel.text = document.createController(params)
    }

    def document

    def theToolBar = {
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

