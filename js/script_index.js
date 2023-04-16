let carrito = [];
let total = 0;
let precioBitcoin = 0;
let precioTron = 0;
const precioUsd = 400;
const div_carrito = document.getElementById("div-carrito");
let pedido_silla_1 = document.getElementById("formulario_silla_1");
let pedido_silla_2 = document.getElementById("formulario_silla_2");
let pedido_silla_3 = document.getElementById("formulario_silla_3");
let pedido_mesa_1 = document.getElementById("formulario_mesa_1");
let pedido_mesa_2 = document.getElementById("formulario_mesa_2");
let pedido_mesa_3 = document.getElementById("formulario_mesa_3");
let pedido_organizador_1 = document.getElementById("formulario_organizador_1");
let pedido_organizador_2 = document.getElementById("formulario_organizador_2");
let pedido_organizador_3 = document.getElementById("formulario_organizador_3");
let pedido_armario_1 = document.getElementById("formulario_armario_1");
let pedido_armario_2 = document.getElementById("formulario_armario_2");
let pedido_armario_3 = document.getElementById("formulario_armario_3");

async function ObtenerPrecios(){

    const response = await fetch("https://api.coincap.io/v2/assets");
    const datosApi = await response.json();

    datosApi.data.forEach(cripto => {
        if (cripto.id === "bitcoin") {
            precioBitcoin = cripto.priceUsd;
        }
        if (cripto.id === "tron") {
            precioTron = cripto.priceUsd;
        }
    });

}

ObtenerPrecios();

function enviarPedido(){
    console.log(carrito);
    carrito = [];
    console.log("El precio total a pagar es: ", total);
    agregarProductoCarrito();
    const div_contenedor = document.getElementById("contenedor-carrito");
    div_contenedor.innerHTML = ''; 
}

function cancelarPedido(){
    console.log("Pedido cancelado");
    carrito = [];
    agregarProductoCarrito();
    const div_contenedor = document.getElementById("contenedor-carrito");
    div_contenedor.innerHTML = ''; 
}

function cambiarImagenSilla1(i) {
    document.getElementById("imagen_silla_1").src = i;
}

function cambiarImagenSilla2(i) {
    document.getElementById("imagen_silla_2").src = i;
}

function cambiarImagenSilla3(i) {
    document.getElementById("imagen_silla_3").src = i;
}

function cambiarImagenMesa1(i) {
    document.getElementById("imagen_mesa_1").src = i;
}

function cambiarImagenMesa2(i) {
    document.getElementById("imagen_mesa_2").src = i;
}

function cambiarImagenMesa3(i) {
    document.getElementById("imagen_mesa_3").src = i;
}

function cambiarImagenOrganizador1(i) {
    document.getElementById("imagen_organizador_1").src = i;
}

function cambiarImagenOrganizador2(i) {
    document.getElementById("imagen_organizador_2").src = i;
}

function cambiarImagenOrganizador3(i) {
    document.getElementById("imagen_organizador_3").src = i;
}

function cambiarImagenArmario1(i) {
    document.getElementById("imagen_armario_1").src = i;
}

function cambiarImagenArmario2(i) {
    document.getElementById("imagen_armario_2").src = i;
}

function cambiarImagenArmario3(i) {
    document.getElementById("imagen_armario_3").src = i;
}

function agregarProductoCarrito() {
    const div_contenedor = document.getElementById("contenedor-carrito");
    div_contenedor.innerHTML = ''; 
    carrito.forEach(function(producto) {
        total = 0;
        carrito.forEach(producto => {
            total += producto.precio;
        });

        const divContenedor2 = document.createElement("div");
        divContenedor2.classList.add("row", "border", "text-decoration-underline", "rounded", "shadow", "p-3", "mb-5", "bg-body-tertiary", "rounded");

        const divProducto = document.createElement("div");
        divProducto.classList.add("row", "justify-content-between", "text-center");

        const divProducto1 = document.createElement("div");
        divProducto1.classList.add("row", "justify-content-between", "text-center");

        const divNombre = document.createElement("div");
        const h6Nombre = document.createElement("h5");
        divNombre.classList.add("col-4", "fw-semibold" ,"text-decoration-underline");
        h6Nombre.textContent = producto.nombre;
        divNombre.appendChild(h6Nombre);

        const divPrecio = document.createElement("div");
        const pPrecio = document.createElement("p");
        divPrecio.classList.add("col-4" ,"fst-italic");
        pPrecio.textContent = `Precio: ${producto.precio}`;
        divPrecio.appendChild(pPrecio);

        const divCantidad = document.createElement("div");
        const pCantidad = document.createElement("p");
        divCantidad.classList.add("col-4");
        pCantidad.textContent = `Cantidad: ${producto.cantidad}`;
        divCantidad.appendChild(pCantidad);

        const divColor = document.createElement("div");
        const pColor = document.createElement("p");
        divColor.classList.add("col-4");
        pColor.textContent = `Color: ${producto.color}`;
        divColor.appendChild(pColor);


        divProducto.appendChild(divNombre);
        divProducto.appendChild(divPrecio);
        divProducto1.appendChild(divCantidad);
        divProducto1.appendChild(divColor);

        divContenedor2.appendChild(divProducto);
        divContenedor2.appendChild(divProducto1);

        div_contenedor.appendChild(divContenedor2);

    });
    let precioTotalBitcoin=(total/precioUsd)/precioBitcoin;
    let precioTotalTron=(total/precioUsd)/precioTron;

    const divPreciosTotales = document.createElement("div");

    const divPrecioArs = document.createElement("div");
    const pPrecioArs = document.createElement("p");
    divPrecioArs.classList.add("col-12");
    pPrecioArs.textContent = `Total: ARS ${total}`;
    divPrecioArs.appendChild(pPrecioArs);

    const divPrecioBitcoin = document.createElement("div");
    const pPrecioBitcoin = document.createElement("p");
    divPrecioBitcoin.classList.add("col-12");
    pPrecioBitcoin.textContent = `Total: BTC ${precioTotalBitcoin}`;
    divPrecioArs.appendChild(pPrecioBitcoin);

    const divPrecioTron = document.createElement("div");
    const pPrecioTron = document.createElement("p");
    divPrecioTron.classList.add("col-12");
    pPrecioTron.textContent = `Total: TRX ${precioTotalTron}`;
    divPrecioArs.appendChild(pPrecioTron);

    divPreciosTotales.appendChild(divPrecioArs);
    divPreciosTotales.appendChild(divPrecioBitcoin);
    divPreciosTotales.appendChild(divPrecioTron);

    div_contenedor.appendChild(divPreciosTotales);

}

