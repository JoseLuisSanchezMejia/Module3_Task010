
//this is part I: function declaration

function declare(n1, n2){
let result= Math.pow((Math.pow(n1, 2)+ Math.pow(n2, 2)), 2)
return result;
}

console.log(declare(-4, 4));

 //this is part II: function expression

 const express=function (number1, number2){
   let result= Math.pow((Math.pow(number1, 2)+ Math.pow(number2, 2)), 2)
   return result;
   };
console.log(express(4,-4));
 
//this is part III: Arrow
const arrow= (number1, number2) => {
   let result= Math.pow((Math.pow(number1, 2)+ Math.pow(number2, 2)), 2)
   return result;
   };

console.log(arrow(4,4));