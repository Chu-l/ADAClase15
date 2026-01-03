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

let invitados = ["Ana", "Juan", "Carlos", "Sofía"];
let noAsiste = invitados.pop();
console.log("No puede asistir: " + noAsiste);
console.log("Lista de invitados actualizada: " + invitados);