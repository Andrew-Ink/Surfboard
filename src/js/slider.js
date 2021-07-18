;(function(){
  
  const arrowLeft = document.querySelector('#arrowleft');
  const arrowRight = document.querySelector('#arrowright');
  // const slider = document.querySelector('#slider');
  const sliderList = document.querySelector('#sliderlist');
  const sliderItems = document.querySelectorAll('.slider__products-item');
  
  let step = sliderItems[0].getBoundingClientRect().width;
  const minRight = 0;
  let maxRight = (sliderItems.length - 1) * step;
  
  let currentRight = 0;
  let currentStep = 0;
  
  window.addEventListener('resize', e => {
    step = sliderItems[0].getBoundingClientRect().width;
    maxRight = (sliderItems.length - 1) * step;
    currentRight = currentStep * step;
    sliderList.style.right = `${currentRight}px`;
    return;
  });
  
  arrowRight.addEventListener('click', e => {
    e.preventDefault();
    if (currentRight === maxRight) {
      currentRight = minRight;
      sliderList.style.right = `${currentRight}px`;
      currentStep = 0;
      return;
    }
  
    if (currentRight < maxRight) {
      currentRight += step;
      sliderList.style.right = `${currentRight}px`;
      currentStep++;
    }
  });
  
  arrowLeft.addEventListener('click', e => {
    e.preventDefault();
    if (currentRight === minRight) {
      currentRight = maxRight;
      sliderList.style.right = `${currentRight}px`;
      currentStep = sliderItems.length - 1;
      return;
    }
    
    if (currentRight > minRight) {
      currentRight -= step;
      sliderList.style.right = `${currentRight}px`;
      currentStep--;
    }
  });
})()