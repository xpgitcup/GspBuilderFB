\$(function(){
    console.info(document.title + "加载了...")

    load${域类}CurrentPage("${标签标题}");
    getCurrentTab();

})

function getCurrentTab() {
    var currentTab = \$("nav-link active")
    console.info(currentTab);
    console.info("当前：" + currentTab);
}

function getCurrentPage(title) {
    var currentPageName = "showCurrentPage${域类}" + title
    var currentPage = \$("#currentPage${域类}" + title)
    console.info("当前页数据?" + currentPage[0] + " " + currentPage[1]);
    var currentPageNumber
    if (currentPage[0] != undefined) {
        currentPageNumber = currentPage.text()
    } else {
        currentPageNumber = 1;
    }
    \$("#"+currentPageName).html(currentPageNumber)
    return currentPageNumber
}

function load${域类}CurrentPage(title) {
    var currentPage = getCurrentPage(title)
    loadData${域类}(title, currentPage);
}

function load${域类}PreviousPage(title) {
    var currentPage = getCurrentPage(title)
    currentPage = currentPage - 1;
    if (currentPage < 1) {
        currentPage = 1;
    } else {
        currentPage = 1;
    }
    loadData${域类}(title, currentPage);
}

function load${域类}NextPage(title, currentPage) {
    var currentPage = getCurrentPage(title)
    if (currentPage) {
        currentPage = currentPage + 1;
    } else {
        currentPage = 1;
    }
    loadData${域类}(title, currentPage);
}

function loadData${域类}(title, currentPage) {
    var url = "${propertyName}/list?key=" + title + "&currentPage${域类}" + title + "=" + currentPage;
    ajaxRun(url, 0, "display" + title + "Div");
}