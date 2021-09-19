var interleaveOffset = -.5;


var interleaveEffect = {
  
    onProgress: function(swiper, progress){
        console.log("Swiper",swiper)
      for (var i = 0; i < swiper.slides.length; i++){
        var slide = swiper.slides[i];
        var translate, innerTranslate;
        progress = slide.progress;
        
        if (progress > 0) {
          translate = progress * swiper.width;
          innerTranslate = translate * interleaveOffset;        
        }
        else {        
          innerTranslate = Math.abs( progress * swiper.width ) * interleaveOffset;
          translate = 0;
        }
  
        $(slide).css({
          transform: 'translate3d(' + translate + 'px,0,0)'
        });
  
        $(slide).find('.slide-inner').css({
          transform: 'translate3d(' + innerTranslate + 'px,0,0)'
        });
      }
    },
  
    onTouchStart: function(swiper){
        console.log("Swiper",swiper)
      for (var i = 0; i < swiper.slides.length; i++){
        $(swiper.slides[i]).css({ transition: '' });
      }
    },
  
    onSetTransition: function(swiper, speed) {
        console.log("Swiper",swiper)
      for (var i = 0; i < swiper.slides.length; i++){
        $(swiper.slides[i])
          .find('.slide-inner')
          .andSelf()
          .css({ transition: speed + 'ms' });
      }
    }
  };


  var swiperOptions = {
	
    effect: "coverflow",
    // centeredSlides: true,
	// slidesPerView: 1,
	// loop: true,
    // width:1340,
	speed: 600,
    grabCursor: true,
	centeredSlides: true,
	// slidesPerView: 'auto',
    // width:'auto',
    spaceBetween: 0,
    slideToClickedSlide:true,
    coverflowEffect: {
        // rotate: 0, // Slide rotate in degrees
        // stretch: 0, // Stretch space between slides (in px)
        // depth: 100, // Depth offset in px (slides translate in Z axis)
        // modifier: 1, // Effect multipler
        // slidesPerView:'auto',
        // slideShadows : true, // Enables slides shadows
        // height:300,
        rotate: 0,
			stretch: 100,
			depth: 150,
			modifier: 1.2,
			slideShadows : false,
        // rotate: 0,
		// stretch: 0,
		// depth: 200,
		// modifier: 1,
		// slideShadows: true,
      },
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints: {
		320: {
			slidesPerView: 1,
		},
		560: {
			slidesPerView: 3,
		},
		990: {
			slidesPerView: 4
		}
	},

    on: {
      
        slideChange: function() {
            console.log("Slide change",this.snapIndex)
            const title = document.getElementById("js-title")
            const name = document.getElementById("js-name")
            const description = document.getElementById("js-description")
            console.log(title,title.value)
            switch(this.snapIndex){
                
                case 0:
                    title.innerHTML = "LA PRAIRIE X MAOTIK"
                    description.innerHTML = "A digital voyage to the realms of the night"
                    break;
                case 1:
                    console.log(this.snapIndex)
                    title.innerHTML = "THE ARTIST RESIDENCY"
                    description.innerHTML = "A retreat at the summit"
                    break;
                case 2:
                    title.innerHTML = "LA PRAIRIE X ECAL"
                    description.innerHTML = "Supporting young talents"
                    break;
                case 3:
                    title.innerHTML = "THE ARTIST RESIDENCY"
                    description.innerHTML = "A retreat at the summit"
                    break;
                case 4:
                    title.innerHTML = "LA PRAIRIE X ECAL"
                    description.innerHTML = "Supporting young talents"
                    break;
            }
            
        },
      }
  };

  swiperOptions = $.extend(swiperOptions);

  const swiper = new Swiper('.swiper', swiperOptions);



var kaSwiper1 = new Swiper ('#ka-swiper1', {
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween : 1,
    autoHeight: true,
    breakpoints :{
      768:{
        spaceBetweenSlides: 10
      }
    }
  });