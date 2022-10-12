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
  } else {
    stopTeamCarousel();
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
    center: true,
    items: 6.2,
    responsive:{
      0:{
        items: 3.5
      },
      1150:{
        items: 4.2
      },
      1400:{
        items: 5.2,
      },
      1600:{
        items: 6.2,
      },
    }
  });
};
function stopTeamCarousel() {
  const owl = $('.team__list');
  owl.trigger('destroy.owl.carousel');
  owl.addClass('off');
}

//open modal
document.querySelector('.about__video').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('modal-display');
  setTimeout(() => {
    document.querySelector('.modal').classList.add('modal-visible');
    const videElem = document.querySelector('.modal__video');
    if (videElem){
      videElem.currentTime = 0;
      videElem.play();
    }
  }, 100);
});
//close modal
const closeModal = () => {
  document.querySelector('.modal__video')?.pause();
  document.querySelector('.modal').classList.remove('modal-visible');
  setTimeout(() => {
    document.querySelector('.modal').classList.remove('modal-display');
  }, 300);
}
document.querySelector('.modal').addEventListener('click', () => closeModal());
document.querySelector('.modal__hero').addEventListener('click', (e) => e.stopPropagation());

//tabs
const daoTab = document.querySelector('tab-dao');
const strategicTab = document.querySelector('tab-strategic');
const exchangeTab = document.querySelector('tab-exchange');

const daoTabContent = document.querySelector('tab-content-dao');
const strategicTabContent = document.querySelector('tab-content-strategic');
const exchangeTabContent = document.querySelector('tab-content-exchange');

const tabsArr = ['dao', 'strategic', 'exchange'];

tabsArr.forEach(el => {
  document.querySelector(`.tab-${el}`).addEventListener('click', () => {
    tabsArr.filter(item => item != el).forEach(t => {
      document.querySelector(`.tab-${t}`).classList.remove('active');
      document.querySelector(`.tab-content-${t}`).classList.add('d-none');
    })
    document.querySelector(`.tab-${el}`).classList.add('active');
    document.querySelector(`.tab-content-${el}`).classList.remove('d-none');
  })
})

//table
document.querySelector('.diagramms__table-btn').addEventListener('click', () => {
  document.querySelectorAll('.short-table').forEach((el) => el.classList.toggle('d-none'))
  document.querySelectorAll('.full-table').forEach((el) => el.classList.toggle('d-none'))
})

//svg animation
const svgItemsArr = ['build', 'countingency', 'legal', 'marketing', 'operations'];
svgItemsArr.forEach((item) => {
  const svgPath = document.querySelector(`.svg-${item}`);
  if (svgPath){

    svgPath.addEventListener('mouseover', (e) => {
      svgPath.classList.add('svg-show-shadow');
      svgItemsArr.filter((i) => i !== item).forEach((el) => document.querySelector(`.item-${el}`).classList.add('opacity-02'))
    })

    svgPath.addEventListener('mouseleave', (e) => {
      e.target.classList.remove('svg-show-shadow');
      svgItemsArr.forEach((el) => document.querySelector(`.item-${el}`).classList.remove('opacity-02'))

    })
  }
})


//diagramm
const diagrammArr = ['game', 'staking', 'community', 'presale', 'sale', 'reserve', 'team', 'coin', 'ecosystem', 'partners', 'liquidity', 'marketing']
diagrammArr.forEach((item) => {
  const svgPath = document.querySelector(`.diagramm-${item}`);
  if (svgPath){

    svgPath.addEventListener('mouseover', (e) => {
      svgPath.classList.add('svg-show-shadow');
      document.querySelector(`.diagramm-${item}-bg`)?.classList.add('opacity0');
      document.querySelector(`.diagramm-${item}-text`)?.classList.add(`${item}-text-fill`);
    })

    svgPath.addEventListener('mouseleave', (e) => {
      e.target.classList.remove('svg-show-shadow');
      document.querySelector(`.diagramm-${item}-bg`)?.classList.remove('opacity0');
      document.querySelector(`.diagramm-${item}-text`)?.classList.remove(`${item}-text-fill`);
    })
  }
})