//Ejemplos del libro Eloquent JavaScript
function factorial(num) {
    if (num == 0) {
        return 1;
    } else {
        return factorial(num - 1) * num
    }
}

// console.log(factorial(8))

//Vinculaciones o variables

let deuadaLuigi = 140;
deuadaLuigi = deuadaLuigi - 35;
// console.log(deuadaLuigi);

//**********************PALABRAS CLAVEZ ****************************
// break, case, catch, class, const, continue, debugger, default, 
// delete, do, else, enum, export, extends, false, finally, for, 
// function, if, implements, import, interface, in, instanceof, let, 
// new, package, private, protected, public, return, static, super, 
// switch, this, throw, true, try, typeof, var, void, while, with, yield

//valore de retorno

// console.log(Math.max(6, 9));
// console.log(Math.min(6, 9));

//Flujo de control

// let elNumero = Number(prompt("Elige un numero"));
// let result = elNumero * elNumero;
// let num = Number(prompt("Agrega un numero"));
// console.log(`Tu numero es la raiz cuadrada de ${elNumero * elNumero}`);

//Ejecución Condicional

// if (!Number.isNaN(elNumero)) {
//     console.log(`Tu número es la raiz cuadrada de ${result}`);
// } else {
//     console.log("no podemos hacer la validacion por que falta agregar un valor");
// }


// if (num < 10) {
//     console.log("Numero pequeño");
// } else if (num < 100) {
//     console.log("Numero Mediano");
// } else {
//     console.log("Numero Grande");
// }

//Ciclo WHILE Y DO

let numero = 0;
while (numero <= 12) {
    // console.log(numero);
    numero = numero + 2;
}

let result = 1;
let cont = 0;

while (cont < 10) {
    result = result * 2;
    cont = cont + 1;
}

// console.log(result);

// let tuNombre;

// do {
//     tuNombre = prompt("Quien eres?");
// } while (!tuNombre);
// console.log(tuNombre);

//Ciclo For

for (let i = 0; i <= 12; i = i + 2) {
    // console.log(i);
}

let resultado = 1;
for (let i = 0; i < 10; i++) {
    resultado = resultado * 2;
}
// console.log(resultado);

//Rompiendo un ciclo

for (let i = 20;; i++) {
    if (i % 7 == 0) {
        // console.log(i);
        break;
    }
}

//Actualizando vinculacones de manera sucinta

for (let i = 0; i <= 12; i += 2) {
    // console.log(i);
}

//Despachar en un valor con switch

// switch (prompt("como esta el clima?")) {
//     case "Lluvioso":
//         console.log("Recuerda salir con un paraguas.");
//         break;
//     case "Soleado":
//         console.log("Vistete comodo.");
//         break;
//     case "Nublado":
//         console.log("Sal a refrescarte.");
//         break;
//     default:
//         console.log("Clima no identificado!");
//         break;
// }

//EJERCICIOS

// const miArray = [
//     '#',
//     '##',
//     '###',
//     '####',
//     '#####',
//     '######',
//     '#######'
// ];

// for (let i = 0; i < miArray.length; i++) {
//     console.log(miArray[i]);
// }


for (let line = "#"; line.length < 8; line += "#") {
    // console.log(line);
}

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    // console.log(output || n);
}

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

// console.log(board);

//Definiendo una funcion

function hacerSonido() {
    console.log("Pling!");
}

// hacerSonido();

function potencia(base, exponente) {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
        resultado *= base;
    }
    return resultado;
}

// console.log(potencia(2, 10));

//Alcance anidado

function humus(factor) {
    function ingrediente(cantidad, unidad, nombre) {
        let cantidadIngrediente = cantidad * factor;
        if (cantidadIngrediente > 1) {
            unidad += "s";
        }
        console.log(`${cantidadIngrediente} ${unidad} ${nombre}`);
    }
    ingrediente(1, "lata", "garbanzos");
    ingrediente(0.25, "taza", "tahini");
    ingrediente(0.25, "taza", "jugo de limón");
    ingrediente(1, "clavo", "ajo");
    ingrediente(2, "cucharada", "aceite de oliva");
    ingrediente(0.5, "cucharadita", "comino");
}

// console.log(humus(43));

const pot = (base, exponente) => {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
        resultado *= base;
    }
    return resultado;
}

// console.log(pot(2, 10));

function saludar(quien) {
    console.log(`Hola ${quien}`);
}
// saludar("Denilson");
// console.log("Adios");

function gallina() {
    return huevo();
}

function huevo() {
    return gallina();
}
// console.log(`${gallina()} vino primero.`);

