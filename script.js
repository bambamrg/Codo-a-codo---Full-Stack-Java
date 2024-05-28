const formulario = document.getElementById('iniciar-sesion').querySelector('form');
const campoUsuario = document.getElementById('usuario');
const campoContrasena = document.getElementById('contrasena');
const mensajeError = document.querySelector('.error');

formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir el envío del formulario

  const usuario = campoUsuario.value.trim();
  const contrasena = campoContrasena.value.trim();

  if (usuario === '' || contrasena === '') {
    mensajeError.hidden = false; // Mostrar mensaje de error
    return;
  }

  
});