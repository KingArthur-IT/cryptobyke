import Swiper, { Navigation, Pagination } from 'swiper';

// init Swiper:
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  slidesPerView: 4,
  centeredSlides: true,
  spaceBetween: 30,
});

class App {
    init() {
        
    }
}

export default App;