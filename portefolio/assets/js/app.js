import '../scss/app.scss';
import 'jquery';
import InteractiveBoard from 'interactive-board';
import 'jquery-modal';

$('a.open-modal').click(function() {
    $(this).modal({
        fadeDuration: 250
    })
    return false;
});

// Hack for replace the modal after the action on close
$('.modal').on($.modal.AFTER_CLOSE, function(event, modal) {
    $(this).insertAfter($(modal.$anchor));
});

let ib = new InteractiveBoard({
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
});
ib.init();