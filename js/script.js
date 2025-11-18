document.addEventListener('DOMContentLoaded', () => {

    // 1. Detección de Scroll para Animación
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Si el elemento es visible
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Dejamos de observar una vez animado
                observer.unobserve(entry.target);
            }
        });
    }, {
        // La animación se dispara cuando el 10% del elemento es visible
        threshold: 0.1
    });

    // Observar todos los elementos con la clase 'animate-on-scroll'
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });


    // 2. Transición del Navbar (Cambio de color al hacer scroll)
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 56) { // 56px es una altura estándar
            nav.classList.add('navbar-scrolled');
            // nav.classList.remove('shadow-sm'); // La sombra se maneja mejor en navbar-scrolled
        } else {
            nav.classList.remove('navbar-scrolled');
            // nav.classList.add('shadow-sm');
        }
    });

    // 3. Manejo simple del Formulario de Contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) { // Asegúrate de que el formulario exista antes de intentar adjuntar un evento
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto. (Funcionalidad de envío real requiere un backend)');
            contactForm.reset();
        });
    }
});