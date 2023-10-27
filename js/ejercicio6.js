/* 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
 */

let num1 = parseFloat(prompt("Ingrese el primero número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));

if (num1 > num2) {
  document.write(num1 + " es mayor a " + num2);
} else if (num2 > num1) {
  document.write(num2 + " es mayor a " + num1);
} else if (num1 == num2) {
  document.write("Ambos numeros son iguales");
} else {
  document.write("No ingreso un número valido");
}
