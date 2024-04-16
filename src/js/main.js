
function toggleItem(elem) {
	for (var i = 0; i < elem.length; i++) {
		elem[i].addEventListener("click", function (e) {
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
};

// Табы в каталоге
toggleItem(document.querySelectorAll('.equipment__tab'));

// Пункты меню
toggleItem(document.querySelectorAll('.menu__list-item'));

// Кнопки фильтра
toggleItem(document.querySelectorAll('.category__filter-item'));



// Добавляем класс у второго элемента по клику на первый
function addActive(class_one, class_two) {
	let firstItem = document.querySelector(class_one);
	let secondItem = document.querySelector(class_two);
	if(!firstItem || !secondItem) return;
	firstItem.addEventListener("click", function (e) {
		secondItem.classList.toggle('active');
		firstItem.classList.toggle('active');
	});
};


addActive('.toggle', '.header-container');
addActive('.equipment__catalog-after', '.equipment__catalog');




$(document).ready(function () {

	// Удаляем класс active у всех пунктов меню при клике на логотип
	$('.logo').click(function () {
		$('.menu__list-item').removeClass('active')
	});
	// Удаляем класс active у меню при клике на сайдбар
	$('.equipment__catalog-after').click(function () {
		$('.header-container').removeClass('active')
		$('.toggle').removeClass('active')
	});
	$('.toggle').click(function () {
		$('.equipment__catalog-after').removeClass('active')
		$('.equipment__catalog').removeClass('active')
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
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">Фотография #%curr%</a> не может быть загружена.',
			titleSrc: function (item) {
				return item.el.attr('title') + ' ' + '<small>ООО "Преком"</small>';
			}
		}
	});

	// Всплывающая форма
	$('.popupForm').magnificPopup({
		type: 'inline',
		midClick: true,
		// mainClass: 'custom-popup-class'
	});

	// Подключение фильтра MixItUp
let containerEl = document.querySelector('.category__wrap');
let mixer = mixitup(containerEl);



});



