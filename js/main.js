const copyDate = document.getElementById('copy-date');
copyDate.textContent = new Date().getFullYear();

const LINKS = document.querySelectorAll('.nav__link, .header__link, .footer__link');

LINKS.forEach((link)=> {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});
})