import GraphModal from 'graph-modal';

  if(document.querySelector('.card-form__btn') !== null) {
    const modal = new GraphModal();
  }
  
if(document.querySelector('.mySwiper') !== null) {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
  
      breakpoints: {
        300: {               // от 576px до 300px
          // slidesPerGroup: 1,
          slidesPerView: 3,
        },
  
        577: {              // от 768px до 576px
          slidesPerView: 4,
          // direction: 'vertical',
        },
        769: {              // от 1024px до 769px
          slidesPerGroup: 3,
        },
        1025: {            // от 3000px до 1025px
          slidesPerGroup: 4,
        }
      },
  
    });
    //модальное окно (нижний слайдер)
    var swiper1 = new Swiper(".mySwiper1", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
  
      breakpoints: {
        300: {               // от 576px до 300px
          // slidesPerGroup: 1,
          slidesPerView: 3,
        },
  
        577: {              // от 768px до 576px
          slidesPerView: 3,
        },
        769: {              // от 1024px до 769px
          slidesPerGroup: 3,
        },
        1025: {            // от 3000px до 1025px
          slidesPerGroup: 4,
        }
      },
  
    });
  
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      loop: true,
      thumbs: {
        swiper: swiper,
      },
    });
  
    var swiper3 = new Swiper(".mySwiper3", {
      spaceBetween: 10,
      loop: true,
      thumbs: {
        swiper: swiper,
      },
    });
  
  }

  if(document.querySelector('.products__swiper') !== null) {

    const usefulSwiper = new Swiper('.products__swiper', {
      direction: 'horizontal',
      loop: true,
  
      breakpoints: {
        300: {
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 16
        },
  
        576: {              //до 576
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 32
        },
        769: {              //до 769
          slidesPerGroup: 3,
          slidesPerView: 3,
          spaceBetween: 32
        },
        1025: {            //до 1025
          slidesPerGroup: 4,
          slidesPerView: 4,
          spaceBetween: 32
        }
      },
  
      navigation: {
        nextEl: '.products__swiper-button-next',
        prevEl: '.products__swiper-button-prev',
      },
  
    })
  };

  if(document.querySelector('.swiper') !== null) {

    const swiper = new Swiper('.hero__swiper', {
      direction: 'horizontal',
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
  
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  
    const offersSwiper = new Swiper('.offers__swiper', {
      direction: 'horizontal',
      loop: true,
  
      breakpoints: {
        300: {               // от 576px до 300px
          slidesPerGroup: 1,
          slidesPerView: 1,
        },
  
        577: {              // от 768px до 576px
          slidesPerGroup: 2,
          slidesPerView: 2,
          spaceBetween: 32
        },
        769: {              // от 1024px до 769px
          slidesPerGroup: 3,
          slidesPerView: 3,
          spaceBetween: 32
        },
        1025: {            // от 3000px до 1025px
          slidesPerGroup: 3,
          slidesPerView: 'auto',
          spaceBetween: 32
        }
      },
  
      navigation: {
        nextEl: '.offers__swiper-button-next',
        prevEl: '.offers__swiper-button-prev',
      },
  
    });
  
    const usefulSwiper = new Swiper('.useful__swiper', {
      direction: 'horizontal',
      loop: true,
  
      breakpoints: {
        300: {
          slidesPerGroup: 1,
          slidesPerView: 1,
        },
  
        576: {              //до 576
          slidesPerGroup: 1,
          slidesPerView: 2,
          spaceBetween: 32
        },
        769: {              //до 769
          slidesPerGroup: 1,
          slidesPerView: 3,
          spaceBetween: 32
        },
        1025: {            //до 1025
          slidesPerGroup: 1,
          slidesPerView: 2,
          spaceBetween: 32
        }
      },
  
      navigation: {
        nextEl: '.useful__swiper-button-next',
        prevEl: '.useful__swiper-button-prev',
      },
    })
  }


  if(document.querySelector('.header__select') !== null) {

    const headerCity = document.querySelector('.js-choice-city');
    const choicesCity = new Choices(headerCity, {
      searchEnabled: false, //убрал строку поиска
      itemSelectText: "",    //убрал подсказку
    })
  
    const headerCategories = document.querySelector('.js-choice-headerCategories');

    const choicesCategories = new Choices(headerCategories, {
      searchEnabled: false, //убрал строку поиска
      itemSelectText: "",    //убрал подсказку
    })
  }
 
  if(document.getElementById('rating-btn') !== null) {

    const ratingBtn = document.getElementById('rating-btn')
    let ratingCard = document.querySelectorAll('.rating__card').length;
    let items = 8;
  
    ratingBtn.addEventListener('click', function() {
      items +=4;
      const array = Array.from(document.querySelector('.rating__block').children);
      const visibleItem = array.slice(0, items);
  
      visibleItem.forEach(el => el.classList.add('is-visible'));

      console.log(visibleItem.length)
  
      if (visibleItem.length === ratingCard) {
        ratingBtn.textContent = "В каталог"
        ratingBtn.addEventListener('click', () => {
          location.href = "/catalog.html"
        })
      }
    })
  };

  import noUiSlider from 'nouislider';

  if(document.getElementById('steps-slider') !== null) {

    const  stepsSlider = document.getElementById('steps-slider');
    const  input0 = document.getElementById('input-with-keypress-0');
    const  input1 = document.getElementById('input-with-keypress-1');
    const  inputs = [input0, input1];
  
  noUiSlider.create(stepsSlider, {
      start: [2000, 150000],
      connect: true,
      range: {
          'min': 0,
          'max': 200000
      },
      step: 1,

  });
  
  stepsSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = parseInt(values[handle]);
  });
  
  inputs.forEach(function (input, handle) {
  
    input.addEventListener('change', function () {
        stepsSlider.noUiSlider.setHandle(handle, this.value);
    });
    input.addEventListener('keydown', function (e) {
  
      const values = stepsSlider.noUiSlider.get();
      const value = Number(values[handle]);
  
        const steps = stepsSlider.noUiSlider.steps();
        const step = steps[handle];
  
        let position;
  
        switch (e.which) {
  
            case 13:
                stepsSlider.noUiSlider.setHandle(handle, this.value);
                break;
  
            case 38:

                position = step[1];

                if (position === false) {
                    position = 1;
                }
                if (position !== null) {
                    stepsSlider.noUiSlider.setHandle(handle, value + position);
                }
  
                break;
  
            case 40:
  
                position = step[0];
  
                if (position === false) {
                    position = 1;
                }
  
                if (position !== null) {
                    stepsSlider.noUiSlider.setHandle(handle, value - position);
                }
  
                break;
        }
    });
  })
  };

