import Swiper from 'swiper';

//const slideWidth = document.body.querySelector('.small-slider li').offsetWidth;

const setSwiper = () => {
    const swiper = new Swiper('.swiper', {
        spaceBetween: 50,

        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
    
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

export {setSwiper}
