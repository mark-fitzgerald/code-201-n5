var students = new Array();
var tableHeaderRow = "<tr><th>Name</th><th>Phone</th><th>E-Mail</th></tr>";

// var jane = new Array("Jane Citizen", "503-555-1112", "jane@test.com");
// students.push(jane);

// Initialize Students Data Array
students.push({name: "Jane Citizen", phone: "503-555-1112", email: "jane@test.com"});
students.push({name: "John Student", phone: "503-555-9876", email: "john.student@school.com"});
students.push({name: "Jill Person", phone: "503-555-5547", email: "jperson@work.com"});
students.push({name: "Jack Public", phone: "503-555-4321", email: "johnpub@pdx.com"});
students.push({name: "Julia Private", phone: "503-555-3333", email: "jp@gmail.com"});

// Build the table with the student listing
buildTable();

function buildTable() {
  var studentTable = document.getElementById("studentList");
  studentTable.innerHTML = tableHeaderRow;
  var message = "Students in the class:";
  for (var index = 0; index < students.length; index++) {
    message += "\n  " + students[index];
    var studentRow = "<tr><td>"+students[index].name+"</td>";
    studentRow += "<td>"+students[index].phone+"</td>";
    studentRow += "<td>"+students[index].email+"</td></tr>";
    studentTable.innerHTML += studentRow;
  }
  studentTable.innerHTML += "<tr><td colspan='2'>Total Students:</td><td>" + students.length + "</td></tr>";
  console.log(message);
}

function addStudent() {
  var name = prompt("What is the student's name:","");
  var phone = prompt("What is the student's phone:","");
  var email = prompt("What is the student's e-mail:","");
  students.push({name, phone, email});
  buildTable();
}
