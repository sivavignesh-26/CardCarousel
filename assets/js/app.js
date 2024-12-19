//Video players
let videoPlayer = document.getElementById('video-player')
let myVideo = document.getElementById('myVideo')

function stopVideo() {
    videoPlayer.style.display = 'none'
}

function playVideo(file) {
    myVideo.src = file
    videoPlayer.style.display = 'block'
}

// Carousel-->
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
      dynamicBullets : true
    },
    loop: true,
    breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 0,
        },
        1000: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2.5,
      slideShadows: false,
    },
    // autoplay: {
    //     delay:3000,
    //     disableOnInteractions:false,
    // }

  });
  

//============================================>?
  new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 20,

    //Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },

        594: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        },
    }
  });
