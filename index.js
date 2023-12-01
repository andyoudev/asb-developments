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
    } else {
      if(entry.target.classList.contains('anim-one')) {
          entry.target.classList.remove('active-one');
      }
      if(entry.target.classList.contains('anim-two')) {
          entry.target.classList.remove('active-two');
      }
    }
  });
}

let observer = new IntersectionObserver(myCallback,options);

elements.forEach(element => {
  observer.observe(element);
})
