;(function(){
  let interval;
  
  const playBtn = document.querySelector('.video__play-button');
  const muteBtn = document.querySelector('.volume__btn');
  const playBtnTool = document.querySelector('.duration__btn');
  const durationControl = document.getElementById('duration');
  
  const speaker = document.getElementById('speaker');
  const volumeControl = document.getElementById('volume');
  
  const video = document.getElementById('player');
  
  // video.addEventListener('loadeddata', function () {
  
    video.addEventListener('click', play);
  
    let playButtons = document.querySelectorAll('.play');
  
    for (let i = 0; i < playButtons.length; i++) {
      playButtons[i].addEventListener('click', play);
    }
  
    durationControl.min = 0;
    durationControl.value = 0;
    durationControl.max = video.duration;
    durationControl.addEventListener('input', setDuration);
  
    volumeControl.value = 10;
    volumeControl.min = 0;
    volumeControl.max = 100;
    video.volume = volumeControl.value / 100;
  
    volumeControl.style.background = `linear-gradient(90deg, #FEDB3F 0%, #FEDB3F ${volumeControl.value}%, #626262 ${volumeControl.value}%`;
  
    speaker.addEventListener('click', speakMute);
  
    volumeControl.addEventListener('input', setVolume);
  
  // });
  
  function play() {
  
    if (video.paused) {
      video.play();
      playBtn.classList.add('video__play-button--active');
      playBtnTool.classList.add('duration__btn--active');
      interval = setInterval(updateDuration, 1000 / 1);
      updateDuration();
  
    } else {
      video.pause();
      playBtn.classList.remove('video__play-button--active');
      playBtnTool.classList.remove('duration__btn--active');
      clearInterval(interval);
    }
  };
  
  
  function setDuration() {
    video.currentTime = durationControl.value;
  }
  
  function updateDuration() {
    durationControl.value = video.currentTime;
    const step = video.duration / 100;
    const percent = video.currentTime / step;
    durationControl.style.background = `linear-gradient(90deg, #FEDB3F 0%, #FEDB3F ${percent}%, #626262 ${percent}%)`;
  }
  
  function speakMute() {
  
    if (video.muted) {
      video.muted = false;
      speaker.classList.remove('volume__btn--active');
      volumeControl.value = video.volume * 100;
      volumeControl.style.background = `linear-gradient(90deg, #FEDB3F 0%, #FEDB3F ${volumeControl.value}%, #626262 ${volumeControl.value}%`;
    } else {
      video.muted = true;
      speaker.classList.add('volume__btn--active');
      volumeControl.value = 0;
      volumeControl.style.background = `linear-gradient(90deg, #FEDB3F 0%, #FEDB3F ${volumeControl.value}%, #626262 ${volumeControl.value}%`;
    }
  }
  
  function setVolume() {
    video.volume = volumeControl.value / 100;
    volumeControl.style.background = `linear-gradient(90deg, #FEDB3F 0%, #FEDB3F ${volumeControl.value}%, #626262 ${volumeControl.value}%`;
  
    if (video.volume === 0) {
      video.muted = true;
      speaker.classList.add('volume__btn--active');
  
    } else {
      video.muted = false;
      speaker.classList.remove('volume__btn--active');
    }
  };
})()