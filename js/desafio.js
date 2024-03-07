// Se crean dos variables para almacenar los números del usuario
let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));

// Se verifica si los números son mayores a 0 y son números válidos
if (!isNaN(num1) && !isNaN(num2) && num1 > 0 && num2 > 0) {
  // Se calculan las operaciones matemáticas
  var suma = num1 + num2;
  var resta = num1 - num2;
  var division = num1 / num2;
  var multiplicacion = num1 * num2;
  var modulo = num1 % num2;

  // Se muestran los resultados al usuario
  console.log("Suma: " + suma);
  console.log("Resta: " + resta);
  console.log("División: " + division);
  console.log("Multiplicación: " + multiplicacion);
  console.log("Módulo: " + modulo);
} else {
  // Se muestra un mensaje de error al usuario
  console.log("Error: Los números deben ser válidos y mayores a 0");
}





// Se lee la temperatura en Celsius del usuario
let celsius = parseFloat(prompt("Ingrese la temperatura en Celsius: "));

// Se calculan las temperaturas en Kelvin y Fahrenheit
var kelvin = celsius + 273.15;
var fahrenheit = (celsius * 9 / 5) + 32;

// Se muestran los resultados al usuario
console.log("Temperatura en Kelvin: " + kelvin);
console.log("Temperatura en Fahrenheit: " + fahrenheit);1




// Se lee la cantidad de días del usuario
let dias = parseInt(prompt("Ingrese la cantidad de días: "));

// Se calculan los años, semanas y días restantes
var anios = Math.floor(dias / 365);
var semanas = Math.floor((dias % 365) / 7);
var diasRestantes = (dias % 365) % 7;

// Se muestran los resultados al usuario
console.log("Años: " + anios);
console.log("Semanas: " + semanas);
console.log("Días: " + diasRestantes);