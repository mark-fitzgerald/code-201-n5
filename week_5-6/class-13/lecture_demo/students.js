function Person(personName, personEmail = "", personPhone = "", completedAssignments = []) {
  var name = personName;
  var email = personEmail;
  var phone = personPhone;
  var assignments = completedAssignments;

  this.getInfo = function() {
    var info = "Name: " + name;
    info += "\nE-Mail: " + email;
    info += "\nPhone: " + phone;
    if (assignments.length > 0) {
      info += "\nCompleted Assignments: ";
    }
    for (var index = 0; index < assignments.length; index++) {
      info += "\n   " + assignments[index];
    }
    return info;
  }

  this.updateEmail = function(newEmail) {
    email = newEmail;
  }

  this.updatePhone = function(newPhone) {
    phone = newPhone;
  }

  this.addAssignment = function(assignmentName) {
    if (assignmentName && assignmentName != "") {
      assignments.push(assignmentName);
    }
  }
}
