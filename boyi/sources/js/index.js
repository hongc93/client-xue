var Index;

if (!Index) {
  Index = {};
}

(function () {
  function bannerSlide() {
    var caseSwiper = new Swiper('#J_bannerSlide .swiper-container', {
      pagination: '#J_bannerSlide .swiper-pagination',
      loop: true,
      grabCursor: true,
      paginationClickable: true,
      autoplay: 3000,
      autoplayDisableOnInteraction: false
    })
    $('#J_bannerSlide .swiper-button-prev').on('click', function (e) {
      e.preventDefault()
      caseSwiper.swipePrev()
    })
    $('#J_bannerSlide .swiper-button-next').on('click', function (e) {
      e.preventDefault()
      caseSwiper.swipeNext()
    })
  }


  var oWidth = $(window).width();
  if (oWidth <= 720) {
    $("#J_bannerSlide .swiper-slide").eq(0).find("img").attr("src", "/images/img_home_bgy_mobile.png");
    $("#J_bannerSlide .swiper-slide").eq(1).find("img").attr("src", "/images/img_home_invester_mobile.png");
    //$("#J_bannerSlide .swiper-slide").eq(1).find("img").attr("src", "/images/img_home_cooperation_mobile.png");
    bannerSlide();
  } else {
    $("#J_bannerSlide .swiper-slide").eq(0).find("img").attr("src", "/images/img_home_bgy.png");
    $("#J_bannerSlide .swiper-slide").eq(1).find("img").attr("src", "/images/img_home_invester.png");
    bannerSlide();
  }

}())