/* *********************************** 스와이퍼 ********************************** */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  // slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  effect: 'fade',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

$('.slide_img2').on('mouseover', function () {
  swiper.autoplay.stop();
  $(this).css({ opacity: '1', filter: 'brightness(50%)' })
  $('.brand_btn').css({ opacity: '1' })
});
$('.slide_img2').on('mouseout', function () {
  swiper.autoplay.start();
  $(this).css({ opacity: '0' })
  $('.brand_btn').css({ opacity: '0' })
});
$('.brand_btn').on('mouseover', function () {
  // swiper.autoplay.stop();
  $(this).css({ opacity: '1' })
  $('.slide_img2').css({ opacity: '1', filter: 'brightness(50%)' })
});


/////////////////////////////////////////////////////////////////////////

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  // effect : 'fade',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});



/* *********************************** 헤더 스크롤  ********************************** */
function ham(el, trans, opa, time ) {
  setTimeout(() => {
    el.css({
      transform: trans,
      opacity: opa,
    })
  }, time);
}
$(document).ready(function () {
  $(window).scroll(function () {
      let s_top = $(window).scrollTop();

      // 헤더
      if (s_top > 100) {
          $('.header').css({
            background: '#b4091fb3',
            borderBottom: '0.1px solid #ffffff0f'
          })
          
        }
        else{
          $('.header').removeAttr("style");
        }
      //
        if( s_top > 200){
        ham($('.mySwiper h1'), 'translateY(0)', 1, 0 )
        }
        else{
          $('.mySwiper h1').removeAttr("style");
        }
      //
        if(s_top > 600){
          ham($('.brand_logo'), 'translateY(-30px)', 1, 0 )
          ham($('.brand_txt1'), 'translateY(-30px)', 1, 200 )
          ham($('.brand_txt2'), 'translateY(-30px)', 1, 100 )
          ham($('.shop_btn'), '0', 1, 500 )
        }
        else{
          $('.brand_logo, .brand_txt1, .brand_txt2, .shop_btn').removeAttr("style");
        }
  });

});
