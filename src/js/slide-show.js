;(function (){
  
  const itemSearh = (data) => {
    return $('.review').filter((ndx, item) => {
      return $(item).attr('data-slide') === data;
    });
  };
  
  $('.reviews__button').on('click', (e) => {
    e.preventDefault();
  
    const item = $(e.currentTarget).closest('.reviews__pager-item');
    const dataAttr = $(item).attr('data-button');
    const itemShow = itemSearh(dataAttr);
  
    item.addClass('reviews__pager-item--active').siblings().removeClass('reviews__pager-item--active');
    itemShow.addClass('review--active').siblings().removeClass('review--active');
  });
})()
