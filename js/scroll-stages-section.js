// //stages - scroll to left
const groupsCarousel = document.querySelector('.groups__carousel-content');
const topOffset = 250;
let groupsCarouselTransform = 0;
const transformStep = 33;
const maxTransform = 66;
let activeItem = 1;
let isTransforming = false;
let isLocked = false;

window.addEventListener('wheel', (e) => {
  
  if (window.innerWidth < 1024 || isTransforming) return;

  const isOnPosition = groupsCarousel.getBoundingClientRect().top - topOffset < 0;
  const isOnSection = groupsCarousel.getBoundingClientRect().top - topOffset + groupsCarousel.getBoundingClientRect().height < 0;
  const isDownDirection = e.wheelDeltaY < 0;

  //lock on scroll
  if ((isOnPosition && groupsCarouselTransform <= 0 && isDownDirection && !isOnSection) || 
      (!isOnPosition && groupsCarouselTransform >= maxTransform && !isDownDirection && !isOnSection)
  ){
      document.querySelector('body').classList.add('stop-scrolling');
      isLocked = true;
  }

  //unlock on scroll
  if ((groupsCarouselTransform >= maxTransform && isDownDirection && !isOnSection) ||
      (groupsCarouselTransform <= 0 && !isDownDirection)
  ){
    document.querySelector('body').classList.remove('stop-scrolling');
    isLocked = false;
  }

  //scroll left-right
  if (isLocked && !isTransforming){
    isTransforming = true;
    const direction = isDownDirection ? 1 : -1;
    groupsCarouselTransform += direction * transformStep;
    groupsCarousel.style["transform"] = `translateX(-${groupsCarouselTransform}%)`;
    setTimeout(() => {
      isTransforming = false;
    }, 1200);
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
    
}, { passive: true })
