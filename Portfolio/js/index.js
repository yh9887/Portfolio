// ///////////////////////////////////////////////////// bg color

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


// ///////////////////////////////////////////////////// 스크롤
window.addEventListener('scroll', function () {

    let s_top = $(window).scrollTop();
    if (s_top > 100) {
        $('.header').css({
            borderBottom: 'none',
            position:'fixed',
            top: 0,
            left:0,
            height: '70px',
            background: 'rgb(179 199 245 / 23%',
            borderBottom: 'rgb(86 54 227 / 8%)'
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
    let sec3_Height = $('#section3').offset().top;
    
    if(s_top >= sec3_Height){
        $('.skill-per').css({
            animation: 'fillBars 2.4s'
        })
    }
        else {
            $('.skill-per').removeAttr("style");
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


// ///////////////////////////////////////////////////// 좌표이동
$(function () {
	$('.menu_inner').click(function (){
    	$('html, body').animate({scrollTop: $(this.hash).offset.top}, 300);
    });
});


// 

