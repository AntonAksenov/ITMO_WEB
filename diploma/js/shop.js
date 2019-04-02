$(document).ready(function () {
    $("body").removeClass("preload");
    $("#center-menu > ul > li")

    $(window).on("scroll resize", function () {
        if ($(window).scrollTop() >= 240 && window.matchMedia('(max-width: 1180px)').matches) {
            $('#center-menu').css({marginLeft: "60px", marginRight: "60px"});
        } else {
            $('#center-menu').css({marginLeft: "0", marginRight: "0"});
        }
    });

    $("#left-menu-button").click(function () {
        if ($("#left-menu").css("display") == "none") {
            $("#left-menu").css({display: "block"});
        } else {
            $("#left-menu").css({display: "none"});
        }
    });

    $("#right-menu-button").click(function () {
        if ($("#right-menu").css("display") == "none") {
            $("#right-menu").css({display: "block"});
        } else {
            $("#right-menu").css({display: "none"});
        }
    });

    $("#right-menu-button").click(function () {
        $("#left-menu").toggleAttribute(hidden, false);
    });

    $("ul.nav > li").click(function () {
        $(this).toggleClass("active");
    });
});