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
    $(document).on('click', '.bikes__item', function() {
      $('.bikes__carousel').trigger('to.owl.carousel', $(this).data( 'position' ) ); 
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


    //team carousel
    $('.team__list').owlCarousel({
      loop: false,
      slideTransition: 'linear',
      autoplayTimeout: 2000,
      autoplaySpeed: 2000,
      nav: false,
      dots: false,
      center: true,
      items: 6.2
    });
});


//open modal
document.querySelector('.about__video').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('modal-display');
  setTimeout(() => {
    document.querySelector('.modal').classList.add('modal-visible');
  }, 100);
});
//close modal
const closeModal = () => {
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