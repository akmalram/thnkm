window.addEventListener('load', () => {
    let swiper = new Swiper('.swiper-container.wrapper', {
        speed: 700,
        direction: 'vertical',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: {
            sensitivity: 3,
        },
        effect: 'voerflow',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        keyboard: {
            onlyInViewport: true
        }
    });

    swiper.on('transitionEnd', () => {
        const slides = document.querySelectorAll('.swiper-slide');
        const activeSlide = document.querySelector('.swiper-slide-active');

        slides.forEach(one => one.classList.remove('active'))
        activeSlide.classList.add('active');
    });

    let indicator = new WheelIndicator({
        elem: document.querySelector('.swiper-container.wrapper'),
        callback: function (e) {
            if (e.direction == 'up') swiper.slidePrev();
            else swiper.slideNext();
        }
    });

    const modalToggler = (buttonClass, modalClass) => {
        let btn = document.querySelectorAll(buttonClass),
            modal = document.querySelector(modalClass),
            closetBtn = document.querySelector(`${modalClass} .close-btn`),
            modalBackground = document.querySelector(`${modalClass} .modal-background`);

       if(modal) {
        btn.forEach(one => {
            one.addEventListener('click', () => {
                modal.classList.add('active');
            });
        });

        [closetBtn, modalBackground].forEach(one => {
            one.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        });
       }
    }

    modalToggler('.modal-smm-open-btn', '.register-smm-modal');
    modalToggler('.modal-trgt-open-btn', '.register-trgt-modal');
});

window.addEventListener('DOMContentLoaded', () => {
    // Form handling

    const registerTrgtForm = document.querySelector('.register-trgt-modal .form');
    const registerSmmForm = document.querySelector('.register-smm-modal .form');

    [registerTrgtForm, registerSmmForm].forEach(one => {
        one.addEventListener('submit', (e) => {
            e.preventDefault();
            $.ajax({
                method: "POST",
                url: "send.php",
                data: $(one).serialize(),
            })
            .done(function() {
                one.parentNode.classList.add('done');
                one.reset();
            });
        });
    });

})

