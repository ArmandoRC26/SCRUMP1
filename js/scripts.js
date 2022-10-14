//QuerySelector
const heading = document.querySelector('.contenido-hero h2');
//console.log(heading);
heading.textContent = 'Nuevo encabezado';
heading.classList.add('nueva-clase');;
console.log(heading)

//querySelectorAll
const enlaces = document.querySelectorAll('a');
console.log(enlaces);


//enlaces[0].textContent = 'MOOC';
enlaces[0].href = 'https://mooc.tecnm.mx/';
enlaces[0].classList.add('nuevaclase');

//getElementById
const encabezadoMain = document.getElementById('titulo');
console.log(encabezadoMain);

//Crear un elemento html desde javascript
const nuevoEnlace = document.createElement('A');

//agregar un href
nuevoEnlace.href = 'https://mooc.tecnm.mx/';

//agregar el texto 
nuevoEnlace.textContent = 'Enlace nuevo';

//agregar una clase
nuevoEnlace.classList.add('nueva-clase');

//agregar el nuevo enlace al nav del document
const navegacion = document.querySelector('.navegacion-principal');
navegacion.appendChild(nuevoEnlace);

//Eventos 
console.log(1);

window.addEventListener('load', function() {
    console.log(2);

});

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log(4);
});


console.log(5);

//Scroll
/* window.onscroll = function () {
    console.log('Scrolling');
} */

//Verificar eventos de clic
/* const bntEnviar = document.querySelector('.w-sm-100');
bntEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    console.log(evento.target);
}); */

// Evento con el teclado

const datos = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');


nombre.addEventListener('input', mostrarTexto);
telefono.addEventListener('input', mostrarTexto);
correo.addEventListener('input', mostrarTexto);
mensaje.addEventListener('input', mostrarTexto);

function mostrarTexto(evt) {
    console.log(evt.target.value);
    datos[evt.target.id] = evt.target.value;
    console.log(datos);
}

// Evento submit

const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(evt) {
    evt.preventDefault();
    //console.log('Enviando el fomrulario');
    //validar el formulario
    const { nombrel, telefono, correo, mensaje } = datos;
    if (nombre == '' || telefono == '' || correo == '' || mensaje == '') {
        //   console.log('Todos los campos son obligatorio');
        //mostrarError('Todos los campos son obligatorios');
        mostrarAlerta('Todos los campos son obligatorios', true);

        return; //corta la ejecucion del codigo


    }
    //  mostrarMensaje('Datos enviados correctamente');
    mostrarAlerta('Datos enviados correctamente');
});
//mostrar mensaje  de validadcion de datos 
function mostrarMensaje(mensaje) {
    // console.log(mensaje);

    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('correcto');


    formulario.appendChild(error);
    setTimeout(() => {
        error.remove();
    }, 5000);
}

//mostrar mensaje de error en validacion

function mostrarError(mensaje) {
    console.log(mensaje);

    const error = document.createElement('p');
    error.textContent = mensaje;
    error.classList.add('error');


    formulario.appendChild(error);
    setTimeout(() => {
        error.remove();
    }, 5000);

}
//mostrar mensaje de error en validacion

function mostrarAlerta(mensaje, error = null) {
    // console.log(mensaje);

    const alerta = document.createElement('p');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    setTimeout(() => {
        error.remove();
    }, 5000);

}