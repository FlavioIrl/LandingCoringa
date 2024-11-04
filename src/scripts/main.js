let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header__list__icone'); 

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.querySelector('.icone__desenho').classList.remove('active');
                links.querySelector('.icone__texto').classList.remove('active');
            });

            let activeLink = document.querySelector(`.header__link[href*=${id}]`).parentElement;
            activeLink.querySelector('.icone__desenho').classList.add('active');
            activeLink.querySelector('.icone__texto').classList.add('active');
        }
    });
};
