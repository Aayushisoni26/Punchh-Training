console.log("Begin")
function getName(name){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside Name setTimeout")
      resolve(name);
    },2000);
  })
}

function getgames(name) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Inside Games setTimeOut")
      resolve(['Cricket','Hockey','Voleyball']);
    },1000);
  })
}

async function showgames(){
  const nm = await getName('Aayushi')
  const game = await getgames(nm)
  console.log(game)
}
showgames()
console.log("End")
