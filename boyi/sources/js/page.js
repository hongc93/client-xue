$(".header .mobileMenuBtn").click(function() {
  $(".header .mobileMenuBtn").toggleClass("active");
  $(".header .header_menu").toggleClass("active");
  $(".header .mobileMenuBtn_shad").toggleClass("active");
});
$(".header .mobileMenuBtn_shad").click(function() {
  $(".header .mobileMenuBtn").toggleClass("active");
  $(".header .header_menu").toggleClass("active");
  $(".header .mobileMenuBtn_shad").toggleClass("active");
});
$(window).scroll(function() {
  if (jQuery(this).scrollTop() > 1) {
    $(".header").addClass("header_scroll");
  } else {
    $(".header").removeClass("header_scroll");
  }
});

//add class 解决方案2
$(".solution-sec .name")
  .mouseover(function() {
    $(this)
      .siblings(".shade")
      .addClass("shadehover");
  })
  .mouseout(function() {
    $(this)
      .siblings(".shade")
      .removeClass("shadehover");
  });
  
  if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 150,
			mobile: true,
			live: true
		});

		wow.init();
	};
