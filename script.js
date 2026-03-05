// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Navigation Scroll Effect
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Sections for navigation highlighting
const sections = document.querySelectorAll('section[id]');

// Smooth Scrolling - Simple and Clean
function smoothScrollToSection(targetSection) {
    const offsetTop = targetSection.offsetTop - 70;
    smoothScrollToTop(offsetTop);
}

// Handle navigation links - smooth scroll only
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            smoothScrollToSection(targetSection);
        }
    });
});

// Smooth scrolling for footer links
document.addEventListener('DOMContentLoaded', () => {
    const footerLinks = document.querySelectorAll('.footer-links a[href^="#"]');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                smoothScrollToSection(targetSection);
            }
        });
    });
});

// Handle hero buttons with smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    const getStartedBtn = document.querySelector('a[href="#contact"].btn-primary');
    const ourServicesBtn = document.querySelector('a[href="#services"].btn-secondary');
    
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector('#contact');
            if (targetSection) {
                smoothScrollToSection(targetSection);
            }
        });
    }
    
    if (ourServicesBtn) {
        ourServicesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector('#services');
            if (targetSection) {
                smoothScrollToSection(targetSection);
            }
        });
    }
});

// Form Submission Handler
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Create mailto link
    const subject = encodeURIComponent(`New Contact Form Submission - ${data.service || 'General Inquiry'}`);
    const body = encodeURIComponent(`
Name: ${data.name}
Company: ${data.company || 'N/A'}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Service Interest: ${data.service || 'N/A'}

Message:
${data.message}
    `);
    
    const mailtoLink = `mailto:PrushLogisticsGroup@Outlook.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Thank you! Your email client should open shortly.', 'success');
    
    // Reset form
    contactForm.reset();
});

// Notification Function
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : '#3B82F6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 300);
    }, 5000);
}

// Intersection Observer for Scroll Animations with Blur/Zoom Effect
const sectionObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('in-view')) {
            // Add animation classes for smooth zoom and fade in
            entry.target.classList.add('scroll-in', 'in-view');
            // Prevent re-triggering
            sectionObserver.unobserve(entry.target);
        } else if (!entry.isIntersecting && entry.target.id !== 'home') {
            // Remove in-view class when scrolling past (for re-animation if needed)
            // Keep home section always visible
        }
    });
}, sectionObserverOptions);

// Observe all sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const allSections = document.querySelectorAll('section[id]');
    
    allSections.forEach(section => {
        // Hero section always visible
        if (section.id === 'home') {
            section.classList.add('in-view', 'scroll-in');
        } else {
            // Other sections start blurred and zoomed out
            // CSS handles the initial state
        }
        sectionObserver.observe(section);
    });
    
    // Animate service cards and other elements with better performance
    const animatedElements = document.querySelectorAll('.service-card-modern, .service-feature, .about-content, .contact-content, .testimonial-card');
    
    const elementObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.willChange = 'auto';
            }
        });
    }, { 
        threshold: 0.1, 
        rootMargin: '0px 0px -30px 0px' 
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        el.style.willChange = 'opacity, transform';
        elementObserver.observe(el);
    });
});

// Active Navigation Link Highlighting
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Testimonials Carousel
const testimonialsCarousel = document.querySelector('.testimonials-carousel');
const testimonialsTrack = document.getElementById('testimonialsTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselDots = document.getElementById('carouselDots');
const testimonialCards = document.querySelectorAll('.testimonial-card');

let currentTestimonial = 0;
let autoSlideInterval;

// Create dots
if (testimonialCards.length > 0 && carouselDots) {
    testimonialCards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonial(index));
        carouselDots.appendChild(dot);
    });
}

const dots = document.querySelectorAll('.carousel-dot');

function updateCarousel() {
    if (!testimonialsTrack) return;
    
    // Use percentage for smooth transitions
    const translateX = -currentTestimonial * 100;
    testimonialsTrack.style.transform = `translateX(${translateX}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    updateCarousel();
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    updateCarousel();
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateCarousel();
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextTestimonial, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        prevTestimonial();
        resetAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
        nextTestimonial();
        resetAutoSlide();
    });
    
    // Start auto-slide
    startAutoSlide();
    
    // Pause on hover
    const carousel = document.querySelector('.testimonials-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        carousel.addEventListener('mouseleave', startAutoSlide);
    }
}

// Add active class styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Scroll to Top Functionality
const scrollToTopBtn = document.getElementById('scrollToTop');
const logoLink = document.getElementById('logoLink');

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Smooth scroll function with easing (can scroll to any position)
function smoothScrollToTop(targetPosition = 0) {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    const duration = 800; // milliseconds
    const distance = targetPosition - startPosition;
    
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    function animateScroll(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }
    
    requestAnimationFrame(animateScroll);
}

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
    smoothScrollToTop(0);
});

// Scroll to top when logo is clicked
if (logoLink) {
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScrollToTop(0);
    });
}
