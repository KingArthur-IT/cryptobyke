$(document).ready(function(){
    //bikes ticker
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

    //about carousel
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


    //bikes
    $('.bikes__carousel').owlCarousel({
        loop: true,
        autoplay: false,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        nav: false,
        dots: false,
        items: 5,
        center: true,
        responsive:{
          0:{
            items: 3
          },
          1100:{
            items: 5,
          },
        }
    });

    const stylesChange = (i, item) => {
      if (window.innerWidth >= 1100){
        if (i === 0)
          item.addClass('setTransparentsy');
        if (i === 1)
          item.addClass('leftTransform');
        if (i === 3)
          item.addClass('rightTransform');
        if (i === 4)
          item.addClass('setTransparentsy');
      } else {
        if (i === 0){
          item.addClass('setTransparentsy');
          item.addClass('leftTransform');
        }
        if (i === 2){
          item.addClass('rightTransform');
          item.addClass('setTransparentsy');
        }
      }
    }

    $('.bikes__carousel').on('changed.owl.carousel', (e) => {
      setTimeout(() => {
        $('.bikes__carousel .owl-item.active').each(function(i){
          $( this ).removeClass('leftTransform');
          $( this ).removeClass('rightTransform');
          $( this ).removeClass('setTransparentsy');
  
          stylesChange(i, $( this ))
        })
      }, 10);
    });
    $(document).on('click', '.bikes__item', function() {
      $('.bikes__carousel').trigger('to.owl.carousel', $(this).data( 'position' ) ); 
    });


    $('.bikes__carousel .owl-item.active').each(function(i){
      stylesChange(i, $( this ))
    })

    //stages and roadmap carousel
    if ( $(window).width() < 1024 ) {
      startStagesCarousel();
      startRoadmapCarousel();
    } else {
      $('.groups__owl-carousel').addClass('off');
      $('.roadmap__owl-carousel').addClass('off');
    }

    //team carousel
    if ( $(window).width() > 1023 ) {
      startTeamCarousel();
    } else {
      $('.team__list').addClass('off');
    }
});

$(window).resize(function() {
  if ( $(window).width() > 1023 ) {
    startTeamCarousel();
    stopCarousel('groups__owl-carousel');
    stopCarousel('roadmap__owl-carousel');
  } else {
    stopCarousel('team__list');
    startStagesCarousel();
    startRoadmapCarousel();
  }
});

function startTeamCarousel(){
  $('.team__list').owlCarousel({
    loop: false,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    nav: false,
    dots: false,
    responsive:{
      0:{
        items: 5
      },
      1150:{
        items: 5
      },
      1400:{
        items: 6,
      },
      1600:{
        items: 6,
      },
    }
  });
};


function startStagesCarousel(){
  $('.groups__owl-carousel').owlCarousel({
    loop: false,
    slideTransition: 'ease',
    nav: false,
    dots: true,
    items: 1,
  });
};

function startRoadmapCarousel(){
  $('.roadmap__owl-carousel').owlCarousel({
    loop: false,
    slideTransition: 'ease',
    nav: false,
    dots: false,
    responsive:{
      0:{
        items: 1,
        stagePadding: 50
      },
      425:{
        items: 1,
        stagePadding: 50
      },
      600:{
        items: 2,
      },
    }
  });
};

function stopCarousel(className) {
    const owl = $(`.${className}`);
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
  }