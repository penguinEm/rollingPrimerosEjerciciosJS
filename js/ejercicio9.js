/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo
Output: oauo
 */

let frase = prompt(`Escriba una frase`);
let vocales = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "á",
  "é",
  "í",
  "ó",
  "ú",
  "A",
  "E",
  "I",
  "O",
  "U",
  "Á",
  "É",
  "Í",
  "Ó",
  "Ú",
];
let contador = 0;

console.log(frase.length);

while (contador <= frase.length) {
  if (
    frase.charAt(contador) === vocales[0] ||
    frase.charAt(contador) === vocales[1] ||
    frase.charAt(contador) === vocales[2] ||
    frase.charAt(contador) === vocales[3] ||
    frase.charAt(contador) === vocales[4] ||
    frase.charAt(contador) === vocales[5] ||
    frase.charAt(contador) === vocales[6] ||
    frase.charAt(contador) === vocales[7] ||
    frase.charAt(contador) === vocales[8] ||
    frase.charAt(contador) === vocales[9] ||
    frase.charAt(contador) === vocales[10] ||
    frase.charAt(contador) === vocales[11] ||
    frase.charAt(contador) === vocales[12] ||
    frase.charAt(contador) === vocales[13] ||
    frase.charAt(contador) === vocales[14] ||
    frase.charAt(contador) === vocales[15] ||
    frase.charAt(contador) === vocales[16] ||
    frase.charAt(contador) === vocales[17]
  ) {
    document.write(frase.charAt(contador));
  }
  contador++;
}
