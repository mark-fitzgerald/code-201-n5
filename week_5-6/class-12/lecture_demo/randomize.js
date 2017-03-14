function Student(name, picture, github) {
  this.name = name;
  this.picture = picture;
  this.github = github;
}

var students = [];
students.push(new Student("John Doe", "General.png", ""));
students.push(new Student("Jane Citizen", "General.png", ""));
students.push(new Student("Jack Public", "General.png", ""));
students.push(new Student("Julie Student", "General.png", ""));

function makeList() {
  var list = document.getElementById("studentList");
  for (var index = 0; index < students.length; index++) {
    var listItem = document.createElement("li");
    listItem.textContent = students[index].name;
    list.appendChild(listItem);
  }
}

window.addEventListener("load", makeList);
