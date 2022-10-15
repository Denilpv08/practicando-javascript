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

