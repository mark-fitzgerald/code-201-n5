var students = new Array();
var tableHeaderRow = "<tr><th>Name</th><th>Phone</th><th>E-Mail</th></tr>";

// var jane = new Array("Jane Citizen", "503-555-1112", "jane@test.com");
// students.push(jane);

// Initialize Students Data Array
students.push(new Array("Jane Citizen", "503-555-1112", "jane@test.com"));
students.push(new Array("John Student", "503-555-9876", "john.student@school.com"));
students.push(new Array("Jill Person", "503-555-5547", "jperson@work.com"));
students.push(new Array("Jack Public", "503-555-4321", "johnpub@pdx.com"));
students.push(new Array("Julia Private", "503-555-3333", "jp@gmail.com"));

// Build the table with the student listing
buildTable();

function buildTable() {
  var studentTable = document.getElementById("studentList");
  studentTable.innerHTML = tableHeaderRow;
  var message = "Students in the class:";
  for (var index = 0; index < students.length; index++) {
    message += "\n  " + students[index];
    var studentRow = "<tr><td>"+students[index][0]+"</td>";
    studentRow += "<td>"+students[index][1]+"</td>";
    studentRow += "<td>"+students[index][2]+"</td></tr>";
    studentTable.innerHTML += studentRow;
  }
  studentTable.innerHTML += "<tr><td colspan='2'>Total Students:</td><td>" + students.length + "</td></tr>";
  console.log(message);
}

function addStudent() {
  var name = prompt("What is the student's name:","");
  var phone = prompt("What is the student's phone:","");
  var email = prompt("What is the student's e-mail:","");
  students.push(new Array(name, phone, email));
  buildTable();
}
