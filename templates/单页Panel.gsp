<!-- 具体卡片-->
<div class="card">
    <!--具体的${标题}标签-->
    <div id="display${标题}Div" class="card-body">
        <br> 在这里显示${标题}所需的信息</br>
    </div>
    <div class="card-footer justify-content-center  m-0 pb-0">
        <!-- 这里是分页设置-->
        <ul class="pagination pagination-sm">
            <li class="page-item">
                <a class="page-link">页长</a>
            </li>
            <li class="page-item">
                <a class="page-link" id="pageSize${域类}${标题}"></a>
            </li>
            <li class="page-item">
                <a class="page-link" href="javascript: load${域类}FirstPage()">首页</a>
            </li>
            <li class="page-item">
                <a class="page-link" href="javascript: load${域类}PreviousPage()">&laquo</a>
            </li>
            <li class="page-item" >
                <a class="page-link" id="currentPage${域类}${标题}"></a>
            </li>
            <li class="page-item" >
                <a class="page-link">/</a>
            </li>
            <li class="page-item" >
                <a class="page-link" id="totalPage${域类}${标题}"></a>
            </li>
            <li>
                <a class="page-link" href="javascript: load${域类}NextPage()">&raquo</a>
            </li>
            <li>
                <a class="page-link" href="javascript: load${域类}LastPage()">末页</a>
            </li>
        </ul>
    </div>
    <!--具体的${标题}标签结束======-->

</div>

