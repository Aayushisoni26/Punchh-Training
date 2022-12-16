//Promise example 1

const promiseobject = new Promise((resolve, reject) => {
  let req = true
  if (req == true) {
    resolve("Request Success")
  } else {
    reject("Request Rejected")
  }
}).then(
  (value) => { console.log(value) },
  (error) => { console.log(error)},
  

//Promise example 2 - (using catch)

const promiseobject = new Promise((resolve, reject) => {
  let req = true
  if (req == true) {
    resolve("Request Success")
  } else {
    reject("Request Rejected")
  }
}).then(
  (value) => { console.log(value) },
).catch((error) => { console.log(error) })

//Promise example 3 - Chaining

const promiseobject = new Promise((resolve, reject) => {
  let num =10
  resolve(num)
}).then(
  (value) => {
    console.log(value);
    return value + 10
  }
).then(
  (value) => {
    console.log(value)
  }
)

//Promise example 4 - using finally

const promiseobject = new Promise((resolve, reject) => {
  let req = true
  if (req == true) {
    resolve("Request Success")
  } else {
    reject("Request Rejected")
  }
}).then(
  (value) => { console.log(value) },
).catch((error) => { console.log(error) }).finally(() => {console.log("Cleaned UP")})
