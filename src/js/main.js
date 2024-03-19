
function toggleItem(elem) {
  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function(e) {
      var current = this;
      for (var i = 0; i < elem.length; i++) {
        if (current != elem[i]) {
          elem[i].classList.remove('active');
        } else if (current.classList.contains('active') === true) {
          current.classList.remove('active');
        } else {
          current.classList.add('active')
        }
      }
      // e.preventDefault();
    });
  };
}

// Табы в каталоге
toggleItem(document.querySelectorAll('.equipment__tab'));

// Пункты меню
toggleItem(document.querySelectorAll('.menu__list-item'));

// Кнопки фильтра
toggleItem(document.querySelectorAll('.category__filter-item'));



$(document).ready(function(){

// Удаляем класс active у всех пунктов меню при клике на логотип
	$('.logo').click(function () {
		$('.menu__list-item').removeClass('active')
	});

// Подключаем слайдер slick для баннера
  $('.banner-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });

// Магнифик попаб на галерею фоток товара
  $('.sigle-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: false,
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Фотография #%curr%</a> не может быть загружена.',
      titleSrc: function(item) {
        return item.el.attr('title') + ' ' + '<small>ООО "Преком"</small>';
      }
    }
  });

  // Всплывающая форма
  $('.popupForm').magnificPopup({
		type:'inline',
		midClick: true,
		// mainClass: 'custom-popup-class'
	});



});



