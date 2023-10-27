/* 8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
*/

let numeroDivisible = parseInt(prompt("Ingrese su número"));

if (isNaN(numeroDivisible)) {
  document.write("Ingrese un número");
} else if (numeroDivisible % 2 == 0) {
  document.write("El numero " + numeroDivisible + " es divisible en 2");
} else {
  document.write(
    "El numero " + numeroDivisible + " da como resultado un numero con coma"
  );
}
