// Dynamic Copyright Year

let thisYear = new Date();

$("#dynYear").text(thisYear.getFullYear());

const elements = document.querySelectorAll('.anim-on-scroll');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: .3
}

const myCallback = (entries) => {
  entries.forEach(entry => {
    if(entry.boundingClientRect.top >= 0) {
      if(entry.isIntersecting){
        if(entry.target.classList.contains('anim-one')) {
            entry.target.classList.add('active-one');
        }
        if(entry.target.classList.contains('anim-two')) {
            entry.target.classList.add('active-two');
        }
        if(entry.target.classList.contains('anim-three')) {
            entry.target.classList.add('active-three');
        }
        if(entry.target.classList.contains('deco-img')) {
            entry.target.classList.add('active-img');
        }
        if(entry.target.classList.contains('banner-anim-trigger')) {
            const banner = document.querySelector('.wand-sticky-top-bar');
            banner.classList.add('top-bar-anim');
            const bannerLogo = document.querySelector('.logo-img-landing');
            bannerLogo.classList.add('logo-anim');
            //console.log(window.pageYOffset);
        }
      } else {
        if(entry.target.classList.contains('hidden-trigger-two')) {
          const banner = document.querySelector('.wand-sticky-top-bar');
          if(banner.classList.contains('top-bar-anim')) {
            banner.classList.remove('top-bar-anim');
            const bannerLogo = document.querySelector('.logo-img-landing');
            bannerLogo.classList.remove('logo-anim');
          }
          const allOnes = document.querySelectorAll('.anim-one');
          if(allOnes) {
            allOnes.forEach(one => {
              if(one.classList.contains('active-one')) {
                  one.classList.remove('active-one');
              }
            });
          }
          const allTwos = document.querySelectorAll('.anim-two');
          if(allTwos) {
            allTwos.forEach(two => {
              if(two.classList.contains('active-two')) {
                  two.classList.remove('active-two');
              }
            });
          }
          const allThrees = document.querySelectorAll('.anim-three');
          if(allThrees) {
            allThrees.forEach(three => {
              if(three.classList.contains('active-three')) {
                  three.classList.remove('active-three');
              }
            });
          }
          const allDecoImgs = document.querySelectorAll('.deco-img');
          if(allDecoImgs) {
            allDecoImgs.forEach(img => {
              if(img.classList.contains('active-img')) {
                  img.classList.remove('active-img');
              }
            });
          }
        }
      }
    //}
    // if(entry.isIntersecting){
    //   if(entry.target.classList.contains('anim-one')) {
    //       entry.target.classList.add('active-one');
    //   }
    //   if(entry.target.classList.contains('anim-two')) {
    //       entry.target.classList.add('active-two');
    //   }
    //   if(entry.target.classList.contains('anim-three')) {
    //       entry.target.classList.add('active-three');
    //   }
    //   if(entry.target.classList.contains('deco-img')) {
    //       entry.target.classList.add('active-img');
    //   }
    //   if(entry.target.classList.contains('banner-anim-trigger')) {
    //       const banner = document.querySelector('.wand-sticky-top-bar');
    //       banner.classList.add('top-bar-anim');
    //       const bannerLogo = document.querySelector('.logo-img-landing');
    //       bannerLogo.classList.add('logo-anim');
    //       //console.log(window.pageYOffset);
    //   }
    //   if(entry.target.classList.contains('hidden-trigger-two')) {
    //     const banner = document.querySelector('.wand-sticky-top-bar');
    //     if(banner.classList.contains('top-bar-anim')) {
    //       banner.classList.remove('top-bar-anim');
    //       const bannerLogo = document.querySelector('.logo-img-landing');
    //       bannerLogo.classList.remove('logo-anim');
    //     }
    //     const allOnes = document.querySelectorAll('.anim-one');
    //     if(allOnes) {
    //       allOnes.forEach(one => {
    //         if(one.classList.contains('active-one')) {
    //             one.classList.remove('active-one');
    //         }
    //       });
    //     }
    //     const allTwos = document.querySelectorAll('.anim-two');
    //     if(allTwos) {
    //       allTwos.forEach(two => {
    //         if(two.classList.contains('active-two')) {
    //             two.classList.remove('active-two');
    //         }
    //       });
    //     }
    //     const allThrees = document.querySelectorAll('.anim-three');
    //     if(allThrees) {
    //       allThrees.forEach(three => {
    //         if(three.classList.contains('active-three')) {
    //             three.classList.remove('active-three');
    //         }
    //       });
    //     }
    //     const allDecoImgs = document.querySelectorAll('.deco-img');
    //     if(allDecoImgs) {
    //       allDecoImgs.forEach(img => {
    //         if(img.classList.contains('active-img')) {
    //             img.classList.remove('active-img');
    //         }
    //       });
    //     }
    //   }
    // } //else {
      // if(entry.target.classList.contains('anim-one')) {
      //     entry.target.classList.remove('active-one');
      // }
      // if(entry.target.classList.contains('anim-two')) {
      //     entry.target.classList.remove('active-two');
      // }
      // if(entry.target.classList.contains('anim-three')) {
      //     entry.target.classList.remove('active-three');
      // }
      //if (document.body.scrollTop == 0 || document.documentElement.scrollTop == 0)
//       if(window.pageYOffset == 0)
//           {
//             console.log("top: " + window.pageYOffset);
//           //}
// //      if(entry.target.classList.contains('banner-anim-trigger') && ((window.innerWidth > 1000 && window.pageYOffset < 100) || (window.innerWidth < 1000 && window.pageYOffset < 480))) {
//         //if(entry.target.classList.contains('banner-anim-trigger')) {
//           const banner = document.querySelector('.wand-sticky-top-bar');
//           banner.classList.remove('top-bar-anim');
//           const bannerLogo = document.querySelector('.logo-img-landing');
//           bannerLogo.classList.remove('logo-anim');
//           const allOnes = document.querySelectorAll('.anim-one');
//           if(allOnes) {
//             allOnes.forEach(one => {
//               one.classList.remove('active-one');
//             });
//           }
//           const allTwos = document.querySelectorAll('.anim-two');
//           if(allTwos) {
//             allTwos.forEach(two => {
//               two.classList.remove('active-two');
//             });
//           }
//           const allThrees = document.querySelectorAll('.anim-three');
//           if(allThrees) {
//             allThrees.forEach(three => {
//               three.classList.remove('active-three');
//             });
//           }
//           const allDecoImgs = document.querySelectorAll('.deco-img');
//           if(allDecoImgs) {
//             allDecoImgs.forEach(img => {
//               img.classList.remove('active-img');
//             });
//           }

      //}
  //  }
    }
  });
}

