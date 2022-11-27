// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,
        tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];





const contenedor = document.querySelector('#product-list-container');



let div = document.createElement('div');
div.innerHTML = `<label>${createDiv()}</label> - <input type="text">`;
contenedor.appendChild(div);

var stored = '';

function createDiv() {
    for (i = 0; i <= (products.length - 1); i++) {
        stored += products[i].description + '\n';
        return stored;
    }
}



























/*var input = document.createElement("input"); //Crear input, no visible
input.setAttribute("class", "product-unit");//CSS? clase y nombre de clase
input.setAttribute("type", "number"); //tipo
input.setAttribute("value", 0); //valor
input.addEventListener("change", event => console.log(event.target.value)); //funcion que muestra el valor del input al cambiarlo

var div = document.getElementById("product-list-container");

var span = document.createElement("span");
*/




/*span.innerText = stored;

div.appendChild(span);


div.appendChild(input);*/
