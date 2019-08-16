const body = document.querySelector("body");

const IMAGE_NUMBER = 4;

// function handleImgLoad() {
//   console.log("finished loading");

// }

function paintBackGround(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`
  // image.addEventListener("loadend", handleImgLoad);
  image.classList.add("bgImage");
  body.prepend(image);
}

function getRandomNumb() {
  const number = Math.floor(Math.random() * IMAGE_NUMBER);
  return number;
}

function init() {
  const imgNumber = getRandomNumb();
  paintBackGround(imgNumber);
}

init();




// const body = document.querySelector("body");

// const IMG_NUMBER = 4;

// function paintImage(imgNumber) {
//   const image = new Image();
//   image.src = `images/${imgNumber + 1}.jpg`;
//   image.classList.add("bgImage");
//   body.prepend(image);
// }

// function genRandom() {
//   const number = Math.floor(Math.random() * IMG_NUMBER);
//   return number;
// }

// function init() {
//   const randomNumber = genRandom();
//   paintImage(randomNumber);
// }

// init();