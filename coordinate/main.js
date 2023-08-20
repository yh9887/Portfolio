

const vertical = document.querySelector('.vertical');
const horozontal = document.querySelector('.horozontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag')
const targetRect = target.getBoundingClientRect();

const targetwidth = targetRect.width / 2;
const targetheight = targetRect.height / 2;


document.addEventListener('mousemove', event => {

        const x = event.clientX;
        const y = event.clientY;

        vertical.style.transform = `translateX(${x}px)`;
        horozontal.style.transform = `translateY(${y}px)`;
        target.style.transform = `translate(${x- targetwidth}px, ${y- targetheight}px)`
        tag.style.transform = `translate(${x}px, ${y}px)`;
        tag.innerHTML = `${x}px, ${y}px`

})
