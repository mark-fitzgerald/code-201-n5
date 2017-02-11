var today = new Date();
console.log("Current hour: "+today.getHours());
// if (today.getHours() < 12) {
//   alert("Good Morning!");
// } else if (today.getHours() < 17 ) {
//   alert("Good Afternoon!");
// } else {
//   alert("Good Evening!");
// }

var currentHours = today.getHours();
var currentMinutes = today.getMinutes();
var afterTenThirty = (currentHours == 10) && (currentMinutes >= 30);
var beforeElevenFifteen = (currentHours == 11) && (currentMinutes <= 15)
if (afterTenThirty || beforeElevenFifteen) {
  // alert("Getting close to 2nd breakfast.");
}

// if (0) {
//   alert("Falsey Statement");
// }
// if (1) {
//   alert("Truthy Statement");
// }
// if (1 && 0) {
//   alert("Logical Truthy Statement");
// }
// today = null;
// if (today) {
//   alert("Object Exists (truthy)");
// }


switch (true) {
  case (today.getHours() < 12): {
    alert("Good Morning!");
    break;
  }
  case (today.getHours() < 17): {
    alert("Good Afternoon!");
    break;
  }
  default: {
    alert("Good Evening!");
    break;
  }
}

for (var counter=1; counter <= 3; counter++) {
  alert("Current Count: "+counter);
}
