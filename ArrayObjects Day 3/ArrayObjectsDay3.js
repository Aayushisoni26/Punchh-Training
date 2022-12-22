  //JS Object Accessors

  //Getter
  const obj1 = {
    Firstname: "Aayushi",
    Lastname: "Soni",
    language: "English",
    get languuage() {
        return obj1.language;
  }
};

console.log(obj1.languuage)

//Setter
const obj2 = {
    Firstname: "Aayushi",
    Lastname: "Soni",
    language: "",
    set lang(lang) {
        obj2.language = lang;
    }
}

obj2.lang = "eng";

console.log(obj2.language)


//Data quality
//get - in this example, the languuage property returns the value of language in upper case
const obj3 = {
    Firstname: "Aayushi",
    Lastname: "Soni",
    language: "Hindi",
    get languuage() {
        return obj1.language.toLowerCase();
  }
};

console.log(obj3.languuage)

//in this example, the languuage property stores the uppercase value of language
const obj4 = {
    Firstname: "Aayushi",
    Lastname: "Soni",
    language: "",
    set lang(lang) {
        obj4.language = lang.toUpperCase();
    }
}

obj4.lang = "hindi";

console.log(obj4.language)


//object.definepropertY()
const obj5 = {
    counter : 0
};

Object.defineProperty(obj5, "reset", {
    get : function () {
        this.counter = 0;
    }
});
Object.defineProperty(obj5, "increment", {
    get : function () {
        this.counter++;
    }
});
Object.defineProperty(obj5, "decrement", {
    get : function () {
        this.counter--;
    }
});
Object.defineProperty(obj5, "add", {
    set : function (value) {
        this.counter +=value;
    }
});
Object.defineProperty(obj5, "subtract", {
    set : function (value) {
        this.counter -=value;
    }
});

obj5.reset;
obj5.add = 5;
obj5.subtract = 1;
obj5.increment;
obj5.decrement;

console.log(obj5.counter)


//JS object constructors
function Bottle(color, type, price, capacity) {
    this.colorName = color,
    this.typename = type,
    this.pricename = price,
    this.capacityname = capacity
}

const b1 = new Bottle("Orange", "transparent" , 260, "1 litre")

console.log("The bottle's capacity is " + b1.capacityname)

//Adding a property to an object
b1.brand = "Cello"

console.log("Bottle brand is " + b1.brand)

//Adding a method to an object
b1.colorprice = function () {
    return this.colorName + " " + this.pricename;
}

console.log(" The color and price are : " + b1.colorprice())

//Adding a property to a constructor
Bottle.filledornot = "yes filled"; // we cant add new property to a constructor function


//Adding a method to a constructor
function Bottle2(color, type, price, capacity) {
    this.colorName = color,
    this.typename = type,
    this.pricename = price,
    this.capacityname = capacity,
    this.typeprice = function() {
        return this.typename + " " + this.pricename;
    }
}

const b2 = new Bottle2("Orange", "transparent" , 260, "1 litre")
console.log(b2.typeprice())

//Adding a method to a constructor
function Bottle3(color, type, price, capacity) {
    this.colorName = color,
    this.typename = type,
    this.pricename = price,
    this.capacityname = capacity,
    this.capacitychange = function(name) {
        return this.capacityname = name;
    }
}

const b3 = new Bottle3("Orange", "transparent" , 260, "1 litre")
b3.capacitychange("2 litre")

console.log(b3.capacityname)


//JS Object prototypes
function Bottle4(color, type, price, capacity) {
    this.colorName = color,
    this.typename = type,
    this.pricename = price,
    this.capacityname = capacity
}

Bottle4.prototype.colorchange = "Pink";

const b4 = new Bottle4("Orange", "transparent" , 260, "1 litre")
console.log("The changed color is " + b4.colorchange)

Bottle4.prototype.typeprice = function () {
    return this.typename + " " + this.pricename;
}

console.log("The type and price are " + b4.typeprice())


//JS Iterables - for...of

//Home made iterable
function myNumber() {
    let n = 0;
    return {
        next : function() {
            n+= 10;
            return {value:n,done:false};
        }
    }
}

const n = myNumber();
n.next();
n.next();
n.next();

console.log(n.next().value)


//JS Sets

//new Set() method
const letters = new Set(["a","b","c","d"]);
console.log(letters)
console.log(letters.size)

//add literal values
letters.add("e");
letters.add("f");
letters.add("g");
letters.add("h");

console.log(letters)
console.log(letters.size)

//create a set and add variables
const setvar1 = "a";
const setvar2 = "b";

const letter = new Set();
letter.add(setvar1);
letter.add(setvar2);

console.log(letter)

//add method (If you add equal elements, only the first will be saved:)
letter.add("e");
letter.add("e");
letter.add("e");
letter.add("e");
letter.add("e");
letter.add("e");
letter.add("e");


console.log(letter)

//forEach() 
const letterss = new Set(["n","o","p","q"]);
let txtt = "";
letterss.forEach(function(value) {
    txtt += value;
}) 

console.log(txtt)

//values() method
console.log(letterss.values())

const myIterator = letterss.values();
let txttt = "";
for (const entry of myIterator) {
    txttt += entry;
}

console.log(txttt)

//keys() method
console.log(letterss.keys())

//entries()
const myIteratorr = letterss.entries();
let txttttt = "";
for (const entry of myIteratorr) {
    txttttt += entry;
}

console.log(txttttt)

//sets are objects
console.log(typeof letterss);

//instanceof set
console.log(letterss instanceof Set);






//JS Map methods

//new Map()
const abc = new Map([
    ["apples", 200],
    ["bananas", 300],
    ["orange", 100]
]);

console.log(abc.get("apples"))

//Map.set() - we can also change existing map values using set
abc.set("kiwi",500);
abc.set("strawberry", 600);
abc.set("guava", 900);

console.log(abc)
console.log(abc.get("kiwi"))

//Map.size
console.log(abc.size);

//Map.delete
abc.delete("apples");

console.log(abc)

// console.log(abc.clear())

//has
console.log(abc.has("apples"));
console.log(abc.has("kiwi"));

//typeof - returns object
console.log(typeof abc);

//instanceof map 
console.log(abc instanceof Map)

//Map.forEach()
let txxtt = ""
abc.forEach (function (value, key){
    txxtt += key + " = " + value+ " , ";
})

console.log(txxtt)

//Map.entries
let txxttt = ""
for (const x of abc.entries()) {
    txxttt +=x;

}
console.log(txxttt)

//Map.keys() 
let tttxxxttt = ""
for(const x of abc.keys()) {
    console.log(x)
}


//map.values()
let tttxxxxtttt = "";
for (const x of abc.values()) {
    console.log(x)
}

//we can use values method to sum the values in a map
let total = 0;
for(const x of abc.values()) {
    total += x
    
}
console.log(total)


//objects as keys
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add new Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

console.log(fruits)