;(function (){
  $('.team__title-button').on('click', (e) => {
    e.preventDefault();
  
    const trg = $(e.currentTarget);
    const item = $(trg.closest('.team__item'));
    const currentClass = $(item).hasClass('team__item--active');
  
    if (currentClass) {
      const closeItem = $(item).removeClass('team__item--active');
      return;
    };
  
    const active = $(item).addClass('team__item--active').siblings().removeClass('team__item--active');
  });
})()