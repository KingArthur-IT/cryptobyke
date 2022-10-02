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
        center: true
    });

    $('.bikes__carousel').on('changed.owl.carousel', (e) => {
      setTimeout(() => {
        $('.bikes__carousel .owl-item.active').each(function(i){
          $( this ).removeClass('leftTransform');
          $( this ).removeClass('rightTransform');
          $( this ).removeClass('setTransparentsy');
  
          if (i === 0)
            $( this ).addClass('setTransparentsy');
          if (i === 1)
            $( this ).addClass('leftTransform');
          if (i === 3)
            $( this ).addClass('rightTransform');
          if (i === 4)
            $( this ).addClass('setTransparentsy');
        })
      }, 10);
    });

    $('.bikes__carousel .owl-item.active').each(function(i){
      if (i === 0)
        $( this ).addClass('setTransparentsy');
      if (i === 1)
        $( this ).addClass('leftTransform');
      if (i === 3)
        $( this ).addClass('rightTransform');
      if (i === 4)
        $( this ).addClass('setTransparentsy');
    })
});