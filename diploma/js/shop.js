$(document).ready(function () {
    $("body").removeClass("preload");

    let isOpened = true;

    $(window).on("resize ready", function () {
        if (window.matchMedia('(max-width: 1180px)').matches) {
            if ($(window).scrollTop() >= 240) {
                $('#center-menu').css({marginLeft: "60px", marginRight: "60px"});
            } else {
                $('#center-menu').css({marginLeft: "0", marginRight: "0"});
            }
            if (isOpened) {
                $("#left-menu-button, #right-menu-button").removeClass();
                $("#left-menu, #right-menu").addClass("hide");
                isOpened = false;
            }
        } else {
            $('#center-menu').css({marginLeft: "0", marginRight: "0"});
            $("#left-menu-button, #right-menu-button").addClass("active");
            $("#left-menu, #right-menu").removeClass("hide");
            isOpened = true;
        }
    });

    $(window).on("scroll", function () {
        if ($(window).scrollTop() >= 240 && !isOpened) {
            $('#center-menu').css({marginLeft: "60px", marginRight: "60px"});
        } else {
            $('#center-menu').css({marginLeft: "0", marginRight: "0"});
        }
    });

    function openMenu(menu_id, button_id) {
        if(!isOpened) {
            $(menu_id).toggleClass("hide");
        } else {
            $(button_id).toggleClass("active"); // untoggle
        }
    }

    $("#left-menu-button").click(function () {
        openMenu("#left-menu", "#left-menu-button");
    });
    $("#right-menu-button").click(function () {
        openMenu("#right-menu", "#right-menu-button");
    });

    $("#center-menu > ul > li").click(function () {
        $("#center-menu > ul > li").removeClass("active");
    });

    $("#name").click(function () {
        $("#name").toggkeClass("active");
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