const menu = document.getElementById('navigation');


menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(elem => elem.classList.remove('active-link'));
    event.target.classList.add('active-link');
})

/*-----------------------------section portfolio---------------------------------*/

const portfolio = document.getElementById('portfolio-nav');
portfolio.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        portfolio.querySelectorAll('li').forEach(elem => elem.classList.remove('portfolio-active-link'));
        event.target.classList.add('portfolio-active-link');
        shuffleArray();
    }
})

const shuffleArray = () => {
    //создание нодлиста
    let portfolioList = document.querySelectorAll('.container li:nth-child(-n+12)');
    //создание массива из нодлиста
    let arrayFromNodelist = Array.from(portfolioList);
    //шафл нового массива
    let newPortfolioList = arrayFromNodelist.sort(() => Math.random() - 0.5);
    //беру перента 
    const ulContainerParent = document.querySelector('ul.container');
    //удаляю всё его содержимое
    ulContainerParent.innerHTML = '';
    //вставляю массив
    ulContainerParent.append(...newPortfolioList);
}

//выделение проектов
const projects = document.querySelector('ul.container');

projects.addEventListener('click', (event) => {
    projects.querySelectorAll('img').forEach(elem => elem.classList.remove('projects-link-clicked'));
    event.target.classList.add('projects-link-clicked');
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

let step = 0; //шаг
let offset = 0; //смешение изображения

function drawRight() {
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
    console.log(slidesVisible);
    let offset2 = 0;
    for (let i = 0; i < slidesVisible.length; i++) {
        slidesVisible[i].style.left = offset2 * 800 - 800 + 'px';
        offset2++;
    }
    setTimeout(function () {
        slidesVisible[0].remove();
        drawRight();
        rigthArrowBtn.addEventListener('click', rigthArrow);
    }, 1000)
}

drawRight();
drawRight();
rigthArrowBtn.addEventListener('click', rigthArrow);



//изменение bg
const slider_background = document.querySelector('.slider');

function backGroundColoring() {
    slider_background.classList.toggle('bg_blue');
}
rigthArrowBtn.addEventListener('click', function () {
    setTimeout(backGroundColoring, 300)
});
leftArrowBtn.addEventListener('click', function () {
    setTimeout(backGroundColoring, 300)
});


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

/*----------form submit--------------*/
const button = document.getElementById('submit-button');
const close_button = document.getElementById('close-button');

button.addEventListener('click', () => {
    if (document.getElementById('name').value !== '' && document.getElementById('email').value !== '') {
        const subject = document.getElementById('subject-input').value.toString();
        if (subject !== '') {
            const subjectResult = document.getElementById('subject-result').innerText = subject;
        } else {
            document.getElementById('subject-result').innerText = 'Без темы';
        }
        const description = document.getElementById('textarea-input').value.toString();
        if (description !== '') {
            const descriptionResult = document.getElementById('description-result').innerText = description;
        } else {
            document.getElementById('description-result').innerText = 'Без описания';
        }
        document.querySelector('.message-block').classList.remove('hidden');
        document.getElementById('form').reset();
    }
})

close_button.addEventListener('click', () => {
    document.getElementById('subject-result').innerText = '';
    document.getElementById('description-result').innerText = '';
    document.querySelector('.message-block').classList.add('hidden');
})