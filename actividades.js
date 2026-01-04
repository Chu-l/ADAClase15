const prompt = require("prompt-sync")();
/*** Ejercicio 1: Añadir personajes a una lista
Tienes una lista de personajes de videojuegos ["Link", "Zelda"]. Agrega los personajes "Mario" y "Luigi" al final de la lista utilizando el método adecuado. Luego, muestra el array actualizado. ***/
/*
let personajes = ["Link", "Zelda"];
personajes.push("Mario", "Luigi");
console.log(personajes);
*/
/*** Ejercicio 2: Eliminar al último invitado
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. El último invitado no puede asistir. Elimina al último invitado y muestra quién fue eliminado y el estado actualizado de la lista.***/
/*
let invitados = ["Ana", "Juan", "Carlos", "Sofía"];
let noAsiste = invitados.pop();
console.log("No puede asistir: " + noAsiste);
console.log("Lista de invitados actualizada: " + invitados);
*/
/*** Ejercicio 3: Agregar y eliminar a la fila de mascotas
Tienes una fila de mascotas en una clínica veterinaria ["Perro", "Gato", "Conejo"]. Llega un "Hámster" que debe ser atendido primero. Agrega el "Hámster" al inicio de la lista. Luego, atiende a la primera mascota de la fila y muéstrala. Finalmente, muestra la lista actualizada. ***/
/*
let mascotas = ["Perro", "Gato", "Conejo"];
// Agrego al Hámster al inicio
mascotas.unshift("Hámster");
// Atiendo a la primera mascota
let mascotaAtendida = mascotas.shift();
console.log("Asistido de urgencia: " + mascotaAtendida);
console.log("Lista de mascotas actualizada: " + mascotas);
*/
/*** Ejercicio 4: Convertir una lista de palabras en una frase
Tienes un array de palabras ["JavaScript", "es", "divertido"]. Une todas las palabras en una sola frase, separadas por un espacio, y muestra el resultado. ***/
/*
let palabras = ["JavaScript", "es", "divertido"];
let frase = palabras.join(' ');
console.log(frase);
*/
/*** Ejercicio 5: Buscar la posición de un elemento
Tienes una lista de colores ["Rojo", "Verde", "Azul", "Amarillo"]. Encuentra y muestra el índice del color "Azul" en la lista. ***/
/*
let colores = ["Rojo", "Verde", "Azul", "Amarillo"];
console.log(`Índice del color azul: ${colores.indexOf("Azul")}`);
*/
/*** Ejercicio 6: Buscar la última posición de un elemento repetido
Tienes una lista de números [2, 5, 7, 2, 8, 7]. Encuentra y muestra la última posición en la que aparece el número 7. ***/

let num = [2, 5, 7, 2, 8, 7];
console.log(`Índice de la última posición en la que aparece el número 7: ${num.lastIndexOf(7)}`);