(function(){
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('[data-menu]');
    const menuItems = document.querySelectorAll('[data-menu-item]');
  
    burger.addEventListener('click', (e) => {
      burger.classList.toggle('burger--active');
      menu.classList.toggle('menu--active');
      document.body.classList.toggle("stop-scroll");
  
      if (menu.classList.contains('menu--active')) {
        burger.setAttribute('aria-expanded', 'true');
        burger.setAttribute('aria-label', 'Закрыть меню');

      } else {
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Открыть меню');
        document.body.classList.remove("stop-scroll");

      }
    });
  
    menuItems.forEach(el => {
      el.addEventListener('click', () => {
        burger.setAttribute('aria-expanded', 'false');
        burger.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('burger--active');
        menu.classList.remove('menu--active');
        document.body.classList.remove("stop-scroll");
      });
    });
  })();

  function validate(input) {
    if (input.value.length < 2) { 
      input.classList.add('is-invalid')
      return false;
    }
    
    if (input.type === "tel") {
      if (input.value.includes('_')) {
      input.classList.add('is-invalid')
      return false;
      }
    }

    if (input.type === "email") {
      if (input.value.includes('@') === false || input.value.includes('.') === false){
        input.classList.add('is-invalid')
        return false;
      }
    }
    return true;
  }

  import Inputmask from "inputmask";

  const registrationInputTel = document.querySelector('.registration-form__input-tel')

  if (registrationInputTel !== null) {
    var im = new Inputmask("+7(999)-999-99-99");
    im.mask(registrationInputTel);
  }


   const registrationBtn = document.querySelector('.registration-form__btn')
   if (registrationBtn !== null) {
    registrationBtn.addEventListener('click', (e) => {
      e.preventDefault()
      const registrationInputName = document.querySelector('.registration-form__input-name')  
      const registrationInputEmail = document.querySelector('.registration-form__input-email') 
      const checkbox = document.querySelector('.custom-checkbox__field')
  
      const inputIsInvalid = document.querySelector('.is-invalid')
        if (inputIsInvalid !== null) {
          inputIsInvalid.classList.remove('is-invalid')
        }
        validate(registrationInputName)
        validate(registrationInputTel)
        validate(registrationInputEmail)
  
        if (validate(registrationInputName) === true && validate(registrationInputTel) === true && validate(registrationInputEmail) === true && checkbox.checked === true) {
          const modal = new GraphModal();
        }
    })
   }

  const cardBuy = document.querySelector('.card__price-btn');
  if (cardBuy !== null) {
  cardBuy.addEventListener('click', () => {
    const selector = document.querySelector(".card-form__input-tel");

    var im = new Inputmask("+7(999)-999-99-99");
    im.mask(selector);
  })
}

  const cardBtn = document.querySelector('.card-form__btn');
  if (cardBtn !== null) {
    cardBtn.addEventListener('click', (e) => {
      e.preventDefault()
      const modal = new GraphModal();
  
      const inputName = document.querySelector('.card-form__input-name');
      const inputTel = document.querySelector('.card-form__input-tel');
      const checkbox = document.querySelector('.custom-checkbox__field')
  
      const inputIsInvalid = document.querySelector('.is-invalid')
      if (inputIsInvalid !== null) {
        inputIsInvalid.classList.remove('is-invalid')
      }
      validate(inputName)
      validate(inputTel)
  
      if (validate(inputName) === true && validate(inputTel) === true && checkbox.checked === true) {
        cardBtn.setAttribute('data-graph-path', 'cardThanks')
      }
    })
  }

  import GraphTabs from 'graph-tabs';

  if (document.querySelector('.tabs') !== null) {
    const tabs = new GraphTabs('tab');
  }
  
