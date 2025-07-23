// --- Cuenta Regresiva ---
// Establece la fecha y hora de la boda
// Formato: Mes Día, Año Hora:Minutos:Segundos
// Ejemplo: "Jul 20, 2025 15:00:00" para 3 PM CST (Hora actual en Puebla)
const weddingDate = new Date("Feb 14, 2026 15:00:00").getTime(); // Cambia esta fecha y hora

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calcular tiempos para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Mostrar los resultados en los elementos correspondientes
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Si la cuenta regresiva termina, mostrar un mensaje
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "<p>¡El gran día ha llegado!</p>";
    }
}, 1000); // Actualizar cada segundo

// --- RSVP Formulario (simulación) ---
const rsvpForm = document.getElementById('rsvpForm');
const rsvpMessage = document.getElementById('rsvpMessage');

rsvpForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const fullName = document.getElementById('fullName').value;
    const guests = document.getElementById('guests').value;
    const message = document.getElementById('message').value;

    // Aquí normalmente enviarías estos datos a un servidor (backend)
    // Usando fetch API, AJAX, o un servicio de formularios como Formspree, Netlify Forms, etc.
    // Para esta demostración, solo mostramos un mensaje de éxito.

    console.log("Confirmación recibida:");
    console.log("Nombre: " + fullName);
    console.log("Asistentes: " + guests);
    console.log("Mensaje: " + message);

    rsvpMessage.textContent = `¡Gracias, ${fullName}! Hemos recibido tu confirmación para ${guests} persona(s). ¡Nos vemos en la boda!`;
    rsvpMessage.style.backgroundColor = '#d4edda'; // Verde claro
    rsvpMessage.style.color = '#155724'; // Texto verde oscuro
    rsvpMessage.style.display = 'block'; // Mostrar el mensaje

    rsvpForm.reset(); // Limpiar el formulario
    // Opcional: Deshabilitar el formulario después del envío
    // rsvpForm.querySelectorAll('input, textarea, button').forEach(el => el.disabled = true);
});

// --- Desplazamiento Suave para la Navegación ---
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});