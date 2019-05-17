\$(function(){
    console.info(document.title + "加载了...")
    setupTabs${域类}();
})

function setupTabs${域类}() {
    // 首先获取各个标签
    var tabs = \$("a.nav-link");
    tabs.each(function (e) {
        var tab = tabs[e]
        //tab.click(loadTabData(tab.innerText))
        tab.on("click", loadTabData(tab.innerText))
    })

    // 数据加载函数
    function loadTabData(title) {
        load${域类}CurrentPage(title)
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