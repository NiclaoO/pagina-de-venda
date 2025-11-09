// CTA Flutuante - Aparece após scroll
document.addEventListener('DOMContentLoaded', function() {
    const floatingCta = document.getElementById('floatingCta');
    let lastScrollTop = 0;
    const scrollThreshold = 300; // Aparece após 300px de scroll

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Mostra o CTA após scroll para baixo
        if (scrollTop > scrollThreshold && scrollTop > lastScrollTop) {
            floatingCta.classList.add('visible');
        } else if (scrollTop < 100) {
            // Esconde quando está no topo
            floatingCta.classList.remove('visible');
        }
        
        lastScrollTop = scrollTop;
    });

    // Smooth scroll para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#comprar') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Toggle FAQ
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Fecha todos os outros FAQs
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    // Toggle do FAQ atual
    if (isActive) {
        faqItem.classList.remove('active');
    } else {
        faqItem.classList.add('active');
    }
}

// Função para lidar com a compra
function handlePurchase() {
    // Aqui você pode adicionar a lógica de redirecionamento para o checkout
    // Por exemplo: window.location.href = 'https://seu-checkout.com';
    
    // Por enquanto, apenas um alerta
    alert('Redirecionando para o checkout...\n\nEm produção, aqui você adicionaria o link do seu checkout.');
    
    // Exemplo de implementação:
    // window.location.href = 'https://seu-checkout.com/comprar';
}

// Animação de entrada para elementos ao fazer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplica animação aos cards
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.offer-card, .testimonial-card, .benefit-item, .faq-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Contador de urgência (opcional)
function createUrgencyTimer() {
    // Você pode adicionar um contador regressivo aqui se necessário
    // Por exemplo, para criar sensação de urgência
}

// Analytics tracking (opcional)
function trackEvent(eventName, eventData) {
    // Aqui você pode adicionar tracking do Google Analytics, Facebook Pixel, etc.
    // Exemplo:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', eventName, eventData);
    // }
}

// Rastreia cliques no CTA
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.btn-cta-primary, .btn-cta-floating');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            trackEvent('cta_click', {
                button_text: this.textContent.trim(),
                button_location: this.classList.contains('btn-cta-floating') ? 'floating' : 'main'
            });
        });
    });
});

// Carrossel de Custo-Benefício
let currentSlideIndex = 0;
let slides = [];
let dots = [];

function showSlide(index) {
    // Remove active de todos os slides e dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Adiciona active no slide e dot atual
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0;
    } else if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1;
    }
    
    showSlide(currentSlideIndex);
}

function currentSlide(index) {
    currentSlideIndex = index - 1;
    showSlide(currentSlideIndex);
}

// Auto-play do carrossel (opcional)
document.addEventListener('DOMContentLoaded', function() {
    // Inicializa as variáveis
    slides = document.querySelectorAll('.carousel-slide');
    dots = document.querySelectorAll('.carousel-dots .dot');
    
    // Inicializa o primeiro slide
    if (slides.length > 0) {
        showSlide(0);
        
        // Auto-play a cada 5 segundos
        setInterval(function() {
            changeSlide(1);
        }, 5000);
    }
});

