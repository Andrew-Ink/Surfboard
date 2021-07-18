;(function(){
  const necwidth = (item) => {

  let reqWidth = 0;
  const lengthList = $('.catalog').find('.catalog__item-wrap');
  const widthTitle = lengthList.width();
  const widthWindow = $(window).width();
  const calcWidthContent = widthWindow - widthTitle * lengthList.length;
  const mobile = window.matchMedia("(max-width: 768px)").matches;
  const paddingLeft = parseInt(item.find('.catalog__item-desc').css('padding-left')); 
  const paddingRight = parseInt(item.find('.catalog__item-desc').css('padding-right')); 

  if (mobile) {
    reqWidth = calcWidthContent;
  } else {
     reqWidth = 524;
  }

  return {
    content: reqWidth,
    desc: reqWidth - paddingLeft - paddingRight,
  }
};

const openContent = item => {
  const content = item.find('.catalog__item-content');
  const width = necwidth(item);
  const contentSibligs = item.siblings().find('.catalog__item-content');
  const widthDesc = item.find('.catalog__item-desc');

  content.width(width.content);
  contentSibligs.width(0);
  widthDesc.width(width.desc);
};

const closeElem = item => {
  const currentItem = item.find('.catalog__item-content');
  const currentWidth = currentItem.width();

  if (currentWidth === 0) {
  } else {
    currentItem.width(0)
  };
};

$('.catalog__button').on('click', e => {
  e.preventDefault();

  const item = $(e.currentTarget).closest('.catalog__item');

  openContent(item);
  closeElem(item);
});


$('.catalog__item-content').on('click', e => {
  
  const item = $(e.currentTarget).closest('.catalog__item');
  
  closeElem(item);
});

})()