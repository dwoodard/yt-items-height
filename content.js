const checkElement = async selector => {
  while ( document.querySelector(selector) === null) {
    await new Promise( resolve =>  requestAnimationFrame(resolve) )
  }
  return document.querySelector(selector);
};



checkElement('#items.ytd-watch-next-secondary-results-renderer')
.then((element) => {
  console.info(element);
  element.style.overflow = "hidden scroll";
  element.style.height = "90vh";
});



