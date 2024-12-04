// Animation d'apparition des sections avec effet de défilement
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// Effet de particules flottantes dans le header
const createParticle = () => {
    const particle = document.createElement('span');
    const size = Math.random() * 10 + 5;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;

    particle.classList.add('particle');
    document.querySelector('header').appendChild(particle);

    // Suppression après animation
    particle.addEventListener('animationend', () => particle.remove());
};

// Générer des particules toutes les 300ms
setInterval(createParticle, 300);

// Effet de clic sur les images de la galerie
document.querySelectorAll('.gallery-container img').forEach((img) => {
    img.addEventListener('click', () => {
        img.classList.add('clicked');
        setTimeout(() => img.classList.remove('clicked'), 500); // Retirer l'effet après 500ms
    });
});

// Animation sur le bouton "contact"
const contactButton = document.getElementById('contact-btn');
contactButton.addEventListener('click', () => {
    const colors = ['#ff758c', '#ff7eb3', '#1e3c72', '#2a5298'];
    let i = 0;

    const interval = setInterval(() => {
        contactButton.style.background = colors[i % colors.length];
        i++;
        if (i > 7) clearInterval(interval); // Stop après 8 changements
    }, 200);

    alert('Merci pour votre intérêt ! Nous vous répondrons bientôt. 😊');
});
