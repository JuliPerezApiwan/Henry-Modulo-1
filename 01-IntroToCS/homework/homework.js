'use strict'

function BinarioADecimal(num) {
  function BinarioADecimal(num) {
    let numerogirado = num.split("").reverse().join("");
    let result = 0;
    for (let i = 0; i < numerogirado.length; i++){
     result = result + parseInt(numerogirado[i]) * Math.pow (2, i);
       }
       return result;  
      }
}

function DecimalABinario(num) {
  //let binario =  num.toString(2)
  // return binario
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