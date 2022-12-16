//Apply method

const student = {
  fullName: function(){
    return this.firstName + " "+ this.lastName;
  }
}

const student1 = {
  firstName: "Aayushi",
  lastName: "Soni"
}

console.log(student.fullName.apply(student1));

//Apply method with arguments

const student = {
  fullName: function(city, country){
    return this.firstName + " "+ this.lastName+","+city+","+country;
  }
}

const student1 = {
  firstName: "Aayushi",
  lastName: "Soni"
}

console.log(student.fullName.apply(student1, ["Banswara", "India"]));
