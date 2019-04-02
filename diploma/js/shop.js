$(document).ready(function () {
    $("body").removeClass("preload");

    $(window).on("scroll resize", function () {
        if (window.matchMedia('(max-width: 1180px)').matches) {
            if ($(window).scrollTop() >= 240) {
                $('#center-menu').css({marginLeft: "60px", marginRight: "60px"});
            } else {
                $('#center-menu').css({marginLeft: "0", marginRight: "0"});
            }
            $("#left-menu-button, #right-menu-button").removeClass("active");
            $("#left-menu").css({display: "none"});
        } else {
            $('#center-menu').css({marginLeft: "0", marginRight: "0"});
            $("#left-menu-button, #right-menu-button").addClass("active");
        }
    });

    $("#left-menu-button").click(function () {
        if ($("#left-menu").css("display") == "none") {
            $("#left-menu").css({display: "block"});
        } else {
            $("#left-menu").css({display: "none"});

            if ($("#left-menu").css("display") == "block") {
                $(this).toggleClass("active");
            }
        }
    });

    $("#right-menu-button").click(function () {
        if ($("#right-menu").css("display") == "none") {
            $("#right-menu").css({display: "block"});
        } else {
            $("#right-menu").css({display: "none"});
            if ($("#right-menu").css("display") == "block") {
                $(this).toggleClass("active");
            }
        }
    });

    $("#center-menu > ul > li").click(function () {
        $("#center-menu > ul > li").removeClass("active");
    });

    $("ul.nav > li").click(function () {
        $(this).toggleClass("active");
    });


    function clearLeftMenu(curButton, colorClass) {
        // removing all classes (preload is already removed, so we're removing only color)
        $("body").removeClass().addClass(colorClass);
        $("#left-menu li").removeClass("active");
        // TODO: can we use "this" here instead of passing through function arguments????
        $(curButton).addClass("active");
        $("#name").text($(curButton).text());
    }

    $("#main-button").click(function () {
        clearLeftMenu(this, "red");
        // TODO: fill page with another content
    });

    $("#shop-button").click(function () {
        clearLeftMenu(this, "blue");
        // TODO: fill page with another content
    });

    $("#about-us-button").click(function () {
        clearLeftMenu(this, "brown");
        // TODO: fill page with another content
    });

});