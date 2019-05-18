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
        println("第一个关键字：${key}")

        def templateFileName = "templates/${key}.gsp"
        Writable gspText = createText(templateFileName, params, key)
        return gspText
    }

    def createJsText(params) {
        println("传入参数：${params}")
        def key = params.keySet()[0]
        println("第一个关键字：${key}")

        def templateFileName = "templates/${key}.js"
        Writable jsText = createText(templateFileName, params, key)
        return jsText
    }

    private Writable createText(templateFileName, params, key) {
        def templateFile = new File(templateFileName)
        def jsText = "请编辑模板文件：${templateFileName}."
        if (templateFile.exists()) {
            def engine = new SimpleTemplateEngine()
            def template = engine.createTemplate(templateFile.text)
            def newParams = params.get(key)
            def domain = newParams.get("域类")
            println("domain:${domain}")
            //处理一下
            if (params.get(key).get("域类")) {
                def className = toUpperCaseFirstOne(params.get(key).get("域类"))
                def propertyName = toLowerCaseFirstOne(params.get(key).get("域类"))
                params.get(key).className = className
                params.get(key).propertyName = propertyName
            }
            println("最终的：${newParams}")
            jsText = template.make(newParams)
        } else {
            def printWriter = new PrintWriter(templateFile, "utf-8")
            params.get(key).each { e ->
                printWriter.println("\${${e.key}}")
            }
            printWriter.close()
        }
        jsText
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
