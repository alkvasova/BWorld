
import 'slick-carousel/slick/slick';
import '@fancyapps/ui';
import $ from 'jquery';


function init () {
    $('.slider').slick({
        slidesToShow: 5,
        prevArrow: '.slider-prev',
        nextArrow: '.slider-next',
        infinite: true,
    
    responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
            infinite: true,
           
          }
        },
        {
          breakpoint: 1024,
          settings: {
            infinite: true,
            slidesToShow: 3,
            
          }
        },
        {
          breakpoint: 680,
          settings: {
            slidesToShow: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            infinite: true,
          }
        }
      ]
    });

}

init ();