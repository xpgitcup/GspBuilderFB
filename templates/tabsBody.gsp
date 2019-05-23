<!--具体的${标签标题}标签-->
<div id="div${标签标题}" class="tab-pane">
    <div id="display${标签标题}Div">
        <br class="panel text-white" id="display${标签标题}Div">
        <br> 在这里显示${标签标题}所需的信息</br>
    </div>
    <!-- 这里是分页设置-->
    <ul class="pagination pagination-sm">
        <li class="page-item">
            <a class="page-link">页长</a>
        </li>
        <li class="page-item">
            <a class="page-link" id="pageSize${域类}${标签标题}"></a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript: load${域类}FirstPage('${标签标题}')">首页</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript: load${域类}PreviousPage('${标签标题}')">&laquo</a>
        </li>
        <li class="page-item" >
            <a class="page-link" id="currentPage${域类}${标签标题}"></a>
        </li>
        <li class="page-item" >
            <a class="page-link">/</a>
        </li>
        <li class="page-item" >
            <a class="page-link" id="totalPage${域类}${标签标题}"></a>
        </li>
        <li>
            <a class="page-link" href="javascript: load${域类}NextPage('${标签标题}')">&raquo</a>
        </li>
        <li>
            <a class="page-link" href="javascript: load${域类}LastPage('${标签标题}')">尾页</a>
        </li>
    </ul>
</div>
<!--具体的${标签标题}标签结束======-->
