$(document).ready(function () {
    $(window).scroll(function () {
        let s_top = $(window).scrollTop();
        // 헤더
        if (s_top > 100) {
            $('.header').css({
                background: 'white',
                borderBottom: 'none'
            })
        }
        console.log(s_top)
    })
});