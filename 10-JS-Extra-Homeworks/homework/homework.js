// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    let arreglo = [];
    for (let key in objeto) {
      arreglo.push([key, objeto[key]]);
    }
    return arreglo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  let result = {};
      for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (result[char]) {
          result[char]++;
        } else {
          result[char] = 1;
        }
      }
      let sortedKeys = Object.keys(result).sort(); // Método Object.keys() --> devuelve un objeto Array Iterator con las claves de un objeto.
                                                   // Método sort() --> Fundamental si queremos ordenar los elementos de un array.
      let sortedResult = {};
      for (let i = 0; i < sortedKeys.length; i++) {
        sortedResult[sortedKeys[i]] = result[sortedKeys[i]];
      }
      return sortedResult;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  let mayus = [];
   let minus = [];
   
   let cadena = s;
   for (let i = 0; i < cadena.length; i++) {
       
       if (cadena[i] === cadena[i].toUpperCase()) {
                                   
           mayus.push(cadena[i]);
       }else{
          minus.push(cadena[i]);
           
       }
   }
   
   let palabra = "";
   let array3 = mayus.concat(minus);
   for (let i = 0; i < array3.length; i++){
       
       palabra += array3[i];
   }
   
   return(palabra);
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"

  return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  
  if (numero === parseInt(numero.toString().split("").reverse().join(""))){
    return "Es capicua";
 }else{
     return "No es capicua";
}

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  
  var newaCadena = cadena.toLocaleLowerCase();

   for (var i = newaCadena.length -1; i >= 0; i--) {
    //console.log (string [i]);
    if (cadena[i] === "a"){
      newaCadena = newaCadena.replace("a", "");
    }
    if (newaCadena[i] === "b"){
      newaCadena = newaCadena.replace("b", "");
    }
    if (newaCadena[i] === "c"){
      newaCadena = newaCadena.replace("c", "");
    }
    
}
return(newaCadena);
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  
  return arr.sort((a, b) => a.length - b.length);

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  
  return arreglo1.filter(x => arreglo2.includes(x));

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

