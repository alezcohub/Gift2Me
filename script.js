document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Previene que el formulario se envíe de la forma tradicional

    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Validamos que los campos no estén vacíos
    if (email && message) {
        document.getElementById('response').textContent = "Gracias por tu mensaje. Nos pondremos en contacto pronto.";
    } else {
        document.getElementById('response').textContent = "Por favor, llena todos los campos.";
    }
});
