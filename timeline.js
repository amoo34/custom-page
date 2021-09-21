let mobile = window.matchMedia("(min-width: 0px) and (max-width: 559px)");
let tablet = window.matchMedia("(min-width: 560px) and (max-width: 1024px)");
let desktop = window.matchMedia("(min-width: 1025px)");

let swiper = undefined;

// function swiperMode() {
//   console.log(mobile.matches);
//   if (!mobile.matches) {
    swiper = new Swiper(".swiper", {
      // scrollbar: {
      //     el: '.swiper-scrollbar',
      //     draggable: false,

      // },
      direction: "vertical",

      

      mousewheel: true,
      breakpoints: {
        560: {
          direction: "vertical",
          speed: 1600,
          effect: "cards",
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            // dynamicBullets: true,
            // type: 'bullets',
            // allowSlidePrev:true,
            // allowSlideNext:true,
            renderBullet: function (index, className) {
              console.log("ssss");
              var year = document
                .querySelectorAll(".swiper-slide")
                [index].getAttribute("data-year");
              return `<span class=${className} style="display:-webkit-inline-box"> 
                  <p class="line"></p>
                  <span style="margin-left:10px" >${year}</span>
                  </span>`;
            },
            clickable: true,
          },
        }
      },
    });
  // } else if (mobile.matches) {
  //   console.log("Mobile match", swiper);
  //   if (swiper !== undefined) {
  //     swiper.destroy(true, true);
  //   }
    // swiper.detachEvents()
//   }
// }

// window.addEventListener("load", function () {
//   swiperMode();
// });

// window.addEventListener("resize", function () {
//   swiperMode();
// });



const openModal=(index)=>{
  console.log(index)
  var modal = document.getElementById(`myModal ${index}`);
  var img = document.getElementById(`img ${index}`);
  console.log(img)
  // btn.onclick = function() {
      modal.style.display = "block";
      modal.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${img.src})`
  //   }
}
// https://www.laprairie.com/dw/image/v2/AAOT_PRD/on/demandware.static/-/Library-Sites-LaPrairieSharedLibrary/default/dwa650bf52/TheHouse/Timeline/TimelineEvent-2020_M.jpg?sw=768&sh=580&sm=cut
const hideModal=(index)=>{

  var modal = document.getElementById(`myModal ${index}`);
  modal.style.display = "none";
      // modal.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${imageUrl})`
}