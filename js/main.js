$(document).ready(function(){
    $('.bikes-ticker__carousel').owlCarousel({
      loop: true,
      autoplay: true,
      slideTransition: 'linear',
      autoplayTimeout: 2000,
      autoplaySpeed: 2000,
      autoplayHoverPause: true,
      nav: false,
      dots: false,
      items: 8,
      responsive:{
        0:{
          items: 2
        },
        500:{
          items: 3
        },
        768:{
          items: 4
        },
        1024:{
          items: 5,
        },
        1400:{
          items: 5,
        }
      }
    });

    var aboutOwl = $('.about__carousel').owlCarousel({
        loop: true,
        autoplay: false,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        nav: false,
        dots: false,
        items: 1,
    });

    $('.about__left-btn').click(function() {
        aboutOwl.trigger('prev.owl.carousel');
    })
    $('.about__right-btn').click(function() {
        aboutOwl.trigger('next.owl.carousel');
    })


    $('.bikes__carousel').owlCarousel({
        loop: true,
        autoplay: false,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        nav: false,
        dots: false,
        items: 5,
    });
});