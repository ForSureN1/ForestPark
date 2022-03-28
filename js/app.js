import $ from 'jquery';
import 'slick-carousel';

window.jQuery = window.$ = $;

document.addEventListener('DOMContentLoaded', () => {
    // Burger menu
    let burger = document.querySelector('#nav-icon4');
    let menu = document.querySelector('.header__nav')
    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            menu.classList.toggle('active')
        })
        window.addEventListener('scroll', () => {
            if (menu.classList.contains('active')) {
                burger.classList.remove('open');
                menu.classList.remove('active');
            }
        })
        document.addEventListener('click', e => {
            const target = e.target;
            if (!target.closest('.header__hamb') && !target.closest('.header__nav')) {
                menu.classList.remove('active')
                burger.classList.remove('open')
            }
        })
    }

    // Add class header
    window.addEventListener('scroll', addClassHeader)
    let header = document.querySelector('.header')
    if (header) {
        addClassHeader();
    }

    function addClassHeader() {
        if (window.scrollY > 50) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    }

    // Padding header-bottom
    let headerBottom = document.querySelector('.header__bottom');
    if (headerBottom) {
        setHeadPadding();

        function setHeadPadding() {
            let heightHeader = document.querySelector('.header').offsetHeight;
            headerBottom.style.paddingBottom = heightHeader + 'px';
        }
        window.addEventListener('resize', setHeadPadding);
    }
})

$('.intro__slider-big').slick({
    fade: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.intro__slider-text',
})

$('.intro__slider-text').slick({
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.intro__slider-big',
    prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="107" height="8" viewBox="0 0 107 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M105.505 8C105.968 8 106.5 7.64192 106.5 7.20012C106.5 6.75833 105.968 6.40023 105.505 6.40488H3.3493L8.63808 1.36376C8.96497 1.05217 8.96497 0.54527 8.63808 0.233687C8.3112 -0.0778957 7.77938 -0.0778957 7.45249 0.233687L0.734184 6.63276C0.421936 6.93504 0.421936 7.70237 0.734184 8H3.33955H105.505Z" fill="white" fill-opacity="0.5"/></svg></button>',
    nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="106" height="8" viewBox="0 0 106 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.995232 8C0.531732 8 0 7.64192 0 7.20012C0 6.75833 0.531732 6.40023 0.995232 6.40488H103.151L97.8619 1.36376C97.535 1.05217 97.535 0.54527 97.8619 0.233687C98.1888 -0.0778957 98.7206 -0.0778957 99.0475 0.233687L105.766 6.63276C106.078 6.93504 106.078 7.70237 105.766 8H103.16H0.995232Z" fill="white" fill-opacity="0.5"/></svg></button>',
    dots: true,
    appendDots: '.intro__dots-line',
    responsive: [{
            breakpoint: 1450,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                adaptiveHeight: true,
            }
        }
    ]
})

let currentSlideHTML = document.querySelector('.intro__dots-current');
let totalSlideHTML = document.querySelector('.intro__dots-total');
let totalDots = document.querySelectorAll('.intro__dots-line .slick-dots li').length;
$('.intro__slider-text').on('afterChange', (currentSlide, slick) => {
    let currentSlideNum = slick.currentSlide + 1;
    if (currentSlideNum < 10) {
        currentSlideNum = '0' + currentSlideNum;
    } else {
        currentSlideNum = slick.currentSlide + 1;
    }
    currentSlideHTML.textContent = currentSlideNum;
})
if (totalSlideHTML) {
    if (totalDots < 10) {
        totalDots = '0' + totalDots;
    } else {
        totalDots = totalDots;
    }
    totalSlideHTML.textContent = totalDots;
}