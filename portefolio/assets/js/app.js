import '../scss/app.scss';
import InteractiveBoard from 'interactive-board';

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