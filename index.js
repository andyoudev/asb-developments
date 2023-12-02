// Dynamic Copyright Year

let thisYear = new Date();

$("#dynYear").text(thisYear.getFullYear());

const elements = document.querySelectorAll('.anim-on-scroll');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: .4
}

const myCallback = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      if(entry.target.classList.contains('anim-one')) {
          entry.target.classList.add('active-one');
      }
      if(entry.target.classList.contains('anim-two')) {
          entry.target.classList.add('active-two');
      }
      if(entry.target.classList.contains('banner-anim-trigger')) {
          const banner = document.querySelector('.wand-sticky-top-bar');
          banner.classList.add('top-bar-anim');
          const bannerLogo = document.querySelector('.logo-img-landing');
          bannerLogo.classList.add('logo-anim');
      }
    } else {
      if(entry.target.classList.contains('anim-one')) {
          entry.target.classList.remove('active-one');
      }
      if(entry.target.classList.contains('anim-two')) {
          entry.target.classList.remove('active-two');
      }
      if(entry.target.classList.contains('banner-anim-trigger') && window.pageYOffset <= 100) {
          const banner = document.querySelector('.wand-sticky-top-bar');
          banner.classList.remove('top-bar-anim');
          const bannerLogo = document.querySelector('.logo-img-landing');
          bannerLogo.classList.remove('logo-anim');
      }
    }
  });
}

let observer = new IntersectionObserver(myCallback,options);

elements.forEach(element => {
  observer.observe(element);
})
