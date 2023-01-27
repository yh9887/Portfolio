$(document).ready(function () {

    let cate_no = get_url_info("cate");

    make_sec(cate_arr[cate_no]);
    const show_oneTime_qty = 3 * 10;
    let tmp_one_shot = 0
    load_list(cate_no, tmp_one_shot, show_oneTime_qty)
    tmp_one_shot += show_oneTime_qty;


    function ham(el, trans, opa, time) {
        setTimeout(() => {
            el.css({
                transform: trans,
                opacity: opa,
            })
        }, time);
    }

    ham($('.title_name'), 'translateY(0)', '1', '0');
    ham($('.title_banner'), 'translateY(0)', '1', '0');

    $(window).scroll(function () {
        let s_top = $(window).scrollTop();

        // ham($('.title_name'),'translateY(0)', '1','0');
        // ham($('.title_banner'),'translateY(0)', '1','0');

        if (s_top >= 600 && s_top < 5000) {
            ham($('.product_content'), 'translateY(0)', '1', '0');
        }
        else {
            $('.product_content').removeAttr("style");
        }



        // 헤더
        if (s_top > 100) {
            $('.header').css({
                background: '#ffe9e9c2',
            })
        }
        else {
            $('.header').removeAttr("style");
        }
        //
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

})


