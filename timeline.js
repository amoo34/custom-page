
var timelineSwiper = new Swiper ('.swiper', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
  effect:'cards',
//   hashNavigation: {
//     replaceState: true,
//   },
//   dynamicBullets:true,
//   forceToAxis:true,
//   paginationType: "custom",
// slidesPerView: "auto",
// freeMode: true,
loop: true,
// loopedSlides: 8, // according to the codepen
mousewheel: {
  releaseOnEdges: true,
},

//   paginationClickable: true,
//   nextButton: '.swiper-button-next',
//   prevButton: '.swiper-button-prev',
scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  pagination: {
    el: '.swiper-pagination',
    // dynamicBullets: true,
    // type: 'bullets',
    // allowSlidePrev:true,
    // allowSlideNext:true,
    clickable:true,
    renderBullet: function (index, className) {
        console.log("ssss")
      var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
      return `<span class=${className} style="display:-webkit-inline-box"> 
      <p class="line"></p>
      <span style="margin-left:10px" >${year}</span>
      </span>`;
    },
  },
  breakpoints: {
    768: {
      direction: 'vertical',
    }
  }
});
