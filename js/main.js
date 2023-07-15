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
  entries.forEach(el => {
    const {isIntersecting, target
    } = el;
    if(isIntersecting) {
      target.classList.add('card-visible')
    } else {
      target.classList.remove('card-visible')
    }
  })
}

const cb2 = (entries) => {
  entries.forEach(el => {
    const {isIntersecting, target
    } = el;
    if(isIntersecting) {
      target.classList.add('title-visible')
    } else {
      target.classList.remove('title-visible')
    }
  })
}

const observer = new IntersectionObserver(
 cb,
  {
    threshold: 0.3,
  }
);

const observerTitle = new IntersectionObserver(
  cb2,
   {
     threshold: 0.3,
   }
 );

const cardsServices = document.querySelectorAll('.services__card, .about__card, .footer__link, .footer__contacts > *').forEach(el => {
  observer.observe(el)
})

observerTitle.observe(document.querySelector('.touch__h2'))


