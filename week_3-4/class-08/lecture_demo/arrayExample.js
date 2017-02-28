var students = new Array();
var tableHeaderRow = "<tr><th>Name</th><th>Phone</th><th>E-Mail</th></tr>";

var Student = function(name, phone, email) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.outputDataForTable = function() {
    var tableRow = document.createElement("tr");
    var tableData = document.createElement("td");
    tableData.textContent = this.name;
    tableRow.appendChild(tableData);
    tableData = document.createElement("td");
    tableData.textContent = this.phone;
    tableRow.appendChild(tableData);
    tableData = document.createElement("td");
    tableData.textContent = this.email;
    tableRow.appendChild(tableData);
    return tableRow;
  }
}

// Initialize Students Data Array
students.push(new Student("Jane Citizen", "503-555-1112", "jane@test.com"));
students.push(new Student("John Student", "503-555-9876", "john.student@school.com"));
students.push(new Student("Jill Person", "503-555-5547", "jperson@work.com"));
students.push(new Student("Jack Public", "503-555-4321", "johnpub@pdx.com"));
students.push(new Student("Julia Private", "503-555-3333", "jp@gmail.com"));

// Build the table with the student listing
buildTable();

function buildTable() {
  var studentTable = document.getElementById("studentList");
  studentTable.innerHTML = tableHeaderRow;
  var message = "Students in the class:";
  for (var index = 0; index < students.length; index++) {
    var student = students[index];
    studentTable.appendChild(student.outputDataForTable());
  }
  studentTable.innerHTML += "<tr><td colspan='2'>Total Students:</td><td>" + students.length + "</td></tr>";
}

function addStudent() {
  var name = prompt("What is the student's name:","");
  var phone = prompt("What is the student's phone:","");
  var email = prompt("What is the student's e-mail:","");
  students.push(new Student(name, phone, email));
  buildTable();
}
