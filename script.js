const MENU = document.getElementById('navigation');
const PORTFOLIO = document.getElementById('portfolio-nav');

MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(elem => elem.classList.remove('active-link'));
    event.target.classList.add('active-link');
})

PORTFOLIO.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('li').forEach(elem => elem.classList.remove('portfolio-active-link'));
    if (event.target.tagName === 'LI') {
        event.target.classList.add('portfolio-active-link');
    }
})

/*-----------------------------section slider---------------------------------*/

let rigthArrowBtn = document.getElementById('right-arrow');
let leftArrowBtn = document.getElementById('left-arrow');

let slides = document.querySelectorAll('.slide-single');
let slider = [];
for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i];
    slides[i].remove();
}

let step = 0;
let offset = 0;

function draw() {
    let divSlide = document.createElement('div');
    divSlide = slider[step];
    divSlide.classList.add('slide-single');
    divSlide.style.left = offset * 800 + 'px';
    document.querySelector('#main-slider').appendChild(divSlide);
    if (step + 1 == slider.length) {
        step = 0;
    } else {
        step++;
    }
    offset = 1;
}

/*-----------rightArrow----------*/
function rigthArrow() {
    rigthArrowBtn.removeEventListener('click', rigthArrow);
    let slidesVisible = document.querySelectorAll('.slide-single');
    let offset2 = 0;
    for (let i = 0; i < slidesVisible.length; i++) {
        slidesVisible[i].style.left = offset2 * 800 - 800 + 'px';
        offset2++;
    }
    setTimeout(function () {
        slidesVisible[0].remove();
        draw();
        rigthArrowBtn.addEventListener('click', rigthArrow);
    }, 1000)

}

/*-----------leftArrow----------*/
function leftArrow() {
    leftArrowBtn.removeEventListener('click', leftArrow);
    let slidesVisible = document.querySelectorAll('.slide-single');
    let offset2 = 0;
    for (let i = 0; i < slidesVisible.length; i++) {
        slidesVisible[i].style.right = offset2 * 800 + 800 + 'px';
        offset2++;
    }
    setTimeout(function () {
        slidesVisible[0].remove();
        draw();
        leftArrowBtn.addEventListener('click', leftArrow);
    }, 1000)

}


const SLIDER_BACKGROUND = document.querySelector('.slider');

function backGroundColoring() {
    SLIDER_BACKGROUND.classList.toggle('bg_blue');
}

draw();
draw();
rigthArrowBtn.addEventListener('click', rigthArrow);
rigthArrowBtn.addEventListener('click', backGroundColoring);
leftArrowBtn.addEventListener('click', leftArrow);
leftArrowBtn.addEventListener('click', backGroundColoring);


/*----------off/on phone screens--------------*/

const iphone_vertical = document.querySelector('.iphone-vertical');
const iphone_horizontal = document.querySelector('.iphone-horizontal');
const blackScreenV = document.querySelector('.black-screen-vertical');
const blackScreenH = document.querySelector('.black-screen-horizontal');

iphone_vertical.addEventListener('click', craeteVerticalHTML);
iphone_horizontal.addEventListener('click', craeteHorizontalHTML);

function craeteVerticalHTML() {
    let html;
    let element = '.slide-single';
    //создаем html 
    html = '<div class="black-screen-vertical"></div>';
    //вставляем html в dom
    document.querySelector(element).insertAdjacentHTML('afterbegin', html);

    const blackScreenV = document.querySelector('.black-screen-vertical');
    blackScreenV.removeEventListener('click', craeteVerticalHTML);
    blackScreenV.addEventListener('click', removeVerticalHTML);
}

function removeVerticalHTML() {
    const blackScreenV = document.querySelector('.black-screen-vertical');
    blackScreenV.parentNode.removeChild(blackScreenV);
}

function craeteHorizontalHTML() {
    let html;
    let element = '.slide-single';
    //создаем html 
    html = '<div class="black-screen-horizontal"></div>';
    //вставляем html в dom
    document.querySelector(element).insertAdjacentHTML('afterbegin', html);

    const blackScreenH = document.querySelector('.black-screen-horizontal');
    blackScreenH.removeEventListener('click', removeHorizontalHTML);
    blackScreenH.addEventListener('click', removeHorizontalHTML);
}

function removeHorizontalHTML() {
    const blackScreenH = document.querySelector('.black-screen-horizontal');
    blackScreenH.parentNode.removeChild(blackScreenH);
}















// const BUTTON = document.getElementById('button');
// const CLOSE_BUTTON = document.getElementById('close_button');

// BUTTON.addEventListener('click', () => {
//     MENU.querySelectorAll('a').forEach(elem => elem.classList.remove('active-link'));
//     event.target.classList.add('active-link');
// })

// CLOSE_BUTTON.addEventListener('click', () => {
//     MENU.querySelectorAll('a').forEach(elem => elem.classList.remove('active-link'));
//     event.target.classList.add('active-link');
// })