
//Formulario de Reclamos
let formulario_reclamo = document.getElementById("formulario_reclamos");

formulario_reclamo.addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre_r = document.getElementById('nombre_reclamo').value;
    let apellido_r = document.getElementById('apellido_reclamo').value;
    let email_r = document.getElementById("email_reclamo").value;
    let numero_r = document.getElementById("numero_reclamo").value;

    let reclamo = {
        nombre: nombre_r,
        apellido: apellido_r,
        email: email_r,
        numero: numero_r
    };

    console.log(reclamo);

})

//Formulario de Cancelacion
let formulario_cancelacion = document.getElementById("formulario_cancelacion");

formulario_cancelacion.addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre_r = document.getElementById('nombre_cancelacion').value;
    let apellido_r = document.getElementById('apellido_cancelacion').value;
    let email_r = document.getElementById("email_cancelacion").value;
    let numero_r = document.getElementById("numero_cancelacion").value;
    let numerop_r = document.getElementById("numero_reclamo_cancelacion").value;
    let comentario_r = document.getElementById("comentario_cancelacion").value;


    let cancelacion = {
        nombre: nombre_r,
        apellido: apellido_r,
        email: email_r,
        numero: numero_r,
        numero_pedido: numerop_r,
        comentario: comentario_r
    };

    console.log(cancelacion);

})