//object destructuring
//old method
var course = {
  coursename: "javascript",
  duration: "sixmonths",
  tutor: "geekyshows"
  
};

console.log(course.coursename);
console.log(course.duration);
console.log(course.tutor);

//with destructuring

var course = {
  coursename: "javascript",
  duration: "sixmonths",
  tutor: "geekyshows"
  
};
var {coursename, duration,tutor} = course;
console.log(coursename);
console.log(tutor,duration);

//Another example
var {a:y = 40, b:z = 20} = { a: 90 };
console.log(y);
console.log(z);

//object passing to a function

var course = {
  coursename: "javascript",
  duration: "sixmonths",
  tutor: "geekyshows"
};

function show({coursename,duration,tutor}){
  console.log(coursename);
  console.log(duration);
  console.log(tutor);
}
show(course);

//object returning from a function

var course = {
  coursename: "javascript",
  duration: "sixmonths",
  tutor: "geekyshows"
};
function show(z){
  return z;
}
var x =show(course);
var {coursename, duration, tutor} = x;
console.log(coursename);
console.log(tutor);
console.log(coursename);

//Nested object destructuring

var course = {
  coursename: "javascript",
  duration: "sixmonths",
  tutor: "geekyshows",
  student: {
    stu1: "Rahul",
    stu2: "Sonam"
  }
  
};
var {coursename, duration, tutor, student: {stu1, stu2}} = course;
console.log(coursename);
console.log(duration);
console.log(tutor);
console.log(stu1);
console.log(stu2);