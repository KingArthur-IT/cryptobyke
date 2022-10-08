// //stages - scroll to left
const roadmapCarousel = document.querySelector('.roadmap__quater-list');
// const topOffset = 150;
var roadmapCarouselTransform = 0;
const transformRoadmapStep = 0.5;
const maxRoadmapTransform = 75;
var activeRoadmapItem = 1;

window.addEventListener('wheel', (e) => {
  const isOnPosition = roadmapCarousel.getBoundingClientRect().top - topOffset < 0;
  const isDownDirection = e.wheelDeltaY < 0;
  // const isOnSection = roadmapCarousel.getBoundingClientRect().top - topOffset + groupsCarousel.getBoundingClientRect().height > 0;

  //lock on scroll
  if ((isOnPosition && roadmapCarouselTransform <= 0 && isDownDirection) || 
      (!isOnPosition && roadmapCarouselTransform >= maxRoadmapTransform && !isDownDirection)
  ){
      document.querySelector('body').classList.add('stop-scrolling');
      const sign = isDownDirection ? 1 : -1;
      roadmapCarouselTransform += sign * transformRoadmapStep;
      roadmapCarousel.style["transform"] = `translateX(-${roadmapCarouselTransform}%)`
  }

  //unlock on scroll
  if ((roadmapCarouselTransform >= maxRoadmapTransform && isDownDirection) ||
      (roadmapCarouselTransform <= 0 && !isDownDirection && roadmapCarousel.getBoundingClientRect().top - topOffset < 100)
  ){
    document.querySelector('body').classList.remove('stop-scrolling');
  }

  //scroll left-right
  if (roadmapCarouselTransform > 0 && roadmapCarouselTransform < maxRoadmapTransform){
      const direction = isDownDirection ? 1 : -1;
      roadmapCarouselTransform += direction * transformRoadmapStep;
      roadmapCarousel.style["transform"] = `translateX(-${roadmapCarouselTransform}%)`
  }

  if (roadmapCarouselTransform < 10)
    activeRoadmapItem = 1
  else if (roadmapCarouselTransform < 30)
    activeRoadmapItem = 2
    else if (roadmapCarouselTransform < 50)
      activeRoadmapItem = 3;
      else activeRoadmapItem = 4;

  roadmapCarousel.querySelectorAll('.roadmap__quater-item').forEach((el, index) => {
    if (el.classList.contains('active') && activeRoadmapItem !== index + 1)
      el.classList.remove('active');
    if (!el.classList.contains('active') && activeRoadmapItem === index + 1)
      el.classList.add('active');
  })
    
})
