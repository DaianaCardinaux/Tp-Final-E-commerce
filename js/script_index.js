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

pedido_silla_1.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_silla_1 = document.getElementById('cantidad_silla_1').value;
    let color_silla_1 = document.getElementById('color_silla_1').value;

})
pedido_silla_2.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_silla_2 = document.getElementById('cantidad_silla_2').value;
    let color_silla_2 = document.getElementById('color_silla_2').value;

})
pedido_silla_3.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_silla_3 = document.getElementById('cantidad_silla_3').value;
    let color_silla_3 = document.getElementById('color_silla_3').value;

})
pedido_mesa_1.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_mesa_1 = document.getElementById('cantidad_mesa_1').value;
    let color_mesa_1 = document.getElementById('color_mesa_1').value;

})
pedido_mesa_2.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_mesa_2 = document.getElementById('cantidad_mesa_2').value;
    let color_mesa_2 = document.getElementById('color_mesa_2').value;

})
pedido_mesa_3.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_mesa_3 = document.getElementById('cantidad_mesa_3').value;
    let color_mesa_3 = document.getElementById('color_mesa_3').value;

})
pedido_armario_1.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_armario_1 = document.getElementById('cantidad_armario_1').value;
    let color_armario_1 = document.getElementById('color_armario_1').value;

})
pedido_armario_2.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_armario_2 = document.getElementById('cantidad_armario_2').value;
    let color_armario_2 = document.getElementById('color_armario_2').value;

})
pedido_armario_3.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_armario_3 = document.getElementById('cantidad_armario_3').value;
    let color_armario_3 = document.getElementById('color_armario_3').value;

})
pedido_organizador_1.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_organizador_1 = document.getElementById('cantidad_organizador_1').value;
    let color_organizador_1 = document.getElementById('color_organizador_1').value;

})
pedido_organizador_2.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_organizador_2 = document.getElementById('cantidad_organizador_2').value;
    let color_organizador_2 = document.getElementById('color_organizador_2').value;

})
pedido_organizador_3.addEventListener('submit', function(event) {
    event.preventDefault();
    let cantidad_organizador_3 = document.getElementById('cantidad_organizador_3').value;
    let color_organizador_3 = document.getElementById('color_organizador_3').value;

})