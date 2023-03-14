
window.addEventListener('scroll', function () {

    let s_top = $(window).scrollTop();
    if (s_top > 100) {
        $('.header').css({
            background: 'white',
            borderBottom: 'none',
            top: 0
        })
        $('.menu_li').css({
            color: 'black'
        })
    }
    else {
        $('.header, .menu_li').removeAttr("style");
    }

    let header = document.querySelector(".header");
    let headerHeight = header.offsetHeight;
    let windowTop = window.scrollY;
    if (windowTop >= headerHeight) {
        header.classList.add("drop");
    } else {
        header.classList.remove("drop");
    }
});
