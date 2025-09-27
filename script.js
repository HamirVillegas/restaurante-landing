document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();
  let policy = document.getElementById("policy").checked;
  let formMessage = document.getElementById("formMessage");

  // Validaciones
  if (name.length < 2) {
    formMessage.textContent = "El nombre debe tener al menos 2 caracteres.";
    formMessage.style.color = "red";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Ingrese un correo válido.";
    formMessage.style.color = "red";
    return;
  }

  if (phone && !/^[0-9]{7,15}$/.test(phone)) {
    formMessage.textContent = "El teléfono debe tener entre 7 y 15 dígitos.";
    formMessage.style.color = "red";
    return;
  }

  if (message.length < 20) {
    formMessage.textContent = "El mensaje debe tener al menos 20 caracteres.";
    formMessage.style.color = "red";
    return;
  }

  if (!policy) {
    formMessage.textContent = "Debe aceptar la política de privacidad.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "¡Formulario enviado correctamente!";
  formMessage.style.color = "green";

  document.getElementById("contactForm").reset();
});
