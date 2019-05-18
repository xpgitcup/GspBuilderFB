\$(function(){
    console.info(document.title + "加载了...")
    setupTabs${域类}();
})

function setupTabs${域类}() {
    // 每个标签绑定数据加载函数
    \$("a.nav-link").on("click", function (e) {
        var title = \$(e.target).text().trim();
        console.info("点击事件..." + title + "!")
        load${域类}CurrentPage(title)
    })
    // 处理缺省标签
    var atab = \$("a.nav-link active");
    if (atab.length < 1) {
        \$("a.nav-link:first").click()
    }
    
    if (localStorage.hasOwnProperty("currentTab")) {
        var title = localStorage.getItem("currentTab");
        console.info("激活" + title);
        var url = "a.nav-link:contains('" + title + "')"
        $(url).click();
    }

}

function showCurrentPageNumber(title, currentPageNumber) {
    var currentPageName = "showCurrentPage${域类}" + title
    \$("#" + currentPageName).html(currentPageNumber)
    \$("#currentPage${域类}" + title).html(currentPageNumber)
}

function getCurrentPage(title) {
    var currentPage = \$("#currentPage${域类}" + title)
    var currentPageNumber
    if (currentPage != undefined) {
        currentPageNumber = parseInt(currentPage.text())
    } else {
        currentPageNumber = 1;
    }
    return currentPageNumber
}

function load${域类}CurrentPage(title) {
    var currentPage = getCurrentPage(title)
    showCurrentPageNumber(title, currentPage);
    loadData${域类}(title, currentPage);
}

function load${域类}PreviousPage(title) {
    var currentPage = getCurrentPage(title)
    currentPage = currentPage - 1;
    if (currentPage < 1) {
        currentPage = 1;
    }
    showCurrentPageNumber(title, currentPage);
    loadData${域类}(title, currentPage);
}

function load${域类}NextPage(title, currentPage) {
    var currentPage = getCurrentPage(title)
    if (currentPage) {
        currentPage = currentPage + 1;
    } else {
        currentPage = 1;
    }
    showCurrentPageNumber(title, currentPage);
    loadData${域类}(title, currentPage);
}

function loadData${域类}(title, currentPage) {
    var url = "${propertyName}/list?key=" + title + "&currentPage${域类}" + title + "=" + currentPage;
    ajaxRun(url, 0, "display" + title + "Div");
}

function countData${域类}(title) {
    var url = "${propertyName}/count?key=" + title;
    var total = ajaxCalculate(url);

}