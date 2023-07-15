const copyDate = document.getElementById('copy-date');
copyDate.textContent = new Date().getFullYear();

const LINKS = document.querySelectorAll(
  '.nav__link, .header__link, .footer__link'
);

LINKS.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = link.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});



const cb = (entries) => {
  const {isIntersecting, target} = entries[0];
  if(isIntersecting) {
    target.classList.add('card-visible')
  } else {
    target.classList.remove('card-visible')
  }
}

const observer = new IntersectionObserver(
 cb,
  {
    threshold: 0.3,
  }
);

const cardsServices = document.querySelectorAll('.services__card, .about__card, h2, h3, .footer__link').forEach(el => {
  observer.observe(el)
})


