/**
 * Created by yupf on 2018/6/18.
 */
$(function () {
    /** menu */
    $(".subMenu li").hover(function () {
        $(this).find("ul.subMenu").css({left: $(this).width()});
    });
    $(".subMenu").parent('li').append("<i class='icon'></i>");

    $('.menu>li').click(function () {
        if ($(window).width() < 767 && $(this).has('ul')) {
            $(this).children(".subMenu").show().css('position', 'static');
            $('.secondMenu>li').click(function () {
                $(this).children(".subMenu").show().css('position', 'static');
            });
        }
    });
    /** menu */
    banner();


    /** news */
    /**
     *
     * @type {*|jQuery|HTMLElement}
     */
    var $expertList = $("#index_expert_lists");
    var $expertBox = $expertList.find('.index_expert_list_box');
    var $expertUl = $expertList.find('ul');
    var $lis = $expertList.find('li');
    var liHeight = $lis.height();
    var zIndex = 0;
    /*window.setInterval($expertBox.animate({'marginTop': -liHeight},1000, function () {
        var str = $expertUl.find('li:first');
        $expertUl.find('li:first').remove();
        $expertUl.append(str);
        $expertBox.css('marginTop', 0)
    }),2000);*/
    window.setInterval(function () {
        $expertBox.animate({'marginTop': -liHeight},1000, function () {
            var str = $expertUl.find('li:first');
            $expertUl.find('li:first').remove();
            $expertUl.append(str);
            $expertBox.css('marginTop', 0)
        })
    }, 2000);

    /*window.setInterval($expertList.find('ul').animate({'marginTop': -liHeight}, 1000, function () {
        $expertList.find('ul').css({
            marginTop: "0px"
        }).find("li:first").appendTo(this);
    }), 2000);*/


    /** end news */
});

/** index Banner js */
var _docWidth = $(document).width();
var _liCount = $(".banner_inner li").size();
var _bannerOpen = false;
var _wait = 2;
var _speed = 300;
var zIndex = 0;

function banner() {
    $(".banner_inner li").css({"float": "left", width: _docWidth, height: $(".banner_inner li img").height()});
    $(".banner_inner").css({
        width: (_docWidth * (_liCount + 1)),
        height: $(".banner_inner li img").height(),
        position: "relative",
        overflow: "hidden"
    });

    var dotHtml = '';
    for (var i = 0; i < $(".banner_inner ul li").length; i++) {
        dotHtml += '<li></li>'
    }
    $(".dot>ul").append(dotHtml);
    $(".dot>ul>li").eq(0).attr("class", "active");


    $(".banner_inner ul li").clone().appendTo($(".banner_inner ul"));
    $(".banner_inner").animate({left: -1 * _docWidth});
    _bannerOpen = true;
    setTimeout(move, _wait * 1000);
}

function bannerClose() {
    _bannerOpen = false;
}

function move() {
    if (_bannerOpen) {
        var _curLeft = Math.abs(parseFloat($(".banner_inner").css("left")));

        if (_curLeft >= _docWidth * _liCount) {
            $(".banner_inner").css({"left": 0});
            _curLeft = 0;
        }
        $(".banner_inner").animate({left: -1 * (_curLeft + _docWidth)}, _speed, function () {
            setTimeout(move, _wait * 1000);
        });

        zIndex = _curLeft / _docWidth;
        $(".dot>ul>li").eq(zIndex).addClass('active').siblings().removeClass('active');
    }
}

/** end index Banner js */

/** about us js */
// alert($(window).width())
window.onresize = function () {

}
if ($(window).width() > 959) {
    $('.index_about_tit').height($('.index_about_con').height());
}

/** end about us js */


/** nav*/

$(".header_nav .mobileMenuBtn").click(function () {
    $(".header_nav .mobileMenuBtn").toggleClass("active");
    $(".header_nav .header_menu").toggleClass("active");
    $(".header_nav .mobileMenuBtn_shad").toggleClass("active");
});
$(".header_nav .mobileMenuBtn_shad").click(function () {
    $(".header_nav .mobileMenuBtn").toggleClass("active");
    $(".header_nav .header_menu").toggleClass("active");
    $(".header_nav .mobileMenuBtn_shad").toggleClass("active");
});

/** end nav*/
