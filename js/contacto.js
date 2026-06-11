const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const privacyCheck = document.getElementById('privacyCheck');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!privacyCheck.checked) {
    formMessage.textContent = 'Debes aceptar la política de privacidad para enviar el formulario.';
    return;
  }

  formMessage.textContent = 'Gracias por contactar con nosotros!';
  contactForm.reset();
});


