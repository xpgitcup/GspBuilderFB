var zTreeObj${域类};
// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
var setting${域类} = {};
// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）

\$(function() {
    console.info(document.title + "加载了...")
    zTreeObj${域类} = loadTreeViewData${域类}();
    zTreeObj${域类} = \$.fn.zTree.init(\$("#zTreeObj${域类}"), setting${域类}, zNodes${域类});
});

function loadTreeViewData${域类}()
{
    var url = "${控制器}/getTreeViewData";
    var json = ajaxCall(url);
    return json
}
