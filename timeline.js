
var timelineSwiper = new Swiper ('.swiper', {
  direction: 'vertical',
  loop: false,
  speed: 1600,
//   dynamicBullets:true,
//   forceToAxis:true,
//   paginationType: "custom",

//   paginationClickable: true,
//   nextButton: '.swiper-button-next',
//   prevButton: '.swiper-button-prev',

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
      return '<span class="' + className + '">' + year + '</span>';
    },
  },
  breakpoints: {
    768: {
      direction: 'vertical',
    }
  }
});