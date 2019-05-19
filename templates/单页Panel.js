var title${域类} = "${标题}"

\$(function(){
    console.info(document.title + "加载了...")
    setupPagination${域类}();
    load${域类}CurrentPage();
})

/*
* 初始化分页参数
* */
function setupPagination${域类} () {
    console.info("处理：" + title${域类} + "!");
    // 当前页
    var currentPageName = "currentPage${域类}" + title${域类};
    var currentPage = 1;
    if (localStorage.hasOwnProperty(currentPageName)) {
        currentPage = parseInt(localStorage.getItem(currentPageName));
    }
    \$("#" + currentPageName).html(currentPage);
    // 页长度
    var pageSizeName = "pageSize${域类}" + title${域类};
    var pageSize = 10;
    if (localStorage.hasOwnProperty(pageSizeName)) {
        pageSize = parseInt(localStorage.getItem(pageSizeName))
    } else {
        localStorage.setItem(pageSizeName, pageSize);
    }
    \$("#" + pageSizeName).html(pageSize);
    // 总页数
    var total = countData${域类}(title${域类});
    var totalPageName = "totalPage${域类}" + title${域类};
    var totalPage =  Math.ceil(total/pageSize)
    \$("#" + totalPageName).html(totalPage)
}

/*
* 同时存储到两个地方
* */
function showCurrentPageNumber(currentPageNumber) {
    var currentPageName = "currentPage${域类}" + title${域类}
    \$("#" + currentPageName).html(currentPageNumber);
    localStorage.setItem(currentPageName, currentPageNumber);
}

/*
* 获取当前页---从localStorage中获取
* */
function getCurrentPage() {
    var currentPageName ="currentPage${域类}" + title${域类};
    var currentPageNumber
    if (localStorage.hasOwnProperty(currentPageName)) {
        currentPageNumber = parseInt(localStorage.getItem(currentPageName))
    } else {
        currentPageNumber = 1
        localStorage.setItem(currentPageName, currentPageNumber)
    }
    return currentPageNumber
}

/*
* 获取页码上限
* */
function getTotalPage() {
    var totalPageName = "totalPage${域类}" + title${域类};
    var totalPage = parseInt(\$("#" + totalPageName).html());
    return totalPage;
}

/*
* 获取页面长度
* */
function getPageSize() {
    var pageSizeName = "pageSize${域类}" + title${域类};
    var pageSize = parseInt(localStorage.getItem(pageSizeName))
    return pageSize
}

/*
* 加载当前页数据
* */
function load${域类}CurrentPage() {
    var currentPage = getCurrentPage(title${域类})
    loadData${域类}(currentPage);
}

/*
* 向前翻页
* */
function load${域类}PreviousPage() {
    var currentPage = getCurrentPage(title${域类})
    currentPage = currentPage - 1;
    if (currentPage < 1) {
        currentPage = 1;
    }
    showCurrentPageNumber(currentPage);
    loadData${域类}(currentPage);
}

/*
* 向后翻页
* */
function load${域类}NextPage(currentPage) {
    var currentPage = getCurrentPage()
    var totalPage = getTotalPage()
    currentPage = currentPage + 1;
    if (currentPage > totalPage) {
        currentPage = totalPage;
    }
    showCurrentPageNumber(currentPage);
    loadData${域类}(currentPage);
}

function loadData${域类}(currentPage) {
    var pageSize = getPageSize()
    var pageParams = getParams(currentPage, pageSize)
    var append = appendParams()
    var url = "${控制器}/list" + pageParams + "&key=" + title${域类} + append;
    ajaxRun(url, 0, "display" + title${域类} + "Div");
}

function countData${域类}() {
    var url = "${propertyName}/count?key=" + title${域类};
    var total = ajaxCalculate(url);
    return total;
}

function appendParams() {
    return "";
}