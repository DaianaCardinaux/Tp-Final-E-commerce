let formulario_contacto = document.getElementById("formulario-contacto");

formulario_contacto.addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre_c = document.getElementById("nombre_contacto").value;
    let apellido_c = document.getElementById("apellido_contacto").value;
    let email_c = document.getElementById("email_contacto").value;
    let numero_c = document.getElementById("numero_contacto").value;
    let mensaje_c = document.getElementById("mensaje_contacto").value;


    let contacto = {
        nombre: nombre_c,
        apellido: apellido_c,
        email: email_c,
        numero: numero_c,
        mensaje: mensaje_c
    };

    console.log(contacto);
})