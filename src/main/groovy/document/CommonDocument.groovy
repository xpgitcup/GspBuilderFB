package document

import groovy.text.SimpleTemplateEngine
import groovy.xml.MarkupBuilder

class CommonDocument {

    def name
    /*
    def toolBarElement = [
            "页面": ["页标题"],
            "面板"    : ["控制器_面板", "面板标题"],
            "标签"      : ["控制器_标签", "标签标题"],
            "标签页" : ["控制器_标签页", "标签页标题", "标签名称(以逗号分隔)"],
            "树形结构" : ["控制器_树形结构", "树形结构名称"]
    ]
     */
    def toolBarElement

    def createController(params) {
        def key = params.keySet()[0]
        println("第一个关键字：${key}")

        def templateFileName = "templates/${key}.groovy"
        Writable controllerText = createText(templateFileName, params, key)
        return controllerText
    }

    def createGsp(params) {
        def key = params.keySet()[0]
        def templateParams = params.get(key)
        println("第一个关键字：${key}")
        def realParams = processParams4tabs(templateParams)
        def templateFileName = "templates/${key}.gsp"
        def gspText = createText(templateFileName, realParams)
        return gspText
    }

    def createJsText(params) {
        println("传入参数：${params}")
        def key = params.keySet()[0]
        def templateParams = params.get(key)
        println("第一个关键字：${key}")

        def templateFileName = "templates/${key}.js"
        def jsText = createText(templateFileName, templateParams)
        return jsText
    }

    private createText(templateFileName, params) {
        def templateFile = new File(templateFileName)
        def jsText = "请编辑模板文件：${templateFileName}."
        if (templateFile.exists()) {
            def engine = new SimpleTemplateEngine()
            def template = engine.createTemplate(templateFile.text)
            jsText = template.make(params)
        } else {
            def printWriter = new PrintWriter(templateFile, "utf-8")
            params.each { e ->
                printWriter.println("\${${e.key}}")
            }
            printWriter.close()
        }
        return jsText
    }

    /*
    处理多个元素的情况
    * */

    def processParams4tabs(params) {
        println("输入：${params}")
        params.each { e ->
            if (e.key.contains("tabNames")) {
                def estr = e.value.split(",")
                def eitems = []
                estr.each { ee ->
                    def eitem = [:]
                    eitem.put("标签标题", ee)
                    println("${eitem}")
                    eitems.add(eitem)
                }
                params.remove(e.key)
                def subParams = params
                // 分别计算head&body的字符串
                def headText = ""
                def bodyText = ""
                eitems.each { ee ->
                    subParams.putAll(ee)
                    println("单元模型：${subParams}")
                    headText += createText("templates/tabsHead.gsp", subParams)
                    bodyText += createText("templates/tabsBody.gsp", subParams)
                }
                println("头：${headText}")
                println("主体：${bodyText}")
                params.put("tabsHead", headText)
                params.put("tabsBody", bodyText)
            }
        }
        println("变换后：${params}")
        return params
    }

    /*
    首字母小写
    * */

    def toLowerCaseFirstOne(temp) {
        if (Character.isLowerCase(temp.charAt(0)))
            return temp;
        else
            return (new StringBuilder()).append(Character.toLowerCase(temp.charAt(0))).append(temp.substring(1)).toString();
    }

    /*
    首字母转大写
    * */

    def toUpperCaseFirstOne(String s) {
        if (Character.isUpperCase(s.charAt(0)))
            return s;
        else
            return (new StringBuilder()).append(Character.toUpperCase(s.charAt(0))).append(s.substring(1)).toString();
    }

    /*
    构造函数
    * */

    def CommonDocument(str) {
        name = str
        def configFileName = "config.json"
        def configFile = new File(configFileName)
        toolBarElement = com.alibaba.fastjson.JSON.parseObject(configFile.text)
    }

}
