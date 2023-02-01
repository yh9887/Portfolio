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

// ///////////////////////////////////////////////////// ham
$(function () {

    /* LOCAL STORAGE START */
    // To reset your local storage
    localStorage.removeItem('learnMenu');

    //check if menu-pulses are required
    function checkMenuPulseState() {
        if (localStorage.getItem('learnMenu') == 'learned') {
            var $menuPulse = $('.menu-pulse');
            $menuPulse.addClass('is-learned');
        }
    }
    checkMenuPulseState();
    /* LOCAL STORAGE END */


    $(".menu-link").click(function (e) {
        e.preventDefault();

        /* LOCAL STORAGE START */
        localStorage.setItem('learnMenu', 'learned');
        checkMenuPulseState();
        /* LOCAL STORAGE END */

        $(".menu-overlay").toggleClass("menu-open");
        $(".menu-toggle").toggleClass("menu-open");
    });
});


// ///////////////////////////////////////////////////// Menu이동
function fnMove(seq) {
    var sec = $("#section" + seq)
    var offset = $("#section" + seq).offset();
    for(let i=0; i<6; i++){
        // $('.menu-overlay.menu-open').css({ opacity: '0' })
        $('html, body').animate({
            scrollTop: offset.top
        }, 400);
    }
}

//


