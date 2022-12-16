//using spread operator with array

var a= [10,20,30];
var b = [...a,40,50];
console.log(a);
console.log(b);

//merge using spread

var a= [10,20,30];
var b = [40,50,60];
var c = [...a,...b];
console.log(c);

//spread in object

var a = {coursename: "javascript", tutor: "geekyshows"};
var b = {...a, duration: "six months"};
console.log(b);