//Argumentos opcionales

function menos(a, b) {
    if (b === undefined) {
        return -a;
    } else {
        return a - b;
    }
}

// console.log(menos(10));
// console.log(menos(10, 5));

function pote(base, exponente = 2) {
    let resultado = 1;
    for (let cuenta = 0; cuenta < exponente; cuenta++) {
        resultado *= base;
    }
    return resultado;
}

// console.log(pote(4));
// console.log(pote(2, 6));

//CIERRE

function envolverValor(n) {
    let local = n;
    return () => local;
}
let envolver1 = envolverValor(1);
let envolver2 = envolverValor(2);

// console.log(envolver1());
// console.log(envolver2());

function multiplicador(factor) {
    return numero => numero * factor;
}
let duplicar = multiplicador(2);
// console.log(duplicar(5));

//RECURSIÓN

function poten(base, exponente) {
    if (exponente == 0) {
        return 1;
    } else {
        return base * poten(base, exponente - 1);
    }
}

// console.log(poten(2, 3));


function encontarSolucion(objetivo) {
    function encontrar(actual, historia) {
        if (actual == objetivo) {
            return historia;
        } else if (actual > objetivo) {
            return null;
        } else {
            return encontrar(actual + 5, `(${historia} + 5)`) ||
                encontrar(actual * 3, `(${historia} * 3)`);
        }
    }
    return encontrar(1, "1");
}

// console.log(encontarSolucion(24));

//funciones crecientes

function impirmirInventarioGranja(vacas, pollos) {
    let stringVaca = String(vacas);
    while (stringVaca.length < 3) {
        stringVaca = "0" + stringVaca;
    }
    console.log(`${stringVaca} Vacas`);
    let stringPollo = String(pollos);
    while (stringPollo.length < 3) {
        stringPollo = "0" + stringPollo;
    }
    console.log(`${stringPollo} Pollos`);
}
// impirmirInventarioGranja(7, 11);

function imprimirEtiquetaAlcochadaConCeros(numero, etiqueta) {
    let stringNumero = String(numero);
    while (stringNumero.length < 3) {
        stringNumero = "0" + stringNumero;
    }
    console.log(`${stringNumero} ${etiqueta}`);
}

function impirmirInventarioGranja(vacas, pollos, cerdos) {
    imprimirEtiquetaAlcochadaConCeros(vacas, "Vacas");
    imprimirEtiquetaAlcochadaConCeros(pollos, "Pollos");
    imprimirEtiquetaAlcochadaConCeros(cerdos, "Cerdos");
}

// impirmirInventarioGranja(7, 11, 3);

function alcocharConCeros(numero, amplitud) {
    let string = String(numero);
    while (string.length < amplitud) {
        string = "0" + string;
    }
    return string;
}

function impirmirInventarioGranja(vacas, pollos, cerdos) {
    console.log(`${alcocharConCeros(vacas, 3)} Vacas`);
    console.log(`${alcocharConCeros(pollos, 3)} Pollos`);
    console.log(`${alcocharConCeros(cerdos, 3)} Cerdos`);
}

// impirmirInventarioGranja(7, 16, 3);

//EJERCICIOS

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// console.log(min(0, 10));
// console.log(min(0, -10));

function isEven(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else if (n < 0) {
        return isEven(-n);
    } else {
        return isEven(n - 2);
    }
}

// console.log(isEven(50));
// console.log(isEven(75));
// console.log(isEven(-1));

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}

// console.log(countBs("BBC"));
// console.log(countChar("kakkerlak", "k"));

//Array

let seceuncia = [1, 2, 3];
seceuncia.push(4);
seceuncia.push(5);
// console.log(seceuncia);
// console.log(seceuncia.pop());
// console.log(seceuncia);

//Object

let dia1 = {
        ardilla: false,
        eventos: ["Trabajo", "Toque un arbol", "Pizza", "Salir a correr"]
    }
    // console.log(dia1.ardilla);
    // console.log(dia1.lobo);
dia1.lobo = false;
// console.log(dia1.lobo);

let unObjeto = {
        izquierda: 1,
        derecha: 2
    }
    // console.log(unObjeto.izquierda);
delete unObjeto.izquierda;
// console.log(unObjeto.izquierda);
// console.log("izquierda" in unObjeto);
// console.log("derecha" in unObjeto);

// console.log(Object.keys({ x: 0, y: 0, z: 2 }));

let objectoA = {
    a: 1,
    b: 2
}
Object.assign(objectoA, { b: 3, c: 4 });
// console.log(objectoA);