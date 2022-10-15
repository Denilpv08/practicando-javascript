//Tipo de datos

//String
let text = "Hola!";
//Number
let num = 22;
//Boolean
let bool = true;

//Operaciones matematicas

//Suma
let sum = 3 + 2;
//Resta
let res = 4 - 2;
//Multiplicacion 
let mul = 6 * 3;
//Divicion
let div = 2 / 8;
//Elevado
let pot = 3 ** 8;

//Concatenar
let cad = "Hola " + "Denilson, " + "Como estas?";

//Pos incrementar
let x = 1;
let y = ++x;

//Incremento
let z = x++;

//Pos desincremento
let a = --x;

//Desincremento
let b = x--;

//valore Boolean

//Distinto
!true;
!false;

//Igual
true === false;
false === false;

//Distinto a
true !== false;
true !== true;

//Condicionales If

let oper = 2 * 2
if (oper > 5) {
    console.log("El operador es mayor que 5");
} else if (oper < 7 && oper > 4) {
    console.log("La operacion esta entre 4 y 7");
} else {
    // console.log("La operacion es menor de 4");
}

//Condicional Switch
let suma = 5 + 8;

switch (suma) {
    case 0:
        console.log("El caso es 0");
        break;

    case 13:
        // console.log("El caso es 13");
        break;
    default:
        console.log("El caso no es ni 0 ni 7");
}

//Funciones

function saludar(nombre) {
    return `¡Hola ${nombre}!`;
}

// console.log(saludar("Denilson"));

//Clases creadas con funciones
// function Inventario(nombre) {
//     this.nombre = nombre;
//     this.articulo = [];
// }
// Inventario.prototype.getNombre = function() {
//     return this.nombre;
// }
// Inventario.prototype.add = function(articulo, cantidad) {
//     this.articulo[articulo] = cantidad;
// }
// Inventario.prototype.cantidad = function(articulo) {
//     return this.articulo[articulo];
// }

//Clases normales

class Inventario {
    constructor(nombre) {
        this.nombre = nombre;
        this.articulo = [];
    }
    getNombre() {
        return this.nombre;
    }
    add(articulo, cantidad) {
        this.articulo[articulo] = cantidad;
    }
    cantidad(articulo) {
        return this.articulo[articulo];
    }
}
let libros = new Inventario('libros');
libros.getNombre();
libros.add("Aprendiendo JavaScript", 5);
libros.cantidad('Aprendiendo JavaScript');

// console.log(libros);

//Objeto

const libro = {
    titulo: "Eloquent JavaScript",
    autor: "carlos Gonzales",
    numPagina: 387,
    editorial: "eloquent.net",
    precio: "50.500"
}

//Bucles

//Bucles while

function bucleWhile(num) {
    let i = 0;
    while (i < num) {
        document.write(`<br> ${i}`);
        i++;
    }
}
// bucleWhile(11);

//Bucle Do while

function doWhile(num) {
    let i = 0;
    do {
        document.write(`<br> ${i}`);
        i++;
    } while (i < num);
}
// doWhile(11);

//Bucle for

function bucleFor(num) {
    for (let i = 0; i < num; i++) {
        document.write(i);
    }
}
// bucleFor(11);

//Array

function miArray() {
    const obj = {
        unArray: new Array(10000)
    }

    const unArray = obj.unArray;

    for (let i = 0, longitud = unArray.length; i < longitud; i++) {
        console.log(unArray[i] = 'Hola');
    }
}

// miArray();

const myArray = [1, 2, 3, 4];

myArray.forEach((item, index) => {
    // console.log(`El valor de la posición ${index} es: ${item}`);
});


//Transformacion de una objecto a un array
const book = {
    title: "Aprendiendo javaScript",
    autor: "Denilson Prescott",
    numPagina: 200,
    editorial: "Denilpv.edu",
    precio: "50.000",
}

const props = Object.getOwnPropertyNames(book);
props.forEach(name => {
    let valor = Object.getOwnPropertyDescriptor(book, name).value;
    // console.log(`${name} : ${valor}`);
});

for (let prop in book) {
    // console.log(`${prop} : ${book[prop]}`);
}