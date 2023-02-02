// /////////////////////////////////////////////////////bg color

const sections = document.querySelectorAll('.section');

let config = {
    rootMargin: '0px',
    threshold: 0
};

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            intersectionHandler(entry);
        }
    });
}, config);

sections.forEach(section => {
    observer.observe(section);
});

function intersectionHandler(entry) {
    const current = document.querySelector('.section.active');
    const next = entry.target;

    if (current) {
        current.classList.remove('active');
    }
    if (next) {
        next.classList.add('active');
        document.body.style.setProperty("--color-bg", next.dataset.bgcolor);
    }
}


// $(document).ready(function(){

//     window.addEventListener('scroll', function(){
//         let sec2_o_top = $('#section2').offset().top;
//         let s_top = $(window).scrollTop();
//         // console.log(sec2_o_top, s_top)

//         if(sec2_o_top == s_top){
//             $('.sec2_img').toggleClass('sec2_animation');
//         }



//     })
// });
window.addEventListener('scroll', function () {

    let s_top = $(window).scrollTop();
    if (s_top > 100) {
        $('.header').css({
            borderBottom: 'none',
            position:'fixed',
            top: 0,
            left:0,
            height: '70px',
            background: '#6260604d'
        })
        $('.logo img').css({
            height: '45px'
        })
        $('.header_wrap .logo').css({
            lineHeight: '100px'
        })
    }
    else {
        $('.header, .logo img, .header_wrap .logo').removeAttr("style");
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
