window.addEventListener("DOMContentLoaded", () => {
    // burger

    const header = document.querySelector('.header')
    const burgerBtn = document.querySelector(".header-wrapper__burger");
    const navContent = document.querySelector(".mobile-menu");
    const mobileMenu = document.querySelector('.mobile-menu__list');
    const menuItem = mobileMenu.querySelectorAll('.mobile-menu__item');
    const body = document.body;

    burgerBtn.addEventListener("click", () => {
        header.classList.toggle('active')
        burgerBtn.classList.toggle('active')
        navContent.classList.toggle('active');
        body.classList.toggle('lock');
    });

    menuItem.forEach((item) => {
        item.addEventListener('click', () => {
            header.classList.toggle('active')
            burgerBtn.classList.toggle('active')
            navContent.classList.toggle('active');
            body.classList.toggle('lock');
        });
    })

    // header background
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // hero carousel

    new Swiper(".hero", {
        autoplay: {
            delay: 3000,
        },
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: "fade",
        pagination: {
            el: '.hero-pagination',
            clickable: true
        },
    });
});