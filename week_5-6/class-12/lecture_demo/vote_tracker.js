var images = ["bag.jpg", "banana.jpg", "boots.jpg","chair.jpg", "cthulhu.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wine_glass.jpg"];

function Product(source) {
  this.imageSource = source;
  this.showName = function() {
    console.log("Image Source: "+this.imageSource);
  }
}

var products = [];

for (var index = 0; index < images.length; index++) {
  products.push(new Product(images[index]));
}

var clickedImages = [];

function showImages() {
  var container = document.getElementById("images-container");
  container.innerHTML = "";
  for (var count = 1; count <= 3; count++) {
    var randomIndex = Math.floor(Math.random() * images.length);
    var image = document.createElement("img");
    image.src = "images/"+images[randomIndex];
    container.appendChild(image);
  }
}

function makeImagesClickable() {
  var images = document.getElementsByTagName("img");
  for (var index = 0; index < images.length; index++) {
    images[index].addEventListener("click", recordClick);
  }
}

function recordClick(event) {
  var clickedItem = event.target;
  var itemSource = clickedItem.src;
  var lastSlash = itemSource.lastIndexOf("/") + 1;
  itemSource = itemSource.substring(lastSlash);
  console.log(itemSource + " was clicked.");
  clickedImages.push(itemSource);
  showImages();
  makeImagesClickable();
}

window.addEventListener("load", showImages);
window.addEventListener("load", makeImagesClickable);
