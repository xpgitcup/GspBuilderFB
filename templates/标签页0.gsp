${域类}
${key}
${ulid}
${divid}
${标签标题}

<div class="panel panel-default">
    <ul id="${ulid}" class="nav nav-tabs">
        <li class="active"><a href="#${divid}" data-toggle="tab">${标签标题}</a></li>
    </ul>

    <div id="${ulid}Content" class="tab-content">
        <div class="tab-pane fade in active" id="${divid}">
            <div class="panel text-white">
            在这里显示所需要的内容。
            </div>
            <ul class="pagination">
                <li><a href="javascript: load${域类}Prev({${标签标题})}">&laquo;</a></li>
                <li>currentPage${标题}</li>
                <li><a href="javascript: load${域类}Next({${标签标题})}">&raquo;</a></li>
            </ul>
        </div>

    </div>
</div>
