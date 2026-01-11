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
/*
let num = [2, 5, 7, 2, 8, 7];
console.log(`Índice de la última posición en la que aparece el número 7: ${num.lastIndexOf(7)}`);
*/
/*** Ejercicio 7: Verificar si una lista contiene un elemento
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si "Sushi" está en la lista y muestra un mensaje que confirme si está o no. ***/
/*
let comidas = ["Pizza", "Hamburguesa", "Tacos"];
if (comidas.includes("Sushi")) {
  console.log("Sushi está en la lista");
} else {
  console.log("Sushi no está en la lista");
}
*/
/*** Ejercicio 8: Extraer una parte de una frase
Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte "gatos" utilizando el método adecuado. ***/
/*
let frase = "Los gatos son geniales";
console.log(frase.slice(4,9));
*/
/*** Ejercicio 9: Eliminar espacios innecesarios
Tienes la siguiente cadena con espacios adicionales 
"    Hola, mundo!    "
Elimina los espacios al inicio y al final y muestra la cadena resultante. ***/
/*
let frase = "    Hola, mundo!    ";
console.log(frase.trim());
*/
/*** Ejercicio 10: Reemplazar una palabra en una frase
Tienes la frase "Me gusta el invierno". Cambia la palabra "invierno" por "verano" y muestra la frase actualizada.***/
/*
let frase = "Me gusta el verano";
console.log(frase.replace('verano','invierno'));
//soy team invierno profe :D
*/

//***** Ejercicios Extra *****

/* Gestión de inventario de una tienda
Eres encargado de una tienda y tienes un inventario inicial de productos. La lista de productos es:
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
Debes realizar las siguientes acciones:
1.	Agregar un nuevo producto "Impresora" al inventario usando el método adecuado.
2.	Comprobar si "Tablet" está en el inventario y mostrar un mensaje adecuado.
3.	Eliminar el primer producto del inventario.
4.	Mostrar la lista actualizada de productos en una sola cadena, separados por comas.*/
/*
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"];
//Agregar un nuevo producto "Impresora"
inventario.push("Impresora");
//Comprobar si "Tablet" está en el inventario
if (inventario.includes("Tablet")) {
    console.log("Tablet está en el inventario.");
} else {
    console.log("Tablet no está en el inventario.");
}
//Eliminar el primer producto
inventario.shift();
//Mostrar la lista actualizada
let inventarioFinal = inventario.join(", ");
console.log("Inventario actual:", inventarioFinal);
*/

/* Clasificación de palabras según su longitud
Tienes una lista de palabras en una oración. Debes:
1.	Dividir la oración en palabras individuales.
2.	Clasificar las palabras en dos categorías:
▪	Cortas (menos de 5 letras)
▪	Largas (5 letras o más)
3.	Mostrar ambas listas de palabras clasificadas.
4.	La oración es: "JavaScript es un lenguaje poderoso y versátil".*/
/*
let oracion = "JavaScript es un lenguaje poderoso y versátil";

// Divido la oración en palabras
let palabras = oracion.split(" ");

let cortas = []; //<5 letras
let largas = []; //>=5 letras

// Clasifico las palabras según longitud
for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].length < 5) {
        cortas.push(palabras[i]);
    } else {
        largas.push(palabras[i]);
    }
}

// Muestro las listas
console.log("Palabras cortas:", cortas);
console.log("Palabras largas:", largas);
*/

/* Simulador de una cola de atención al cliente
Simula una cola de atención al cliente donde los clientes llegan y son atendidos uno por uno. Tienes una lista inicial de clientes en espera y un bucle que los atiende de a uno. Realiza lo siguiente:
1.	Mientras haya clientes en la cola, atiende a cada uno y muéstralo por consola.
2.	Si el nombre del cliente es "VIP", muéstralo con prioridad indicando un mensaje especial.
3.	Al final, muestra cuántos clientes fueron atendidos en total.
Lista inicial de clientes: ["Ana", "Carlos", "VIP", "Sofía", "Juan"].*/

let clientes = ["Ana", "Carlos", "VIP", "Sofía", "Juan"];
let totalAtendidos = 0; //contador

while (clientes.length > 0) {

    // Atender al primer cliente de la cola
    let cliente = clientes.shift();

    // Verificar si es VIP
    if (cliente === "VIP") {
        console.log(`***Cliente VIP atendido con prioridad***`);
    } else {
        console.log("Cliente atendido:", cliente);
    }

    totalAtendidos++;
}

console.log("Total de clientes atendidos:", totalAtendidos);