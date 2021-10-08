// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return(array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return(array[array.length-1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return(array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let var1=0;
  for (let i=0 ; i < array.length ; i++){
      var1=array[i];
      array[i]=var1+1;
  }
  return (array);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return(array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let varString="";
  for (let i=0 ; i < palabras.length; i++){
       varString = varString+" " + palabras[i];      
  }
  return(varString.trim());
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

  if (array.includes(elemento)){
    return(true);
  } else{
    return(false);
  }
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let varInt=0;
  for(i=0 ; i < numeros.length ; i++){
    varInt=varInt+numeros[i];
  }
  return(varInt);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let var_num=0;
  let resultado=0;
  for (i=0; i < resultadosTest.length ; i++){
    var_num = var_num + resultadosTest[i];
    resultado = var_num/resultadosTest.length;
  }
  return(resultado);
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let mayor=0;
  for(i=0 ; i < numeros.length ; i++){
    mayor = Math.max.apply(Math, numeros);
  }
  return(mayor);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:

  if (arguments.length<1 ){
    return(0);
  }else {
    let var_prod=1;
    for (let i=0 ; i < arguments.length ; i++)
    {
      const elemento = arguments[i];
      var_prod *= elemento ; 
    }
    return(var_prod);
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let cont_may=0;
  for (let i=0 ; i < arreglo.length ; i++){
    if (arreglo[i]>18){
      cont_may=cont_may +1 ;
    }
  }
  return(cont_may);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia){
    case 1 :
      return("Es fin de semana");
      break;
    case 2:
      return("Es dia Laboral");
      break;
    case 3:
      return("Es dia Laboral");
      break;  
    case 4:
      return("Es dia Laboral");
      break;  
    case 5:
      return("Es dia Laboral");
      break;  
    case 6:
      return("Es dia Laboral");
      break;  
    case 7:
      return("Es fin de semana");
      break;                   
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
   let var_string = n.toString();
   for (let i=0 ; i < var_string.length ; i++){
     if (var_string.charAt(i) == 9){
       return(true);
     }else{
       return(false);
     }
   }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let var1=arreglo[0];
  let cont_si=0;
  let cont_no=0;
  for (i=0 ; i < arreglo.length ; i++){
    if (var1 == arreglo[i]){
       cont_si ++;
    }else{
       cont_no ++;
    } 
  }
  if (cont_si === arreglo.length){
    return(true);
  }else{
    return(false);
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses = [];
  for(i=0 ; i < array.length ; i++){
    if (array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre"){
      meses.push(array[i]);
    }  
  }
  if (meses.length === 3){
    return(meses);
  } else {
    return("No se encontraron los meses pedidos");
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevo=[];
  for (i=0 ; i < array.length ; i++){
    if (array[i] > 100){
      nuevo.push(array[i]);
    }
  }
  return(nuevo);
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let contador = 0;
  let nuevo = [];
  while(contador < 10){
    numero = numero + 2;
    if (numero != contador ){
      nuevo.push(numero);
    }else{
      return("Se interrumpió la ejecución");
      break;
    }
    contador ++;
  }
  return(nuevo);
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
   let cont = 0;
   let nuevoA = [];
   label1: while(cont < 10){
     cont ++;     
     if ( cont != 5){
        numero = numero + 2;
        nuevoA.push(numero);  
      }else{
        continue label1;
      }  
   }
    return(nuevoA); 
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
