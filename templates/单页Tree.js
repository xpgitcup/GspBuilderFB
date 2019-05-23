${域类}
${控制器}
${标题}

var treeView${域类}Div;

\$(function(){
    console.info(document.title + "加载了...");
    treeView${域类}Div = \$("#treeView${域类}Div");
    treeView${域类}Div.treeview({
        data: loadTreeViewData${域类}()
    });
})

function loadTreeViewData${域类}() {
    var url="${控制器}/getTreeViewData"
    var json = ajaxCall(url)
    return json
}
