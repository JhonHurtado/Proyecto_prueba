
var nombre = "Juan";
let apellido = "Perez";
var objeto = "moto";
const genero = "masculino";
var numTel = 1234567890;

let frutas = ["manzana", "pera", "uva", "sandia"];
let verduras = ["lechuga", "tomate", "cebolla", "papa"];
let carnes = ["res", "cerdo", "pollo", "pescado"];
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    genero: "masculino",
    numTel: 1234567890,
    saludar: function () {
        return "Hola, mi nombre es " + this.nombre + " " + this.apellido + " y tengo " + this.edad + " años";
    }
}

console.log("1" - 1);





// console.log(frutas);

// console.log(frutas[3]);
// console.log(numeros);





// console.log("objeto ", objeto)

// objeto = "carro";
// apellido = "Martinez";

// console.log("Apellido ", apellido)

// console.log("objeto ", objeto)

// console.log("Hola ",nombre);
// alert("Hola "+nombre);







function sum (){

}





document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los elementos de entrada y botones
    const numero1 = document.getElementById("numero1");
    const numero2 = document.getElementById("numero2");
    const resultado = document.getElementById("valorResultado");

    // Función para realizar una operación y mostrar el resultado
    function calcular(operacion) {
        const valor1 = parseFloat(numero1.value);
        const valor2 = parseFloat(numero2.value);

        if (isNaN(valor1) || isNaN(valor2)) {
            resultado.textContent = "Por favor, ingrese números válidos.";
            return;
        }

        let resultadoOperacion;
        switch (operacion) {
            case "sumar":
                resultadoOperacion = valor1 + valor2;
                break;
            case "restar":
                resultadoOperacion = valor1 - valor2;
                break;
            case "multiplicar":
                resultadoOperacion = valor1 * valor2;
                break;
            case "dividir":
                if (valor2 === 0) {
                    resultado.textContent = "No se puede dividir por cero.";
                    return;
                }
                resultadoOperacion = valor1 / valor2;
                break;
        }
        resultado.textContent = resultadoOperacion;
    }

    // Asignar eventos a los botones
    document.getElementById("sumar").addEventListener("click", () => calcular("sumar"));
    document.getElementById("restar").addEventListener("click", () => calcular("restar"));
    document.getElementById("multiplicar").addEventListener("click", () => calcular("multiplicar"));
    document.getElementById("dividir").addEventListener("click", () => calcular("dividir"));

    // Limpiar los campos de entrada y el resultado
    document.getElementById("limpiar").addEventListener("click", () => {
        numero1.value = "";
        numero2.value = "";
        resultado.textContent = "0";
    });
});


for (let i = 0; i < 10; i++) {
    console.log("Iteración número:", i);
    const suma = i + 5
    console.log("la suma de " + i + " + 5 es: " + suma);
  }