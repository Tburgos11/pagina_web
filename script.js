document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form-contacto');
  const mensaje = document.getElementById('mensaje-exito');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      mensaje.classList.remove('oculto');
      form.reset();
      setTimeout(() => mensaje.classList.add('oculto'), 3000);
    });
  }
});