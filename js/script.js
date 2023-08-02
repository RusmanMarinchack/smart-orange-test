"use strict"

new WOW().init();

const swiperHome = new Swiper('.home__swiper', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.home__swiper-button-next',
        prevEl: '.home__swiper-button-prev',
      },
      pagination: {
        clickable: true,
        el: '.home__swiper-pagination',
      },
      on: {
        init: function() {
        //   updateSlideInfo()
        },
        slideChange: function () {
            updateSlideInfo()
          },
      },
});


function updateSlideInfo() {
    const activeSlideIndex = (swiperHome.realIndex + 1);
    const totalSlides = swiperHome.slides.length;
    

    let wrapper = document.querySelector('.index-sliders')

    if(wrapper) {
        let index = wrapper.querySelector('.index-sliders__index')
        let length = wrapper.querySelector('.index-sliders__length')
        
        index.innerHTML = `${activeSlideIndex < 10 ? "0"+activeSlideIndex : activeSlideIndex}`
        length.innerHTML = `${totalSlides < 10 ? "0"+totalSlides : totalSlides}`
    }
  }

  updateSlideInfo()



// Робимо бургер меню.
function burger() {
    let burger = document.querySelector('.header__burger')
    let innerNav = document.querySelector('.header__inner')

    if(burger) {
        burger.addEventListener('click', function() {
            this.classList.toggle('active')
            innerNav.classList.toggle('active')
        })
    }
}
burger()

// Робимо акардеони по сайту.


// При скролі додаємо клас для header щоб зафіксувати.
function fixedHeader() {
    let header = document.querySelector('.header')

    if(header) {
        if(window.matchMedia("(min-width: 1023.98px)").matches) {
            document.addEventListener('scroll', function() {
                let nextElement = header.nextElementSibling

                if(window.scrollY > header.clientHeight) {
                    header.classList.add('_scroll')
                    nextElement.style.marginTop = `${header.clientHeight}px`
                } else {
                    header.classList.remove('_scroll')
                    nextElement.style.marginTop = `0px`
                }
            })
        }
    }
}
fixedHeader()