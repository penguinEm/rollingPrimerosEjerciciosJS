/* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20
Output: El 20 es divisible por 2.
 */

const numeroD = parseInt(prompt("Ingrese su número"));

if (isNaN(numeroD)) {
  document.write (`Ingrese un número valido`)
} else if ((numeroD % 2) == 0) {
  document.write(`El número ingresado ${numeroD}, es divisble en 2`);
} else if ((numeroD % 3) == 0) {
  document.write(`El número ingresado ${numeroD}, es divisble en 3`);
} else if ((numeroD % 5) == 0) {
  document.write(`El número ingresado ${numeroD}, es divisble en 5`);
} else if ((numeroD % 7) == 0) {
  document.write(`El número ingresado ${numeroD}, es divisble en 7`);
} else {
  document.write (`El número ingresado ${numeroD} no es divisible en 2, 3, 5, 7`)
}
