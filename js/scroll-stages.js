// //stages - scroll to left
const groupsCarousel = document.querySelector('.groups__carousel-content');
const topOffset = 150;
var groupsCarouselTransform = 0;
const transformStep = 0.3;
const maxTransform = 66;
var activeItem = 1;

window.addEventListener('wheel', (e) => {
  const isOnPosition = groupsCarousel.getBoundingClientRect().top - topOffset < 0;
  const isOnSection = groupsCarousel.getBoundingClientRect().top - topOffset + groupsCarousel.getBoundingClientRect().height < 0;
  const isDownDirection = e.wheelDeltaY < 0;

  //lock on scroll
  if ((isOnPosition && groupsCarouselTransform <= 0 && isDownDirection) || 
      (!isOnPosition && groupsCarouselTransform >= maxTransform && !isDownDirection)
  ){
      document.querySelector('body').classList.add('stop-scrolling');
      const sign = isDownDirection ? 1 : -1;
      groupsCarouselTransform += sign * transformStep;
      groupsCarousel.style["transform"] = `translateX(-${groupsCarouselTransform}%)`
  }

  //unlock on scroll
  if ((groupsCarouselTransform >= maxTransform && isDownDirection && !isOnSection) ||
      (groupsCarouselTransform <= 0 && !isDownDirection)
  ){
    document.querySelector('body').classList.remove('stop-scrolling');
  }

  //scroll left-right
  if (groupsCarouselTransform > 0 && groupsCarouselTransform < maxTransform){
      const direction = isDownDirection ? 1 : -1;
      groupsCarouselTransform += direction * transformStep;
      groupsCarousel.style["transform"] = `translateX(-${groupsCarouselTransform}%)`
  }

  if (groupsCarouselTransform < 20)
    activeItem = 1
  else if (groupsCarouselTransform < 50)
    activeItem = 2
    else activeItem = 3;

  groupsCarousel.querySelectorAll('.groups__item').forEach((el, index) => {
    if (el.classList.contains('active') && activeItem !== index + 1)
      el.classList.remove('active');
    if (!el.classList.contains('active') && activeItem === index + 1)
      el.classList.add('active');
  })
    
})
