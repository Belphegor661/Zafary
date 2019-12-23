const correo = window.document.querySelector('#correo');
const password = window.document.querySelector('#password');
const boton = window.document.querySelector('#boton');

boton.addEventListener('click', MostrarDatos);

function MostrarDatos() {
    const correoValue = correo.value;
    const passwordValue = password.value;

    if (correoValue !== '') {
        console.log('correo: ' + correo.value);
        console.log('password: ' + password.value);
        correo.value = "";
        password.value = "";
        correo.focus();

        if (correoValue == "ejemplp@gmail.com" && passwordValue == '123456') {
            console.log('Iniciando Sesion...');
        } else {
            console.log('Email y/o contraseña incorrectos');
        }
    } else {
        console.log('no has escrito nada')
    }
}
