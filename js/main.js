//open video modal
document.querySelector('.about__video').addEventListener('click', () => {
  document.querySelector('.video-modal').classList.add('modal-display');
  setTimeout(() => {
    document.querySelector('.video-modal').classList.add('modal-visible');
    const videElem = document.querySelector('.modal__video');
    if (videElem){
      videElem.currentTime = 0;
      videElem.play();
    }
  }, 100);
});

const bikesArr = ['1', '2', '3', '4', '5', '6']

bikesArr.forEach(index => {
  document.querySelector(`.show-modal-bike-${index}`).addEventListener('click', () => {
    const modal = document.querySelector(`.modal-bike-${index}`);
    modal.classList.add('modal-display');
    setTimeout(() => {
      modal.classList.add('modal-visible');
    }, 100);
  })
})

//close modal
const closeVideoModal = () => {
  document.querySelector('.modal__video')?.pause();
  document.querySelector('.video-modal').classList.remove('modal-visible');
  setTimeout(() => {
    document.querySelector('.video-modal').classList.remove('modal-display');
  }, 300);
}
const close3DModal = (index) => {
  const modal = document.querySelector(`.modal-bike-${index}`);
  modal.classList.remove('modal-visible');
  setTimeout(() => {
    modal.classList.remove('modal-display');
  }, 300);
}
document.querySelector('.video-modal').addEventListener('click', () => closeVideoModal());
bikesArr.forEach(index => document.querySelector(`.modal-bike-${index}`).addEventListener('click', () => close3DModal(index)))
document.querySelectorAll('.modal__hero').forEach(el => el.addEventListener('click', (e) => e.stopPropagation()));

//tabs
// const daoTab = document.querySelector('tab-dao');
// const strategicTab = document.querySelector('tab-strategic');
// const exchangeTab = document.querySelector('tab-exchange');

// const daoTabContent = document.querySelector('tab-content-dao');
// const strategicTabContent = document.querySelector('tab-content-strategic');
// const exchangeTabContent = document.querySelector('tab-content-exchange');

// const tabsArr = ['dao', 'strategic', 'exchange'];

// tabsArr.forEach(el => {
//   document.querySelector(`.tab-${el}`).addEventListener('click', () => {
//     tabsArr.filter(item => item != el).forEach(t => {
//       document.querySelector(`.tab-${t}`).classList.remove('active');
//       document.querySelector(`.tab-content-${t}`).classList.add('d-none');
//     })
//     document.querySelector(`.tab-${el}`).classList.add('active');
//     document.querySelector(`.tab-content-${el}`).classList.remove('d-none');
//   })
// })

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
      document.querySelector(`.diagramm-${item}-bg`)?.classList.remove('opacity0');
      document.querySelector(`.diagramm-${item}-text`)?.classList.remove(`${item}-text-fill`);
      setTimeout(() => {
        e.target.classList.remove('svg-show-shadow');
      }, 400);
    })
  }
})