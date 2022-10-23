//Uso de variables

function saludar(){
	//Uso de prompt
	let name = prompt("Ingresa tu nombre");
	alert(`Welcome ${name}`);
}

function datos(){
	let nombreUsuario = "Denilson";
	let edad = 22;
	let nacionalidad = "Colombia";
	let estadoCivil = "Soltero";
//Uso de concatenaciones
	document.write(`
						Su nombre es: <b>${nombreUsuario}</b><br>
			Su edad es: <b>${edad}</b><br>
			Su nacionalidad es: <b>${nacionalidad}</b><br>
			Estado Civil: <b>${estadoCivil}</b><br>
		`);
}

// datos();

//Usando las condiciones if/else
function numMayor(num1, num2){
	if (num1 < num2) {
		console.log("El numero es mayor");
	} else {
		console.log("El numero es menor");
	}
}

// let num1 = prompt("Dijite el primer numero")
// let num2 = prompt("Dijite el segundo numero");

// numMayor(num1, num2);

//Usando las condicionales if/else if/else
function calculadora(){
	alert("Elija la operacion matematica que desea realizar");
	let operadores = prompt(`1: Suma, 2: Resta, 3: Multiplicacion, 4: Division`);
	//Usando operador logico or (||)
	if(operadores == "Suma" || operadores == "suma" || operadores == 1){
		let num1 = prompt("Ingresa el primer numero");
		let num2 = prompt("Ingresa el segundo numero");
		let resultado = parseInt(num1) + parseInt(num2);
		console.log(resultado);
	} else if(operadores == "Resta" || operadores == "resta" || operadores == 2){
		let num1 = prompt("Ingresa el primer numero");
		let num2 = prompt("Ingresa el segundo numero");
		let resultado = parseInt(num1) - parseInt(num2);
		console.log(resultado);
	}else if (operadores == "Multiplicacion" || operadores == "multiplicacion" || operadores == 3){
		let num1 = prompt("Ingresa el primer numero");
		let num2 = prompt("Ingresa el segundo numero");
		let resultado = parseInt(num1) * parseInt(num2);
		console.log(resultado);
	}else if (operadores == "Division" || operadores == "division" || operadores == 4) {
		let num1 = prompt("Ingresa el primer numero");
		let num2 = prompt("Ingresa el segundo numero");
		let resultado = parseInt(num1) / parseInt(num2);
		console.log(resultado);
	} else {
		alert("La operacion no encontrada");
	}
}

// calculadora();

function mayorEdad(){
	//Operacion logica and (&&)
	alert("Embajada y solo aceptamos mayores de edad y de nacionalidad Colombia");
	let name = prompt("Ingresa su nombre");
	let edad = prompt(`${name} ingresa tu edad`);
	let nacionalidad = prompt(`${name} necesitamos que nos diga tu nacionalidad`);
	if (edad >= 18 && nacionalidad === "Colombia" || nacionalidad == "colombia") {
		alert(name + " Eres mayor de edad y de la nacionalidad de : " + nacionalidad);
	}else if(nacionalidad === "Colombia" || nacionalidad == "colombia"){
		alert(`${name} eres de Colombia pero no tienes la mayoria de edad`);
	}else {
		alert(name + " Eres menor de edad y no perteneces a Colombia");
	}
}

// mayorEdad();

function catalogo(){
	//Usando la declaracion switch
	let opciones = prompt(`
Elija una opcion:
1: Libro
2: Pelicula
3: Juegos`);

	switch(opciones){
		case "1":
			document.write("Eloquent JavaScript");
			break;
		case "2":
			document.write("Garra");
			break;
		case "3":
			document.write("FIFA 23");
			break;
		default:
			alert("Catalogo no incluido");
			break;
	}
}
// catalogo();

//Usando el bucle while
let n = 0;
while(n <= 5){
	// document.write(`Vueltas: ${n} <br>`);
	n++;
}

//Usando Math.random y Math.floor
function numRandom(min, max){
	return Math.floor(Math.random() * (max - min)) + min;
}
// console.log(numRandom(1, 50));

function azar(){
	let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
	// console.log(numeroMaquina);
	let numeroUser = parseInt(prompt("Adivine el numero del 1 al 10"));

	let vidas = 3;

	while(numeroMaquina !== numeroUser && vidas > 1){
		vidas--;
		numeroUser = parseInt(prompt(`Vuelve a intentarlo, tus vidas: ${vidas}`));
	}

	if (numeroMaquina === numeroUser) {
		alert(`GANASTE`);
	} else {
		alert(`PERDISTE, el numero era ${numeroMaquina}`);
	}
}
// azar();

//Usando funcion flecha
const maquinaAzar = () =>{
	let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;
	// console.log(numeroMaquina);
	let numeroUser = parseInt(prompt("Adivine el numero del 1 al 10"));

	let vidas = 3;

	while(numeroMaquina !== numeroUser && vidas > 1){
		if (numeroMaquina < numeroUser) {
			alert("Un numero más bajo");
		} else {
			alert("Un numero más alto");
		}
		vidas--;
		numeroUser = parseInt(prompt(`Vuelve a intentarlo, tus vidas: ${vidas}`));
	}

	if (numeroMaquina === numeroUser) {
		alert(`GANASTE`);
	} else {
		alert(`PERDISTE, el numero era ${numeroMaquina}`);
	}
}
// maquinaAzar();

//Uso de array

const frutas = ["mango", "Manzana", "Pera", "Uva", "Fresa"];
// console.log(frutas);

