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
      e.preventDefault();
    });
  };
}
toggleItem(document.querySelectorAll('.menu__list-item'));


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



});



