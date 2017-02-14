function getUserName() {
  var userName = prompt("Please write your name:","");
  if ((userName === "") || (userName === null)) {
    userName = " visitor";
  }
  return userName;
}

function greetPerson(nameToGreet="visitor") {
  var greeting = "<strong>Welcome " + nameToGreet + "!</strong>";
  var today = new Date();
  greeting += "\n" + (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
  // alert(greeting);
  var answerParagraph = document.getElementById("answer-location");
  answerParagraph.innerHTML = greeting;
}
