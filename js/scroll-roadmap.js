// //stages - scroll to left
const roadmapCarousel = document.querySelector('.roadmap__quater-list');
// const topOffset = 150;
let roadmapCarouselTransform = 0;
const transformRoadmapStep = 20;
const maxRoadmapTransform = 60;
var activeRoadmapItem = 1;
let isRoadmapTransforming = false;
let isRoadmapLocked = false;

window.addEventListener('wheel', (e) => {

  if (window.innerWidth < 1024 || isRoadmapTransforming) return;
  const isOnPosition = roadmapCarousel.getBoundingClientRect().top - topOffset < 0;
  const isDownDirection = e.wheelDeltaY < 0;
  const isOnSection = roadmapCarousel.getBoundingClientRect().top - topOffset + roadmapCarousel.getBoundingClientRect().height > 0;

  //lock on scroll
  if ((isOnPosition && roadmapCarouselTransform <= 0 && isDownDirection && isOnSection) || 
      (!isOnPosition && roadmapCarouselTransform >= maxRoadmapTransform && !isDownDirection && isOnSection)
  ){
      document.querySelector('body').classList.add('stop-scrolling');
      isRoadmapLocked = true;
  }

  //unlock on scroll
  if ((roadmapCarouselTransform >= maxRoadmapTransform && isDownDirection) ||
      (roadmapCarouselTransform <= 0 && !isDownDirection && roadmapCarousel.getBoundingClientRect().top - topOffset < 100)
  ){
    document.querySelector('body').classList.remove('stop-scrolling');
    isRoadmapLocked = false;
  }

  //scroll left-right
  if (isRoadmapLocked && !isRoadmapTransforming){
    isRoadmapTransforming = true;
    const direction = isDownDirection ? 1 : -1;
    roadmapCarouselTransform += direction * transformRoadmapStep;
    roadmapCarousel.style["transform"] = `translateX(-${roadmapCarouselTransform}%)`;
    setTimeout(() => {
      isRoadmapTransforming = false;
    }, 1000);
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
