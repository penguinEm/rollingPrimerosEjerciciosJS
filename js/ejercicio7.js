/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
 */

let num1 = parseFloat(prompt("Ingrese el primero número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));
let num3 = parseFloat(prompt("Ingrese un tercer número"));

if (num1 > num2 && num1 > num3) {
  document.write(num1 + " es mayor que :" + num2 + " y " + num3);
} else if (num2 > num1 && num2 > num3) {
  document.write(num2 + " es mayor que :" + num1 + " y " + num3);
} else if (num3 > num1 && num3 > num2) {
  document.write(num3 + " es mayor que :" + num1 + " y " + num1);
} else if (num3 === num1 && num3 === num2) {
  document.write("Tus tres números son iguales");
} else {
  document.write("No ingreso un número valido");
}
