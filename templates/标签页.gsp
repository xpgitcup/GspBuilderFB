<!-- 选项卡 -->
<ul class="nav nav-tabs" role="tablist">
    <li class="nav-item">
        <a href="#div${标签标题}" class="nav-link" data-toggle="tab">
            ${标签标题}
        </a>
    </li>
</ul>

<!-- 具体卡片-->
<div class="tab-content">
    <!--具体的${标签标题}标签-->
    <div id="div${标签标题}" class="tab-pane">
        <div id="display${标签标题}Div">
            <br class="panel text-white" id="display${标签标题}Div">
            <br> 在这里显示${标签标题}所需的信息</br>
        </div>
        <!-- 这里是分页设置-->
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="javascript: load${域类}PreviousPage('${标签标题}')">&laquo</a>
            </li>
            <li class="page-item" >
                <a class="page-link" id="showCurrentPage${域类}${标签标题}"></a>
            </li>
            <li>
                <a class="page-link" href="javascript: load${域类}NextPage('${标签标题}')">&raquo</a>
            </li>
        </ul>
    </div>

</div>

