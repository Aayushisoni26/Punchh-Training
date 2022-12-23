//JSON.parse()

const text = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(text)
console.log(obj.name+ " " + obj.city)

//Array as JSON

const txt = '[ "My", "Name", "is", "Aayushi" ]';
const myArr = JSON.parse(txt)
console.log(myArr)
console.log(myArr[0])
console.log(myArr[1])
console.log(myArr[2])
console.log(myArr[3])

//Exceptions - parsing dates
//If you need to include a date, write it as a string, You can convert it back into a date object later

const textt = '{"name" : "Aayushi", "birthdate" : "2000-12-26","city" : "banswara"}'
const obj1 = JSON.parse(textt);
obj1.birthdate = new Date(obj1.birthdate);

console.log(obj1.birthdate)

//reviver - The reviver parameter is a function that checks each property, before returning the value.

const text1 = '{"name":"Aayushi", "birthdate" : "2000-12-26", "city" : "banswara"}'
const obj2 = JSON.parse(text1, function (key, value) {
    if(key == "birthdate"){
        return new Date(value);
    } else {
        return value;
    }
});

console.log(obj2.name + " " + obj2.birthdate)

//parsing functions - If you need to include a function, write it as a string, You can convert it back into a function later:

const text2 = '{"name":"Aayushi", "age": "function() {return 30;}", "city" : "Banswara"}';
const obj3 = JSON.parse(text2);
obj3.age = eval ("(" + obj3.age + ")");

console.log(obj3.name + " " + obj3.age())











//JSON.stringify() - Convert a JavaScript object into a string with JSON.stringify()

const obj4 = {name: "Aayushi", age: 30, City: "Banswara"};
const myJSON = JSON.stringify(obj4)

console.log(myJSON)

//stringify a JS Array

const arr = ["My", "Name", "is","Aayushi"]
console.log(JSON.stringify(arr))

// //storing data
// const myObj = {name: "John", age: 31, city: "New York"};
// const myJSONN = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSONN);

//Exceptions
//same as parse date objects are not allowed

const obj5 = {name:"Aayushi", todaydate: new Date(), city: "Banswara"};
const myyJSON = JSON.stringify(obj5)
console.log(myyJSON)

//In JSON, functions are not allowed as object values
const obj6 = {name: "Aayushi", age: function () {return 20;}, city :"banswara"};
console.log(JSON.stringify(obj6)) // this will remove the function and give the rest output

//To overcome this, we need to convert function before running the json.stringify() function
const obj7 = {name: "Aayushi", age: function () {return 20;}, city :"banswara"};
obj7.age = obj7.age.toString(); //convert to string

console.log(JSON.stringify(obj7))


//JSON Object literals

//accessing object values
const obj8 = '{"name": "Aayushi", "gender" : "Female", "city": "jaipur"}';
const myObjj = JSON.parse(obj8);
console.log(myObjj.gender);

//looping an object
const myJson = '{"name" : "Aayushi", "age":30, "car":"null"}';
const myobj = JSON.parse(myJson);

let text3 = "";
for(const x in myobj) {
    text3 += x + ", "
}

console.log(text3)

const myJson2 = '{"name" : "Aayushi", "age":30, "car":"null"}';
const myobj2 = JSON.parse(myJson2);

let text4 = "";
for(const x in myobj2) {
    text4 += myobj2[x] + ", "
}

console.log(text4)


//array in objects

const details = '{"name":"Aayushi","age":22,"hobbies":["drawing","crafting"]}';
const obj9 = JSON.parse(details);
console.log(obj9.hobbies[0]);



//looping through array

let x=" ";
for (let i in obj9.hobbies) {
    x += obj9.hobbies[i]+", ";
}
console.log(x);





