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

let mascotas = ["Perro", "Gato", "Conejo"];
// Agrego al Hámster al inicio
mascotas.unshift("Hámster");
// Atiendo a la primera mascota
let mascotaAtendida = mascotas.shift();
console.log("Asistido de urgencia: " + mascotaAtendida);
console.log("Lista de mascotas actualizada: " + mascotas);