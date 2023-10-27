const checkElement = async selector => {
  while (document.querySelector(selector) === null) {
    await new Promise(resolve => requestAnimationFrame(resolve));
  }
  return document.querySelector(selector);
};

checkElement('#items.ytd-watch-next-secondary-results-renderer')
  .then((element) => {
    console.info(element);
    element.style.overflow = 'hidden scroll';
    element.style.height = '90vh';
  });


// add a button just after '.html5-main-video'
checkElement('.html5-main-video')
  .then((element) => {
    console.info(element);
    const skipAd = document.createElement('button');
    skipAd.innerText = 'Skip Ad';
    element.parentNode.insertBefore(button, element);
  
    skipAd.addEventListener('click', () => {
      const video = document.querySelector('video');
      video.currentTime = video.duration - .5;
    }
  );
  });

// ((function () {
//   document.querySelectorAll(
//     '.html5-main-video')[0].currentTime = document.querySelectorAll(
//     '.html5-main-video')[0].duration - .5;
// })());


// display none .ytp-ad-overlay-slot
checkElement('.ytp-ad-overlay-slot')
  .then((element) => {
    console.info(element);
    element.style.display = 'none';
  });


// if a button call 'skip ad' exist, click it 'ytp-ad-skip-button ytp-button'
checkElement('.ytp-ad-skip-button ytp-button')
  .then((element) => {
    console.info(element);
    element.click();
  })
