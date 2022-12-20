//Concat

const array1= ["My" , "Name"];
const array2=["is", "Aayushi"];
const array3=[4,5,6];
const array4=[[5,7],8,9]
const combined=array1.concat(array2, array3, array4)
console.log(combined)

//constructor
let text = array1.constructor;
console.log(text)

//copyWithin
const copywith = combined.copyWithin(0, 4)
console.log(copywith)


// entries
// const obj1= {
//     a:"Ashu",
//     b:"soni"
// };

//every
function checkInc(array3) {
    return array3 > 1;
}
console.log(array3.every(checkInc))

const detail = [
    {name: "Aayushi", surname:"soni"},
    {name: "Lakshita", surname:"soni"},
    {name: "Vishnu", surname:"soni"},
    {name: "Lakshmi", surname:"soni"},
    
]

function isSame(detail) {
    if(detail.name==detail.surname){
        return true;
    }
    else {
        return false;
    }
}

console.log(detail.every(isSame))

//fill
console.log(array1.fill("Kiwi"))

const sport = ["cricket", "hockey", "tennis"];
console.log(sport.fill("snooker",0,2))

//filter
function checkgreater(num) {
    return num > 4;
}

console.log(array3.filter(checkgreater));

//find
function checksmaller(numb) {
    return numb < 6;
}

console.log(array3.find(checksmaller))

//findindex
console.log(array3.findIndex(checksmaller))
console.log(array3.findIndex(checkgreater))

//forEach
let sum =0;
const numbe= [44,22,11,55];
numbe.forEach(myfunction);

function myfunction(item) {
    sum+=item;
}


console.log(sum)

//from
let txt = "ABCDEFGHIJ"
const myArray = Array.from(txt);
console.log(txt)

//includes
console.log(array1.includes("Aayushi"))

console.log(array2.includes("Aayushi" , 2))

console.log(array2.includes("Aayushi" , 0))

//indexof
const inde = ["Banana", "Orange", "Apple", "Mango", "Apple"];
let index = inde.indexOf("Apple");
console.log(index);

//isArray
const sports = ["football","hockey","snooker","hockey", "table-tennis", "hockey","hockey"]
console.log(Array.isArray(sports))

const ttxt2 = "Aayushi";
console.log(Array.isArray(ttxt2))

//join
console.log(sports.join());

console.log(sports.join(" & "));

//keys
const keys = sports.keys();
let textt = "";
for(let x of keys) {
    textt += x + " \n ";
}

//Another example using Object.keys
console.log(textt);

const keyss = Object.keys(sports)
console.log(keyss)

//lastIndexOf()
console.log(sports.lastIndexOf("hockey"))

console.log(sports.lastIndexOf("football",3))

//length
console.log(inde.length);

inde.length=2;
console.log(inde)

//map
const arrr1=[25,49,81,144];
const newarrr = arrr1.map(Math.sqrt)
console.log(newarrr)

function myfunc(number) {
    return number * 10;
}

const newnumberarray = arrr1.map(myfunc)
console.log(newnumberarray)