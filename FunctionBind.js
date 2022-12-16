//function Bind
//Function borrowing : with bind() an object can borrow a method from another object

const person = {
  firstName:"Aayushi",
  lastName: "Soni",
  fullName: function () {
    return this.firstName + " "+ this.lastName;
  }
}

const member = {
  firstName: "Lakshita",
  lastName: "Soni",
}

let fullName = console.log(person.fullName.bind(member));


