/** nav */
$(".header_nav .mobileMenuBtn").click(function () {
    $(".header_nav .mobileMenuBtn").toggleClass("active");
    $(".header_nav .header_menu").toggleClass("active");
    $(".header_nav .mobileMenuBtn_shad").toggleClass("active");
});
/**end nav */

/** menu */
$(".subMenu li").hover(function () {
    $(this).find("ul.subMenu").css({
        left: $(this).width()
    });
});
$(".subMenu").parent('li').append("<i class='icon'></i>");

$('.menu>li').click(function () {
    if ($(window).width() < 767 && $(this).has('ul')) {
        $(this).children(".subMenu").show().css({
            'position': 'static',
            'background': '#373737'
        });
    }
});
/**end menu */

 $('#banner_tabs').bxSlider({

    minSlides: 1,

    maxSlides: 1,

	moveSlides: 1,

	startSlide: 1,

	auto: true
  });
   $('#banner_slide').bxSlider({
   	
   	slideWidth:400,

    minSlides:1,

    maxSlides: 3,

	moveSlides: 1,

	startSlide: 1,

	auto: true
  });
  
  
  



//页面滑动效果
/*左边按钮点击*/
var btn_index=0;
$('#groupMenu ul li').each(function(index) {
    $(this).click(function(){
        btn_index=index;
        scroller();

    })
});
/*当前页面赋值*/
function go_up(){
	btn_index++;
	console.log(btn_index)
	if(btn_index==$('#groupMenu ul li').length){
		btn_index=$('#groupMenu ul li').length-1
	};
}
function go_down(){
	btn_index--;
	console.log(btn_index)
	if(btn_index<0){
		btn_index=0
	};
}

/*页面滑动*/
function scroller(){
	var currentLi=$("#groupMenu ul li").eq(btn_index);
    currentLi.addClass('active').siblings().removeClass('active');  
    var h = $(currentLi.find('a').attr("href")).offset().top;       
	$("html, body").stop(true,false).animate({
	      scrollTop: h +"px"
	    }, {
	    duration: 500,
	      easing: "swing"
	    }); 
	return false;    
};

/*响应键盘上下键*/
$(document).one('keydown',keyaction);
function keyaction(event){
    var e=event||window.event;
    var key=e.keyCode||e.which||e.charCode;
    switch(key)    {
        case 38: go_down();scroller();    
        break;
        case 40: go_up();scroller();    
        break;
    };
    setTimeout(function(){$(document).one('keydown',keyaction)},500)
}


//页面滑动效果结束