let observer = new IntersectionObserver(myCallback,options);

elements.forEach(element => {
  observer.observe(element);
})

const landingAnim = document.querySelector('.anim-land');
landingAnim.classList.add('active-land');

const mobLandingAnim = document.querySelector('.mob-anim-land');
mobLandingAnim.classList.add('mob-active-land');

// const bannerAnimTriggerVar = document.querySelector('.banner-anim-trigger');
// let isVisible = false;
//
// let scrolling = false;
//
// window.scroll = () => {
//     scrolling = true;
// };
//
// setInterval(() => {
//     if (scrolling) {
//         scrolling = false;
//
//         console.log("scrolling");
//         // if(checkVisible(bannerAnimTriggerVar)) {
//         //   if(!isVisible) { //it is visible, reset to start
//         //     const banner = document.querySelector('.wand-sticky-top-bar');
//         //     banner.classList.remove('top-bar-anim');
//         //     const bannerLogo = document.querySelector('.logo-img-landing');
//         //     bannerLogo.classList.remove('logo-anim');
//         //     const allOnes = document.querySelectorAll('.anim-one');
//         //     if(allOnes) {
//         //       allOnes.forEach(one => {
//         //         one.classList.remove('active-one');
//         //       });
//         //     }
//         //     const allTwos = document.querySelectorAll('.anim-two');
//         //     if(allTwos) {
//         //       allTwos.forEach(two => {
//         //         two.classList.remove('active-two');
//         //       });
//         //     }
//         //     const allThrees = document.querySelectorAll('.anim-three');
//         //     if(allThrees) {
//         //       allThrees.forEach(three => {
//         //         three.classList.remove('active-three');
//         //       });
//         //     }
//         //     const allDecoImgs = document.querySelectorAll('.deco-img');
//         //     if(allDecoImgs) {
//         //       allDecoImgs.forEach(img => {
//         //         img.classList.remove('active-img');
//         //       });
//         //     }
//         //   }
//         //   isVisible = true;
//         // } else {
//         //   if(isVisible) { //not visible so shrink banner
//         //     const banner = document.querySelector('.wand-sticky-top-bar');
//         //     banner.classList.add('top-bar-anim');
//         //     const bannerLogo = document.querySelector('.logo-img-landing');
//         //     bannerLogo.classList.add('logo-anim');
//         //   }
//         //   isVisible = false;
//         // }
//
//
//     }
// },300);

// window.addEventListener("scroll", function() {
//   if(checkVisible(bannerAnimTriggerVar)) {
//     if(!isVisible) { //it is visible, reset to start
//       const banner = document.querySelector('.wand-sticky-top-bar');
//       banner.classList.remove('top-bar-anim');
//       const bannerLogo = document.querySelector('.logo-img-landing');
//       bannerLogo.classList.remove('logo-anim');
//       const allOnes = document.querySelectorAll('.anim-one');
//       if(allOnes) {
//         allOnes.forEach(one => {
//           one.classList.remove('active-one');
//         });
//       }
//       const allTwos = document.querySelectorAll('.anim-two');
//       if(allTwos) {
//         allTwos.forEach(two => {
//           two.classList.remove('active-two');
//         });
//       }
//       const allThrees = document.querySelectorAll('.anim-three');
//       if(allThrees) {
//         allThrees.forEach(three => {
//           three.classList.remove('active-three');
//         });
//       }
//       const allDecoImgs = document.querySelectorAll('.deco-img');
//       if(allDecoImgs) {
//         allDecoImgs.forEach(img => {
//           img.classList.remove('active-img');
//         });
//       }
//     }
//     isVisible = true;
//   } else {
//     if(isVisible) { //not visible so shrink banner
//       const banner = document.querySelector('.wand-sticky-top-bar');
//       banner.classList.add('top-bar-anim');
//       const bannerLogo = document.querySelector('.logo-img-landing');
//       bannerLogo.classList.add('logo-anim');
//     }
//     isVisible = false;
//   }
// });

// $(document).ready(function(){
//
// });
