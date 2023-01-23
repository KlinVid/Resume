
let slide = ['nature_1.jpg', 'nature_2.jpg', 'nature_3.jpg', 'nature_4.jpg', 'nature_5.jpg', 'nature_6.jpg'];
        
let n = 0, max = slide.length-1;
let timerId;

function timer() {
    //условие для перехода слайдов в начало
    if (++n > max){
        n = 0;
    }
   
    changeSlide();
    document.getElementById('img__slider').style = `
    -webkit-animation: slide 4s infinite;
    animation: slide 4s infinite;
    `;
    //авто-slider через 2 секунды
    timerId = setTimeout(timer, 4000);
}

//остановка авто-slider при наведении мыши на картинку
function stop() {
    clearTimeout(timerId);
    document.getElementById('img__slider').style = `
        -webkit-animation: stopSlide 4s infinite;
        animation: stopSlide 4s linear;
        `;
}

// старт авто-slider при отведении мыши от картинки
function start() {
    timerId = setTimeout(timer, 4000);
    document.getElementById('img__slider').style = `
    -webkit-animation: startSlide 4s infinite;
    animation: startSlide 4s infinite;
    `;
}

//переход на следующий слайд
function next() {
    if (n >= max){
        n = 0;
    } else {
        n++;
    }
    
    
    changeSlide();
}

//переход на предыдущий слайд
function before() {
    if (n > 0){
        n--;
    } else {
        n = max;
    }
    
    changeSlide();

}

function changeSlide() {
    //вывод картинки
    document.getElementById('img__slider').src = `images/slider/${slide[n]}`;
    
}


// бургер меню
function navToggle() {
    let arrBurger = ['.nav', '#fa-bars', '#fa-xmark'];
    for (i = 0; i < arrBurger.length; i++) {
        // добавление и удаление класса .active 
        if (document.querySelector(arrBurger[i]).classList.contains('active')) {
            document.querySelector(arrBurger[i]).classList.remove('active');
        } else {
            document.querySelector(arrBurger[i]).classList.add('active');
        }
    }
}



window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY; //определение скролла по координате Y

    //добавление .fixed чтобы стиль header стал position 'fixed'
    let headerFixed = document.querySelector('.header');
    if (scrollPos >= 300) {
        headerFixed.classList.add('fixed');
    } else {
        headerFixed.classList.remove('fixed');
    }


    //добавление класса .scrolled для section 'skills'
    let progressBar = document.getElementsByClassName('progress__bar');
    for (i = 0; i < progressBar.length; i++) {
        if (scrollPos >= 400){
            progressBar[i].classList.add('scrolled');
        } else {
            progressBar[i].classList.remove('scrolled');
        }
    }

  });


  

