// Ejemplo 1
function crearMensaje(mensaje, callback) {
  let miTexto = "Hola como estas... " + mensaje;
  callback(miTexto);
}

function mostrarTexto(texto) {
  console.log(texto);
}

crearMensaje("mundo asincronico??", mostrarTexto)

// Ejemplo 2

// function operacion(valor1, valor2, oper) {
//   return oper(valor1, valor2);
// }

const operacion = (valor1, valor2, oper) => {
  console.log(oper(valor1, valor2));
}

function suma(num1, num2) {
  return num1 + num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

// function resta(num1, num2) {
//   return num1 - num2;
// }

operacion(2, 5, suma)
operacion(2, 5, mult)
// opcion con funcion flecha para resta
operacion(8, 2, (num1, num2) => {
  return num1 - num2;
})

// Ejemplo 3

const operacionRetardo = (valor1, valor2, oper) => {
  return setTimeout(() => {
    oper(valor1, valor2)}, 3000);
}

operacionRetardo(3, 6, (num1, num2) => {
  console.log(num1 + num2);
})


// Ejemplo 4

const fCallB = function(){
  console.log("Numero mayor a 5!!!");
}

const fError = function(){
  console.log("numero menor o igual a 5!!!");
}

const fInicio = function(callback, callbackError){
  const number = Math.floor(Math.random() * 10);
  if(number > 5){
    callback();
  }
  else{
    callbackError();
  }
};

fInicio(fCallB, fError);