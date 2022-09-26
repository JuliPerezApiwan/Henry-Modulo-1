'use strict'

function BinarioADecimal(num) {
  
    let numerogirado = num.split("").reverse().join("");
    let result = 0;
    for (let i = 0; i < numerogirado.length; i++){
     result = result + ((numerogirado[i]) * Math.pow (2, i));
       }
       return result;  
      }


function DecimalABinario(num) {
  let result = "";
  while (num != 0){
    result = (num % 2) + result;
    num = Math.floor(num/2)
    
} return result;
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}