;(function(){
  
  const hamburger = document.querySelector('#hamburger');
  const overlay = document.querySelector('#overlay');
  
  const body = document.body;
  
  
  
  hamburger.addEventListener('click', e => {
  
    e.preventDefault();
  
    if (hamburger.classList.contains('hamburger--active') || overlay.classList.contains('overlay--active')) {
  
      hamburger.classList.remove('hamburger--active');
      overlay.classList.remove('overlay--active');
  
    } else {
  
      hamburger.classList.add('hamburger--active');
      overlay.classList.add('overlay--active');
  
  
    }
  
  });
  
  overlay.addEventListener('click', e => {
  
    hamburger.classList.remove('hamburger--active');
    overlay.classList.remove('overlay--active');
    body.classList.remove('locked');
  
  
  });
})()
