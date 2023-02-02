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


$(document).ready(function(){

    window.addEventListener('scroll', function(){
        let sec2_o_top = $('#section2').offset().top;
        let s_top = $(window).scrollTop();
        // console.log(sec2_o_top, s_top)

        if(sec2_o_top == s_top){
            $('.sec2_img').toggleClass('sec2_animation');
        }



    })
});