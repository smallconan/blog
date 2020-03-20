
$(".head-container").on("mouseover","#person-page",function () {
    $(".sub-menu").css({"display":"block"})
});
$(".head-container").on("mouseout","#person-page",function () {
    $(".sub-menu").css({"display":"none"})
});

function showheader() {
    $(".head-container").append(
        "<div class=\"row\">\n" +
        "        <div class=\"header-right\">\n" +
        "            <ul>\n" +
        "                <li id=\"person-page\">\n" +
        "                    <a href=\"javascript:void(0)\" >我的</a>\n" +
        "                    <div class=\"sub-menu\" id=\"sub-menu-li\">\n" +
        "                        <a href=\"person.jsp\">个人中心</a>\n" +
        "                        <a href=\"javascript:void(0)\" onclick=\"logout()\">退出登录</a>\n" +
        "                    </div>\n" +
        "                </li>\n" +
        "                <li><a  href=\"index.jsp\">主页</a></li>\n" +
        "                <li><a href=\"dailyarticle.html\">每日一文</a></li>\n" +
        "                <li><a href=\"OnlineBookStore.html\">学习</a></li>\n" +
        "            </ul>\n" +
        "        </div>\n" +
        "        <div class=\"header-left\" >\n" +
        "            <a href=\"index.jsp\"><img src=\"imgs/special_photo_bg.png\" height=\"40\" width=\"40\" style=\"padding-top: 5px\"></a>\n" +
        "        </div>\n" +
        "    </div>"
    );
}

