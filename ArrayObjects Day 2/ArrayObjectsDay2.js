//pop - removes (pops) the last element of an array
removed = arrr1.pop()
console.log(removed);

//prototype - allows you to add new properties and methods to arrays
Array.prototype.myLcase = function() {
    for (let i = 0 ; i<this.length ; i++) {
        this[i] = this[i].toLowerCase();
    }
};

Array.prototype.myUcase = function() {
    for (let i = 0 ; i<this.length ; i++) {
        this[i] = this[i].toUpperCase();
    }
};

var cities = ["Banswara", "Jaipur", "Shimla", "Pune"];
cities.myLcase();
console.log(cities)

cities.myUcase();
console.log(cities)

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.eyeColor = eye;
  }
  const myFather = new Person("John", "Doe", "blue");
  const myMother = new Person("Sally", "Rally", "green");
  
  Person.prototype.nationality = "English";
  Person.prototype.city = "Jaipur";

  console.log(myFather.nationality)
  console.log(myMother.city)


  //push - adds new items to the end of an array
  cities.push("Argentina")
  console.log(cities)

  cities.push("Brazil","Maharashtra")
  console.log(cities)

//reverse - reverses the order of the elements in an array.
const revcity = cities.reverse()
console.log(revcity)

//shift - removes the first item of an array
const shiftcity = cities.shift()
console.log(shiftcity) //shifted element 
console.log(cities) //after shifiting returns the array

//slice - returns selected elements in an array, as a new array, selects from a given start, up to a (not inclusive) given end
const slicecity = cities.slice(1,3)
console.log(slicecity)

const slcecity = cities.slice(1,2)
console.log(slcecity)

//some - checks if any array elements pass a test (provided as a callback function)
const agess = [2,3,1,7,78,100,32,22]
console.log(agess.some(checkage))
function checkage(agess) {
    return agess > 70;
}

//sort - sorts the elements of an array
agess.sort(function(a,b)
{
    return a-b
});
console.log(agess)

//splice - adds and/or removes array elements
const fruitssss = ["Banana", "Orange", "Apple", "Mango"];

fruitssss.splice(2, 0, "Lemon", "Kiwi");

console.log(fruitssss)
fruitssss.splice(2,2);
console.log(fruitssss)

//tostring - returns a string with array values separated by commas
let txttostring = fruitssss.toString();
console.log(txttostring)

//unshift - adds new elements to the beginning of an array
fruitssss.unshift("Lemon","Pine")
console.log(fruitssss)











//JS OBJECTS


  //object.keys() - returns an Array Iterator object with the keys of an object
  const colors =["Blue","Pink","Green","Yellow"] //on array
  const keysss = Object.keys(colors);
  console.log(keysss)

  const color = "Black" //on string
  const keyssss = Object.keys(color)
  console.log(keyssss)

  const keysssss = Object.keys(person) //on an object
  console.log(keysssss)


  //object prototype - allows you to add new properties and methods to objects
  function emp(name, title, bornyear) {
    this.name = name;
    this.title = title;
    this.bornyear = bornyear;
  }
  emp.prototype.salary = 20000;

  const fred = new emp("Fred","Caveman",1677)

  console.log(fred)
  console.log(fred.salary)


  //object toString() - returns an object as a string, returns "[object Object]" if it cannot return a string, Object.toString() always returns the object constructor
  let txtttt = colors.toString(); //on an array
  console.log(txtttt)

  const keyys = person.toString(); //on an object
  console.log(keyys)

  const keyyys = Object.toString(person); //on an object
  console.log(keyyys)


  //Javascript object properties - Properties are the values associated with a JavaScript object.
  const student = {
    rollno: 1,
    fname: "Aayushi",
    sname: "soni",
    agee: 21

  };



  //Object
const person = {
    firstName:"Aayushi",
    lastName:"soni",
    age:22
};

console.log(person["firstName"]+" "+person["lastName"]+" "+person["age"]);

//creating an empty object and then adding properties
const person1 ={};
person1.firstName = "Aayushi";
person1.lastName = "soni";
person1.age = 22;

console.log(person1.firstName+" "+person1.lastName+" "+person1.age);


  //Accessing JS Properties
  finaldetail = student.fname + " is " + student.agee + " years old. ";
  console.log(finaldetail)
  finaldetaill = student ["fname"] + " is " + student["agee"] + " years old. ";
  console.log(finaldetaill)


  //JS for...in loop - The block of code inside of the for...in loop will be executed once for each property.
  let txxt = "";
  for (let x in student) {
    txxt += student[x];
  }
  console.log(txxt)


  //Adding new properties - add new properties to an existing object by simply giving it a value
  student.gender = "female";

  console.log(student)

  //Deleting properties - delete keyword deletes a property from an object
  delete student.agee;
  //or delete student["agee"]
  console.log(student)

  //Nested objects
  myobj = {
    name : "Lakshita",
    age : 21,
    cars : {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
  }

  console.log(myobj.cars.car3) //or myobj.cars["car2"], myobj["cars"]["car2"]



//JS Object methods
const stu = {
    firstname : "lakshita",
    lastname: "Soni",
    id : 2222,
    fullname : function() {
        return this.firstname + " " + this.lastname;
    }
}

console.log(stu.fullname())
  
//Accessing object methods
funame = stu.fullname();
console.log(funame)

//Adding a method to an object
stu.newid = function () {
    return this.firstname+" "+this.id;
}

console.log(stu.newid())

//Some builtin methods
let msg = "Hi, Aayushi";
let up = msg.toUpperCase();
console.log(up)


//Displaying the object in a loop
const persson = {
    name: "John",
    age: 30,
    city: "New York"
  };

  let ttxt = "";
for (let x in persson) {
ttxt += persson[x] + " ";
};

console.log(ttxt)


//object.values
const objval = Object.values(persson)
console.log(objval)


//JSON.stringify()
let mystr = JSON.stringify(persson);
console.log(mystr)

const perrsson = {
    name: "John",
    today: new Date(),
    age : function () {
        return 30;
    }
  };
  

  //stringify dates
  let myString = JSON.stringify(perrsson);
  console.log(myString)


  //stringify functions - JSON.stringify will not stringify functions
  let mystrr = JSON.stringify(perrsson);
  console.log(mystrr)

  //stringify arrays
  const arr = ["John", "Peter", "Sally", "Jane"];
  let myStriing = JSON.stringify(arr);
  console.log(myStriing)