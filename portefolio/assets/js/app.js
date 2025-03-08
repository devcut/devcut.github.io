import '../scss/app.scss';
import 'jquery';
import InteractiveBoard from 'interactive-board';
import 'jquery-modal';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

$('a.open-modal').click(function() {
    $(this).modal({
        fadeDuration: 250
    });

    $('.swiper').each(function () {
        new Swiper($(this).get(0), {
            modules: [Navigation, Pagination],
            autoHeight: true,
            slidesPerView: 1,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    });

    return false;
});

// Hack for replace the modal after the action on close
$('.modal').on($.modal.AFTER_CLOSE, function(event, modal) {
    $(this).insertAfter($(modal.$anchor));
});

new InteractiveBoard({
    activateRandomShape: {
        enabled: true,
        time: 400,
        duration: 3000
    },
    shape: {
        width: 15,
        height: 15,
        margin: 1,
        background: '#3980da'
    },
    colors: ['#494953']
}).init();
