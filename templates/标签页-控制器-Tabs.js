\$(function(){
    console.info(document.title + "加载了...")
    setupPagination${域类}();
    setupTabs${域类}();
})

/*
* 初始化分页参数
* */
function setupPagination${域类} () {
    // 对每个标签进行操作
    var tabs = \$("a.nav-link");
    tabs.each(function (e) {
        var title = tabs[e].text.trim();
        console.info("处理：" + title + "!");
        // 当前页
        var currentPageName = "currentPage${域类}" + title;
        var currentPage = 1;
        if (localStorage.hasOwnProperty(currentPageName)) {
            currentPage = parseInt(localStorage.getItem(currentPageName));
        }
        \$("#" + currentPageName).html(currentPage);
        // 页长度
        var pageSizeName = "pageSize${域类}" + title;
        var pageSize = 10;
        if (localStorage.hasOwnProperty(pageSizeName)) {
            pageSize = parseInt(localStorage.getItem(pageSizeName))
        } else {
            localStorage.setItem(pageSizeName, pageSize);
        }
        \$("#" + pageSizeName).html(pageSize);
        // 总页数
        var total = countData${域类}(title);
        var totalPageName = "totalPage${域类}" + title;
        var totalPage =  Math.ceil(total/pageSize)
        \$("#" + totalPageName).html(totalPage)
    })

}

function setupTabs${域类}() {
    var currentTabName = "currentTab${域类}${总标题}";
    // 每个标签绑定数据加载函数
\$("a.nav-link").on("click", function (e) {
        var title = \$(e.target).text().trim();
        console.info("点击事件..." + title + "!")
        localStorage.setItem(currentTabName, title); //记录缺省标签
        load${域类}CurrentPage(title)
    })
    // 处理缺省标签
    if (localStorage.hasOwnProperty(currentTabName)) {
        var title = localStorage.getItem(currentTabName);
        console.info("激活" + title);
        var url = "a.nav-link:contains('" + title + "')"
        var tab = \$(url)
        if (tab != undefined) {
            tab.click()
        } else {
            // 激活第一个
        \$("a.nav-link:first").click()
        }
    } else {
        // 激活第一个
    \$("a.nav-link:first").click()
    }

}

/*
* 同时存储到两个地方
* */
function showCurrentPageNumber(title, currentPageNumber) {
    var currentPageName = "currentPage${域类}" + title
    \$("#" + currentPageName).html(currentPageNumber);
    localStorage.setItem(currentPageName, currentPageNumber);
}

/*
* 获取当前页---从localStorage中获取
* */
function getCurrentPage(title) {
    var currentPageName ="currentPage${域类}" + title;
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
function getTotalPage(title) {
    var totalPageName = "totalPage${域类}" + title;
    var totalPage = parseInt(\$("#" + totalPageName).html());
    return totalPage;
}

/*
* 获取页面长度
* */
function getPageSize(title) {
    var pageSizeName = "pageSize${域类}" + title;
    var pageSize = parseInt(localStorage.getItem(pageSizeName))
    return pageSize
}

/*
* 加载尾页数据
* */
function load${域类}LastPage(title) {
    var currentPage = 1;//getCurrentPage(title)
    var totalPageName = "totalPage${域类}" + title;
    currentPage = parseInt(\$("#" + totalPageName).html())
    showCurrentPageNumber(title, currentPage);
    loadData${域类}(title, currentPage);
}

/*
* 加载首页数据
* */
function load${域类}FirstPage(title) {
    var currentPage = 1;//getCurrentPage(title)
    showCurrentPageNumber(title, currentPage);
    loadData${域类}(title, currentPage);
}

/*
* 加载当前页数据
* */
function load${域类}CurrentPage(title) {
    var currentPage = getCurrentPage(title)
    loadData${域类}(title, currentPage);
}

/*
* 向前翻页
* */
function load${域类}PreviousPage(title) {
    var currentPage = getCurrentPage(title)
    currentPage = currentPage - 1;
    if (currentPage < 1) {
        currentPage = 1;
    }
    showCurrentPageNumber(title, currentPage);
    loadData${域类}(title, currentPage);
}

/*
* 向后翻页
* */
function load${域类}NextPage(title, currentPage) {
    var currentPage = getCurrentPage(title)
    var totalPage = getTotalPage(title)
    currentPage = currentPage + 1;
    if (currentPage > totalPage) {
        currentPage = totalPage;
    }
    showCurrentPageNumber(title, currentPage);
    loadData${域类}(title, currentPage);
}

function loadData${域类}(title, currentPage) {
    var pageSize = getPageSize(title)
    var pageParams = getParams(currentPage, pageSize)
    var append = appendParams(title)
    var url = "${控制器}/list" + pageParams + "&key=" + title + append;
    ajaxRun(url, 0, "display" + title + "Div");
}

function countData${域类}(title) {
    var url = "${控制器}/count?key=" + title;
    var total = ajaxCalculate(url);
    return total;
}

function appendParams(title) {
    return "";
}
