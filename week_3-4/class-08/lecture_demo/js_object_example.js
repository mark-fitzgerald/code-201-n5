var student = {};
student["name"] = "John Student";
student["phone"] = "503-555-1234";
student["email"] = "john.student@school.com";
student["showInfo"] = function() {
  var info = "Name: "+student["name"];
  info += "<br>Phone: "+student["phone"];
  info += "<br>E-Mail: "+student["email"];
  document.getElementById("studentInfoArea").innerHTML = info;
}

var studentLiteral = {
  name:   "John Student",
  phone:  "503-555-1234", /* Don't forget area code */
  email:  "john.student@school.com",
};


var instructor = new Object();
instructor.name = "Jane Teacher";
instructor.phone = "503-555-9876";
instructor.email = "jane.teacher@school.com";
instructor.showInfo = function() {
  var info = "Name: "+instructor.name
  info += "<br>Phone: "+instructor.phone;
  info += "<br>E-Mail: "+instructor.email;
  document.getElementById("instructorInfoArea").innerHTML = info;
}

var Person = function(name, phone=null, email=null) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.sayGreeting = function() {
    var message = "Hello!\nMy Name is "+this.name;
    var properties = Object.keys(this);
    for (index = 0; index < properties.length; index++) {
      var propertyName = properties[index];
      if ((properties[index] != "name") &&(properties[index] != "sayGreeting") && (this[propertyName] != null)) {
        message += "\n   "+propertyName+" - "+this[propertyName];
      }
    }
    alert(message);
  }
}

var mark = new Person("Mark Fitzgerald", "503-555-1234", "mark@codefellowspdx.com");
