const ready = (callback) => {
    window.addEventListener('DOMContentLoaded', (e) => {
        callback(e);
    })
}

ready(() => {
    const MenuClassToggler = () => {
        const btn = $('.toggle-btn input');
        const menu = $('.navbar .mymenu');

        btn.click(() => {
            menu.classList.toggle('active');
        });
    }

    MenuClassToggler();

    const menuClose = () => {
        $('.toggle-btn input').removeClass('active');
        $('.navbar .mymenu').removeClass('active');
    }


    let scrollToAnchor = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                menuClose();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    scrollToAnchor();
});

ready(() => {
    const aboutTabs = () => {
        const btns = document.querySelectorAll('.about .tab-buttons button');
        const tabs = document.querySelectorAll('.about .tabs .tab');

        const clearButton = () => {
            btns.forEach(btn => {
                btn.classList.remove('active');
            });
        }

        const clearTabs = () => {
            tabs.forEach(tab => {
                tab.classList.remove('active');
            });
        }

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                clearButton();
                clearTabs();

                const dataFor = btn.getAttribute('data-for');
                btn.classList.add('active');
                document.querySelector(`.about .tabs .tab.${dataFor}`).classList.add('active');
            });
        });
    }

    aboutTabs();

    var aboutSwiper = new Swiper('.swiper-container.about-swiper', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        autoplay: {
            delay: 5000
        },
        loop: true
    });


    let teachersSwiper = new Swiper('.swiper-container.swiper-teachers', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        autoplay: {
            delay: 5000
        },
        loop: true,
        spaceBetween: 30
    });

    let reviwsSwiper = new Swiper('.swiper-container.swiper-reviews', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
        },
        autoplay: {
            delay: 5000
        },
        loop: true,
        spaceBetween: 30
    });
});


ready(() => {
    AOS.init();
});

ready(() => {
    $('#phone-mask').mask("+998(00) 000-00-00");

    const openModal = () => {
        $('.complete-modal').addClass('active');
        setTimeout(() => $('.complete-modal').removeClass('active'), 4000)
    };

    $('#myform').submit((e) => {
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "../../send.php",
            data: $('#myform').serialize(),
        })
        .done(function () {
            openModal();
            document.getElementById('myform').reset();
        });
    });
});

