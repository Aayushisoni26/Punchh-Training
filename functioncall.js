//Javascript function call()

const student = {
  firstName:"Aayushi",
  lastName:"Soni",
  fullname: function () {
    return this.firstName + " " + this.lastName;
  }
}

console.log(student.fullname()); 


//Javascript call() method
const student = {
  fullname: function() {
    return this.firstName + " " + this.lastName;
  }
}
const student1 = {
  firstName:"Aayushi",
  lastName:"Soni"
}
const student2 = {
  firstName:"Lakshita",
  lastName:"Soni"
}

console.log(student.fullname.call(student2));



//call() method with arguments

const student = {
  fullname: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + ","+country;
  }
}

const student1 = {
  firstName:"Aayushi",
  lastName:"Soni"
}

console.log(student.fullname.call(student1, "Banswara", "India"));