function agregarProducto(nombre, color, cantidad, precio){
    const producto = {
        nombre: nombre,
        color: color,
        cantidad: cantidad,
        precio: precio*cantidad
    }

    carrito.push(producto);
    agregarProductoCarrito();
}


pedido_silla_1.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_silla_1 = document.getElementById('cantidad_silla_1').value;
    let color_silla_1 = document.getElementById('color_silla_1').value;

    agregarProducto("Silla de comedor con base tapizada", color_silla_1, cantidad_silla_1, 12500);

})
pedido_silla_2.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_silla_2 = document.getElementById('cantidad_silla_2').value;
    let color_silla_2 = document.getElementById('color_silla_2').value;

    agregarProducto("Silla de comedor Eames", color_silla_2, cantidad_silla_2, 11999);

})
pedido_silla_3.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_silla_3 = document.getElementById('cantidad_silla_3').value;
    let color_silla_3 = document.getElementById('color_silla_3').value;

    agregarProducto("Silla de madera tapizada con tela", color_silla_3, cantidad_silla_3, 16100);

})
pedido_mesa_1.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_mesa_1 = document.getElementById('cantidad_mesa_1').value;
    let color_mesa_1 = document.getElementById('color_mesa_1').value;

    agregarProducto("Mesa estilo contemporaneo", color_mesa_1, cantidad_mesa_1, 53500);

})
pedido_mesa_2.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_mesa_2 = document.getElementById('cantidad_mesa_2').value;
    let color_mesa_2 = document.getElementById('color_mesa_2').value;

    agregarProducto("Mesa GreenForest", color_mesa_2, cantidad_mesa_2, 72840);

})
pedido_mesa_3.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_mesa_3 = document.getElementById('cantidad_mesa_3').value;
    let color_mesa_3 = document.getElementById('color_mesa_3').value;

    agregarProducto("Mesa Buckland", color_mesa_3, cantidad_mesa_3, 84300);

})
pedido_armario_1.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_armario_1 = document.getElementById('cantidad_armario_1').value;
    let color_armario_1 = document.getElementById('color_armario_1').value;

    agregarProducto("Almacenador de zapatos", color_armario_1, cantidad_armario_1, 105000);

})
pedido_armario_2.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_armario_2 = document.getElementById('cantidad_armario_2').value;
    let color_armario_2 = document.getElementById('color_armario_2').value;

    agregarProducto("Almacenador despensa alta", color_armario_2, cantidad_armario_2, 145000);

})
pedido_armario_3.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_armario_3 = document.getElementById('cantidad_armario_3').value;
    let color_armario_3 = document.getElementById('color_armario_3').value;

    agregarProducto("Armario Camberly", color_armario_3, cantidad_armario_3, 125500);

})
pedido_organizador_1.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_organizador_1 = document.getElementById('cantidad_organizador_1').value;
    let color_organizador_1 = document.getElementById('color_organizador_1').value;

    agregarProducto("Cajon multiusos apilable", color_organizador_1, cantidad_organizador_1, 28500);

})
pedido_organizador_2.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_organizador_2 = document.getElementById('cantidad_organizador_2').value;
    let color_organizador_2 = document.getElementById('color_organizador_2').value;

    agregarProducto("Comoda vertical", color_organizador_2, cantidad_organizador_2, 45600);

})
pedido_organizador_3.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_organizador_3 = document.getElementById('cantidad_organizador_3').value;
    let color_organizador_3 = document.getElementById('color_organizador_3').value;

    agregarProducto("Organizador de especias", color_organizador_3, cantidad_organizador_3, 64800);

})

