document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    
    window.location.href = 'mailto:itzelaviles2709@gmail.com?subject=Contacto&body=Nombre: ' + nombre + '%0D%0ACorreo Electrónico: ' + email + '%0D%0AMensaje: ' + mensaje;
});