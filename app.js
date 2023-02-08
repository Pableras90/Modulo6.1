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

function createDiv() {
    for (i = 0; i <= (products.length - 1); i++) {
        let div = document.createElement('div');
        div.innerHTML = `<label>${products[i].description}</label> - `; //Añadir el label al div de cada producto JS
        div.append(createInput(i)); //Añadir el input al div de cada producto JS
        div.append(`€`);
        contenedor.appendChild(div); //Añadir al div del HTML
    }
}

createDiv();

function createInput(index) {
    var input = document.createElement("input"); //Crear input, no visible
    input.setAttribute("class", "product-unit");//CSS? clase y nombre de clase
    input.setAttribute("type", "number"); //tipo
    input.setAttribute("value", 0); //valor
    input.setAttribute("id", i); //id
    input.setAttribute("max", products[index].stock); //max
    input.setAttribute("min", 0); //min
    input.addEventListener("change", event => products[index].units = event.target.value); //funcion que muestra el valor del input al cambiarlo
    return input;
}


function calculoSubtotal() {
    var subtotal = 0;
    for (i = 0; i <= products.length - 1; i++) {
        products[i].subtotal = products[i].units * products[i].price;
        subtotal += products[i].subtotal;
    }
    return subtotal;
}


function calculoIva() {
    var iva = 0;
    for (i = 0; i <= products.length - 1; i++) {
        products[i].iva = (products[i].price * (products[i].tax / 100)) * products[i].units;
        iva += products[i].iva;
    }
    return iva;
}


function calculoTotal() {
    return calculoIva() + calculoSubtotal();
}

function botonCalcular() {
    document.getElementById("Subtotal").innerText = "Subtotal: " + calculoSubtotal();
    document.getElementById("IVA").innerText = "IVA: " + calculoIva();
    document.getElementById("Total").innerText = "Total: " + calculoTotal();
}

document.getElementById("button").addEventListener("click", () => botonCalcular());
