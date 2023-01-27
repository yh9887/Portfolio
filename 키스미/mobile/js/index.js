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
  // spaceBetween: 30,
  loop: true,
  // effect : 'fade',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    // delay: 3000,
    // disableOnInteraction: false,
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
        // else{
        //   $('.mySwiper h1').removeAttr("style");
        // }
      //
        if(s_top > 700){
          ham($('.brand_logo'), 'translateY(-30px)', 1, 0 )
          ham($('.brand_txt1'), 'translateY(-30px)', 1, 200 )
          ham($('.brand_txt2'), 'translateY(-30px)', 1, 100 )
          ham($('.shop_btn'), '0', 1, 500 )
        }
        // else{
        //   $('.brand_logo, .brand_txt1, .brand_txt2, .shop_btn').removeAttr("style");
        // }
      //
        if(s_top >1300){
          ham($('.info_header h1'), 'translateY(0px)', 1, 0 )
          ham($('.info_notice'), 'translate(-50%, -50%)', 1, 0 )
        }
        // else{ 
        // $('.info_header h1, .info_notice').removeAttr("style");
        // }
      //
        if(s_top > 1800){
          ham($('.white_box'), 'translateX(100%)', 1, 500 )
          ham($('.shop_menu h1'), '', 1, 500 )
          ham($('label'), '', 1, 1000 )
          ham($('.shop_txt span'), 'translateX(0)', 1,1000 )  
          ham($('.shop_txt input'), '', 1,30000 )  
        }
        // else{ 
        // $('.white_box, .shop_menu h1, label').removeAttr("style");
        // $('.shop_txt input').removeAttr("style");
        // }
        if(s_top > 2400){
          ham($('.instar_menu h1'), 'translateY(0px)', 1,500)  
          ham($('.instar_menu div'), '', 1, )  
          ham($('.instar_feed'), 'translateY(0)', 1, )  
        }
        // else{ 
        // $('.shop_txt input').removeAttr("style");
        // }

        // console.log(s_top)
  });

  $(".downBtn").click(function(){
    $("html, body").animate({ scrollTop: $(document).height() }, 500);
  });
  $(".topBtn").click(function(){
    $("html, body").animate({ scrollTop: 0,  behavior: "smooth"});
  });

  let ham_chk = true;
  $(document).on('click', '.hambug', function(){

    if(ham_chk) {
      // 햄버거 => X 관련 코드  
      $(".hambug").toggleClass('hamimg_active')
      $('.aside').toggleClass('ham_active') ;
  }
  
  else { 
      // X => 햄버거 관련 코드   
      $(".hambug").toggleClass('hamimg_active')  
      $('.aside').toggleClass('ham_active') ;
    }  
});

});