//Usando bucle for
for (let i = 0; i < frutas.length; i++) {
	// console.log(frutas[i]);
}

//Usando bucle for of - Mostramos lo que hay dentro de un array
for(let fru of frutas){
	// console.log(fru);
}

//Usando bucle for in - Mostrar las posiciones del array
for(let fruta in frutas){
	// console.log(fruta);
}

const carritoCompra = () => {
	const carrito = [];
	const fruta = prompt(`🍒 Feria Market 🍉 ¿Qué fruta desea comprar?`);

	carrito.push(fruta);

	while(confirm('¿Desea agregar otro elemento al 🛒?')){
		const fruta = prompt('¿Qué fruta desea comprar?');
		carrito.push(fruta);
	}
	// Usando bucle forEach 
	console.log('Usted compró: ');
	carrito.forEach((fruta, index) =>{
		console.log(`${index + 1}: ${fruta}`);
	});
}

// carritoCompra();

//Usando Object
const perro = {
	nombre: "Cocke",
	raza: "Cocker",
	edad: 4,
	enemigos: ["gatos", "perros"]
}

//Usando hasOwnProperty() - Es para ver si una propiedad existe o no en un object
// console.log(perro.hasOwnProperty("nombre"));
// console.log(perro.hasOwnProperty("salud"));

//Usando Object anidado
const gato = {
	nombre: 'Pelusa',
	duerme: true,
	edad: 7,
	enemigos: ["perros", "agua"],
	otros: {
		amigos: ["cobarde", "tímido", "pegajoso"],
		favoritos:{
			comida:{
				fria: 'salmon',
				caliente: 'pollo'
			},
		},
	},
	comer: function(){
		console.log("Ahora está comiendo");
	}
};

const animal = () => {
	const tigre = {
		nombre: 'campana',
		duerme: true,
		edad: 10,
		enemigos: ["Leones", "cocodrilos"],
		comer(comida){
			return `${this.nombre} está comiendo ${comida}`;
		},
		//Usando Getters
		get nombreMayuscula(){
			return this.nombre.toUpperCase();
		},
		//Usando Setters
		set nuevoEnemigo(nuevo){
			return this.enemigos.push(nuevo);
		}
	}

	console.log(tigre.nombreMayuscula);
	tigre.nuevoEnemigo = "Tiburones";
	console.log(tigre.enemigos);
}

// animal();

//getElementById()
// let text = document.getElementById("tituloWeb");
// let text2 = document.getElementById("tituloWeb").textContent;
// let text3 = document.getElementById("tituloWeb").innerHTML;

// console.log(text);

const visualizar = () => {
	const inputColor = document.getElementById("inputColor");
	const boton = document.getElementById("boton");
	const textoHexa = document.getElementById("textoHexa");
	const cardColor = document.getElementById("cardColor");

	//Usando addEventListener()
	boton.addEventListener("click", () => {
		console.log(inputColor.value);
		textoHexa.textContent = inputColor.value;
		cardColor.style.backgroundColor = inputColor.value;
		navigator.clipboard.writeText(inputColor.value).then(() => console.log("Texto copiado")).catch((e) => console.log(e));
	});
}
// visualizar();

const paises = () =>{
	//Usando querySelector()
	const listaDinamica = document.querySelector("#listaDinamica");
	const arrayElement = ["Colombia", "Argentina", "Brazil"];
	const fragment = new DocumentFragment();

	//Usando createElement()
	arrayElement.forEach((pais) =>{
		const li = document.createElement("li");
		li.className = "lista";

		const bold = document.createElement("b");
		bold.textContent = "País : ";

		const span = document.createElement("span");
		span.className = "text-primary";
		span.textContent = pais;

		//Usando appendChild()
		li.appendChild(bold);
		li.appendChild(span);
		fragment.appendChild(li);
	});
	listaDinamica.appendChild(fragment);
}
// paises();

const dinamico = () =>{
	//Dandole uso al innerHTML
	const arrayElement = ["Colombia", "Argentina", "Brazil"];

	let template = "";

	arrayElement.forEach((pais) =>{
		template += `<li class="list">
						<b>País: </b> <span class="text-primary">${pais}</span>
					</li>`;
	});
	listaDinamica.innerHTML = template;
}
// dinamico();

const carritoObject = () =>{
	const carrito = document.querySelector("#carrito");
	const template = document.querySelector("#template");
	const fragment = document.createDocumentFragment();
	const agregar = document.querySelectorAll(".card button");

	const carritoObjecto = {};

	const agregarCarrito = (e) =>{
		// console.log(e.target.dataset);
    	// console.log(e.target.dataset.fruta);

    	const producto = {
    		titulo: e.target.dataset.fruta,
    		id: e.target.dataset.fruta,
    		cantidad: 1
    	};

    	if (carritoObject.hasOwnProperty(producto.id)) {
    		producto.cantidad = carritoObjecto[producto.id].cantidad + 1;
    	}

    	carritoObjecto[producto.id] = producto;

    	pintarCarrito();
	}

	agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));

	const pintarCarrito = () => {
		carrito.textContent = "";

		Object.values(carritoObjecto).forEach((item) => {
			const clone = template.content.cloneNode(true);
			clone.querySelector(".lead").textContent = item.titulo;
			clone.querySelector(".rounded-pill").textContent = item.cantidad;
			fragment.appendChild(clone);
		});
		carrito.appendChild(fragment);
	}
}

carritoObject();