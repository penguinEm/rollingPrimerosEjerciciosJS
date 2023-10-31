/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7.
*/

const numeroD = parseInt(prompt("Ingrese un número"));
let mensajeParaMostrar = "";

if (numeroD % 2 == 0) {
  mensajeParaMostrar = mensajeParaMostrar + "|2|";
}
if (numeroD % 3 == 0) {
  mensajeParaMostrar = mensajeParaMostrar + " |3| ";
}
if (numeroD % 5 == 0) {
  mensajeParaMostrar = mensajeParaMostrar + " |5| ";
}
if (numeroD % 7 == 0) {
  mensajeParaMostrar = mensajeParaMostrar + "|7|";
}

if (mensajeParaMostrar != "") {
  document.write(`El número ingresado es divisible en ${mensajeParaMostrar}`);
} else if (isNaN(numeroD)) {
  document.write("Ingrese un número válido");
} else {
  document.write(`El número ingresado no es divisible en 2, 3, 5, 7`);
}
