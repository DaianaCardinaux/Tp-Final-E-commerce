const carrito = [];
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
    const contenedor = document.getElementById("contenedor-carrito");
    contenedor.innerHTML = ''; 
    carrito.forEach(function(producto) {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto-en-carrito');
        divProducto.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Cantidad: ${producto.cantidad}</p>
            <p>Color: ${producto.color}</p>
            <p>Color: ${producto.precio}</p>
        `;

        contenedor.appendChild(divProducto);

    });
}

function agregarProducto(nombre, color, cantidad, precio){
    const producto = {
        nombre: nombre,
        color: color,
        cantidad: cantidad,
        precio: precio*cantidad
    }

    carrito.push(producto);
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

    agregarProducto("Mesa estilo contemporaneo", color_mesa_1, cantidad_cantidad_1, 53500);

})
pedido_mesa_2.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_mesa_2 = document.getElementById('cantidad_mesa_2').value;
    let color_mesa_2 = document.getElementById('color_mesa_2').value;

    agregarProducto("Mesa GreenForest", color_mesa_2, cantidad_cantidad_2, 72840);

})
pedido_mesa_3.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_mesa_3 = document.getElementById('cantidad_mesa_3').value;
    let color_mesa_3 = document.getElementById('color_mesa_3').value;

    agregarProducto("Mesa Buckland", color_mesa_3, cantidad_cantidad_3, 84300);

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

