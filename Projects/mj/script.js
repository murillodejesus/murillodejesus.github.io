// DOM Elements
const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form handling
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Simulate form submission
    console.log('Form submitted:', data);
    
    // Hide form and show success message
    contactForm.style.display = 'none';
    formSuccess.classList.add('show');
    
    // Reset form and show it again after 3 seconds
    setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = 'flex';
        formSuccess.classList.remove('show');
    }, 3000);
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Add initial styles for animation
    const animatedElements = document.querySelectorAll('.skill-card, .project, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add hover effects for project cards
document.querySelectorAll('.project-image').forEach(projectImage => {
    projectImage.addEventListener('mouseenter', () => {
        projectImage.style.transform = 'translateY(-5px)';
    });
    
    projectImage.addEventListener('mouseleave', () => {
        projectImage.style.transform = 'translateY(0)';
    });
});

// Typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 80);
    }
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #3b82f6 !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// APLICA O EFEITO DE CÍRCULOS INTERATIVOS NO BACKGROUND
document.addEventListener('DOMContentLoaded', () => {
    const backgroundInterativo = document.querySelector('.background-interativo');
    if (!backgroundInterativo) return;

    const tamanhoQuadrado = 25;
    const colunas = Math.floor(window.innerWidth / tamanhoQuadrado);
    const linhas = Math.floor(window.innerHeight / tamanhoQuadrado);
    const corDestaque = '#28AFB0';
    const corMonocromatica = '#1a1a1a';
    const tempoDesaparecimento = 700;

    // Cria os círculos e os adiciona ao container
    for (let i = 0; i < colunas * linhas; i++) {
        const quadrado = document.createElement('div');
        quadrado.classList.add('quadrado');
        quadrado.style.width = `${tamanhoQuadrado}px`;
        quadrado.style.height = `${tamanhoQuadrado}px`;
        backgroundInterativo.appendChild(quadrado);
    }

    const quadrados = document.querySelectorAll('.quadrado');

    quadrados.forEach(quadrado => {
        quadrado.addEventListener('mouseover', () => {
            quadrado.style.backgroundColor = corDestaque;
            quadrado.style.boxShadow = `0 0 15px 5px ${corDestaque}`;

            setTimeout(() => {
                quadrado.style.backgroundColor = corMonocromatica;
                quadrado.style.boxShadow = `0 0 0px ${corDestaque}`;
            }, tempoDesaparecimento);
        });
    });
});