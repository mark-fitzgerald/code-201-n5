var Product = function(name, imageSource) {
  this.label = name;
  this.image = imageSource;
  this.y = 0;
}

var products = [];
products.push(new Product("bag", "bag.jpg"));
products.push(new Product("wine glass", "bag.jpg"));
products.push(new Product("sleeping bag", "bag.jpg"));
products.push(new Product("pizza cutter", "bag.jpg"));
products.push(new Product("unicorn", "bag.jpg"));

products[0].y = 3;
products[1].y = 2;
products[2].y = 5;
products[3].y = 6;
products[4].y = 1;

function showChart() {
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "theme2",//theme1
    title:{
      text: "Basic Column Chart - 'Hello World' Version",
      fontColor: "blue",
      fontFamily: "Optima"
    },
    animationEnabled: false,   // change to true
    data: [
      {
        // Change type to "bar", "area", "spline", "pie",etc.
        type: "column",
        dataPoints: products
      }
    ]
  });
  chart.render();
}

window.addEventListener("load", showChart);
