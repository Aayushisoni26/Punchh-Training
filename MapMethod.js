/* var arr = [10, 20, 30, 40, 50];
var newArr = arr.map(function(value){
  value++;
  console.log(value);
  
});
console.log(arr);*/

var arr = [
  { price: "100", product: "Mobile"},
  { price: "200", product: "Laptop"},
  { price: "300", product: "Mic"},
  { price: "400", product: "PC"}
];
var newArr = arr.map(value => value.product);
console.log(newArr);