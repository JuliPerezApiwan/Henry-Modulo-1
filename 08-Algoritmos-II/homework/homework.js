'use strict'
// No cambies los nombres de las funciones.

function quickSort(array, left, right) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];
  
  var left = []; 
  var right = [];

  for (var i = 1; i < array.length; i++) {
    //array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    if (array[i] < pivot) {
       left.push(array[i]) 
      } else {
        right.push(array[i])
      };
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
    let half = (array.length/2)

    if(array.length < 2){
      return array
    }
    let left = array.splice(0,half); 
    
  return merger(mergeSort(left),mergeSort(array))
  }
  
  function merger(left,right){
  
    const arr = [];
  
    while(left.length && right.length){
      if(left[0] < right [0]){
        arr.push(left.shift())
      }else{
        arr.push(right.shift())
      }
    }
  
    let nuevoArray = [...arr,...left,...right];
    return nuevoArray;
  }
  





// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
