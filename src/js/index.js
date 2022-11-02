
import 'slick-carousel/slick/slick';
import '@fancyapps/ui';
import $ from 'jquery';

function init () {
    $('.slider').slick({
        slidesToShow: 4,
        prevArrow: '.slider-prev',
        nextArrow: '.slider-next',
        infinite: true,
    
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })


    
}




init ();