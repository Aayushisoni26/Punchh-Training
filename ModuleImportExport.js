// 1. Default Export Class - Normal
class nokia{
  volumnUp(){
    console.log("High volumn ");
    
  }
}

//2. Default Export Function
export default function show(){
  console.log("Hello Module");
}

//3. Default export variable
const a = 10;
export default a;


//4. Named Export class
export class Nokia{
  volumnup(){
    console.log("High volumn");
  }
}


//5. Named export function
function show(){
  console.log("hello world")
}

export {show};

//6. Named export variable
const a=10;
export {a};


//Named export 
class nokia{
  volumnup(){
    console.log("high volume");
    
  }
}

function show(){
  console.log("hello module");
  
}
const a=10;

export {nokia, show};






//1. Default Import class
import nokia from "./mobile.js";
const n = new nokia();

//2. default import function
import show from "./mobile.js";
show();

//3. Default import variable
import a from "./mobile.js";
console.log(a);

//4. Named import class
import {Nokia} from "./mobile.js";
const n = new Nokia();
n.volumnup();

//5. Named import function
import {show} from "./mobile.js";
show();

//6. Named import variable
import {a} from "./mobile.js";
console.log(a);


//Named import
import {nokia, show, a} from "./mobile.js";