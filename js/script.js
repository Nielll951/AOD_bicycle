$('.icon-menu').click(function(event) {
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
});

function ibg() {
   $.each($('.ibg'), function(index, val) {
      if($(this).find('img').length>0) {
         $(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
      }
   });
}
ibg();

// SLIDER
$(document).ready(function() {
   $('.slider__body').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: true
   });
});


// if($('.slider__body').length>0) {
//    $('.slider__item').slick({
//       dots: true,
//       arrows: false,
//       accessibility: false,
//       slidesToShow: 1,
//       autoplaySpeed: 3000,
//       adaptiveHeight: true,
//       nextArrow: '<button type="button" class="slick-next"></button>',
//       nextArrow: '<button type="button" class="slick-prev"></button>',
//       responsive: [{
//          breakpoints: 768,
//          settings: {}
//       }]
//    });
// }
