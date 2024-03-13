let id = 0;
let productos = [];

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id++;
    }
}

function pedir_num(str, max) {
    let respuesta = Number(prompt(str));

    while (isNaN(respuesta) || (respuesta < 0 || respuesta > max)) {
        alert('Por favor, ingrese un dato válido');
        respuesta = Number(prompt(str));
    }

    return respuesta;
}

function agregarProducto() {
    let nombreProducto = prompt("Ingrese el nombre del producto");
    let precioProducto = parseFloat(prompt("Ingrese el precio del producto"));

    let nuevoProducto = new Producto(nombreProducto, precioProducto);
    productos.push(nuevoProducto);

    ordenarProductos();
    mostrarProductos();
}

function verificarSaldo() {
    let saldo = pedir_num('Ingrese el saldo');
    let productosDisponibles = productos.filter(producto => producto.precio <= saldo);

    if (productosDisponibles.length === 0) {
        alert("Saldo insuficiente");
    } else {
        alert("Productos disponibles:");
        mostrarProductos(productosDisponibles);
    }
}

function buscarProducto() {
    let nombre_producto = prompt('Ingrese el nombre del producto del que quiere saber').toLowerCase();
    let productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === nombre_producto);

    if (productoEncontrado) {
        alert(`Búsqueda realizada con éxito:\n ID: ${productoEncontrado.id},\n Nombre: ${productoEncontrado.nombre},\n Precio: ${productoEncontrado.precio}`);
    } else {
        alert("El producto que buscaba no fue encontrado");
    }
}

function ordenarProductos() {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
}

function mostrarProductos(lista = productos) {
    lista.forEach(producto => {
        alert(`Lista de productos:\n ID: ${producto.id},\n Nombre: ${producto.nombre},\n Precio: ${producto.precio}`);
    });
}

let salir = false;

while (!salir) {
    let opc = pedir_num('----- ¿Qué quiere hacer? -----\n1. Agregar productos\n2. Verificar saldo\n3. Verificar productos\n0. Salir', 3);

    switch (opc) {
        case 1:
            agregarProducto();
            break;
        case 2:
            verificarSaldo();
            break;
        case 3:
            buscarProducto();
            break;
        case 0:
            if (confirm("¿Está seguro de que desea salir? se perdera todos los datos ingreados")) {
                salir = true;
            }
            break;
    }
}

alert("-----\PROGRAMA FINALIZADO-----\n");

document.body.innerHTML += '<button onclick="location.reload();">Abrir programa nuevamente</button>';


//--------------------------------------------------------------------


//      Queria poner el boton en el html pero en el metodo que estaba haciendo
//      iba a englobar todo el codigo en esa funcion y no seria una buena practica, verdad?

//      En esta entrega con poco tiempo y con la cuerda sobre el cuello,
//      tome como base algo de lo que vimos en clase y lo modifique segun las condiciones que solicitaban
//      funciona como un cuaderno de anotaciones para un super o lo que sea.  

//      para la proxima entrega si le voy a meter a algo bueno.