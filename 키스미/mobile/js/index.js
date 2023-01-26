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

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
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


function ham(el, trans, opa, time ) {
  setTimeout(() => {
    el.css({
      transform: trans,
      opacity: opa,
    })
  }, time);
}

/* *********************************** 헤더 스크롤  ********************************** */
$(document).ready(function () {



  $(window).scroll(function () {
      let s_top = $(window).scrollTop();

      // 헤더
      if (s_top > 300) {
          $('.header').css({
            background: '#b4091fb3',
            borderBottom: '0.1px solid #ffffff0f'
          })
      }
      else{
        $('.header').removeAttr("style");
      }
  });

});
