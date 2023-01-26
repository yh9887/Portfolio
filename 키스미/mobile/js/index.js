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

/* *********************************** FullPage  ********************************** */
$(function () {

  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
    navigation: true,
    navigationPosition: 'right',
    // responsiveWidth: 1024,    
    afterLoad: function (anchorsLink, index) {
      if (index == 1) {
        $('.top_btn').css({ opacity: '0' })
      } else {
        $('.top_btn').css({ opacity: '1' })
      }

      if ( index == 2) {
        ham($('.main_txt1 h1, .main_txt1 h1 span'), 'translateY(0px) ', '1', '0')
        ham($('.main_txt1 h1 div'), 'translateX(140%) ', '1', '0')
        ham($('.brand_logo '), 'translateY(0px)', '1', '500');
        ham($('.brand_border'), 'scale(1)', '1','700');
        ham($('.brand_txt1'), 'translateY(0px)', '1','1000');
        ham($('.brand_txt2'), 'translateY(0px)', '1','1200');
      }
      else{
        $('.main_txt1 h1, .main_txt1 h1 span, .main_txt1 h1 div, .brand_logo, .brand_border, .brand_txt1, .brand_txt2').removeAttr("style");
      }
      
      if(index == 3){
        ham($('.main_txt2'), 'translateY(0px)', '1','20');
        ham($('.info_notice'), 'translate(-50%, -50%)', '1','20');
        ham($('.info_btn'),   'translate(-50%, -50%)', '1','50');
      }
      else{
        $('.main_txt2, .info_notice, .info_btn').removeAttr("style");
      }
      
      if(index == 4){
        ham($('.shop_menu h1'),'', '1','0');
        ham($('.white_box'),'translateX(100%)', '1','0');
        ham($('.shop_border'), 'scale(1)', '1','80');
        ham($('.lbl1'), 'translateY(0px)', '1','200');
        ham($('.lbl2'), 'translateY(0px)', '1','220');
        ham($('.lbl3'), 'translateY(0px)', '1','240');
        ham($('.lbl4'), 'translateY(0px)', '1','260');
        ham($('.shop_txt span'), 'translateX(0px)', '1','500');
        ham($('.shop_txt input'), 'translate(-50%, -50%)', '1','600');
      }
      else{
        $('.shop_menu h1, .white_box, .shop_border, .lbl, .shop_txt span, .shop_txt input').removeAttr("style");
      }

      if(index == 5){
        ham($('.instar_menu h1'),'translateY(0px)', '1','20');
        ham($('.instar_menu div'),'', '1','200');
        ham($('.feed_wrap'),'translateY(0px)', '1','20');
        ham($('.instar_feed'),'', '1','300');
      }
      else{
        $('.instar_menu h1, .instar_menu div, .feed_wrap, .instar_feed').removeAttr("style");
      }
    }

    
    
  });
})

function ham(el, trans, opa, time ) {
  setTimeout(() => {
    el.css({
      transform: trans,
      opacity: opa,
    })
  }, time);
}

/* *********************************** section2  ********************************** */
$(document).ready(function () {
  $(window).scroll(function () {


  })
})