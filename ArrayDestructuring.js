/* var a = ["Javascript", "SixMonths", "GeekyShows"];
var  [courseName, , tutor ] = a;
console.log(courseName);
//console.log(duration);
console.log(tutor); */



/* var a,b;
[a, b] = [10,20];
console.log(a);
console.log(b); */


//Array passing to a function
//using rest

var arr=[10,20,30,50,30,10];
function show([value1, value2, ...rest]){
  console.log(value1);
  console.log(value2);
  console.log(rest);
}
show(arr);

//Array returning from a function
//old method
var arr = [10, 20, 30];
function show(z){
  return z;
  
}
var x=show(arr);
console.log(x[0]);
console.log(x[1]);
console.log(x[2]);

//using destructuring

var arr = [10, 20, 30];
function show(z){
  return z;
}
  var [value1, value2, value3] =x;
  console.log(value1);
  console.log(value2);
  console.log(value3);

//Nested array destructuring
//old method without destructuring
var a=["Javascript","sixmonths","geekyshows",["Rahul","Sonam"]];
var[courseName, duration, tutor, [stu1, stu2]] = a;
console.log(a[0]);
  console.log(a[1]);
  console.log(a[2]);
console.log(a[3][0]);
console.log(a[3][1]);

//with destructuring

var a=["Javascript","sixmonths","geekyshows",["Rahul","Sonam"]];

var[courseName, duration, tutor, [stu1, stu2]] = a;
console.log(courseName);
  console.log(duration);
  console.log(tutor);
console.log(stu1);
console.log(stu2);

