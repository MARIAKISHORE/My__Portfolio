/* ============================================
   SMOOTH SCROLLING & NAVIGATION
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSmoothScroll();
    initScrollAnimations();
    initContactForm();
    initHamburgerMenu();
    initParallaxEffect();
});

// Navigation Active State
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ============================================
   SCROLL ANIMATIONS
   ============================================ */

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('[class*="animate"]').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/* ============================================
   CONTACT FORM HANDLING
   ============================================ */

function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(form);
            
            // Add visual feedback
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '✓ Message Sent!';
            submitBtn.style.background = 'linear-gradient(135deg, #10b981, #06b6d4)';
            
            // Reset form
            form.reset();
            
            // Restore button after 2 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.background = '';
            }, 2000);
        });
    }
}

/* ============================================
   HAMBURGER MENU
   ============================================ */

function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

/* ============================================
   PARALLAX EFFECT
   ============================================ */

function initParallaxEffect() {
    const hero = document.querySelector('.hero');
    
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            const parallaxElements = hero.querySelectorAll('[class*="floating"]');
            
            parallaxElements.forEach(el => {
                el.style.transform = `translateY(${scrollPosition * 0.5}px)`;
            });
        });
    }
}

/* ============================================
   COUNTER ANIMATION (For Stats)
   ============================================ */

function animateCounters() {
    const stats = document.querySelectorAll('.stat-item h3');
    
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.animated) {
                const target = entry.target;
                const finalValue = parseInt(target.innerText);
                let currentValue = 0;
                const increment = Math.ceil(finalValue / 30);
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        target.innerText = finalValue + (finalValue === 3 ? '+' : finalValue === 25 ? '+' : '%');
                        clearInterval(counter);
                    } else {
                        target.innerText = currentValue + '+';
                    }
                }, 30);
                
                target.animated = true;
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
}

// Call counter animation when stats are in view
document.addEventListener('DOMContentLoaded', animateCounters);

/* ============================================
   TYPING ANIMATION
   ============================================ */

function typeWriter(element, text, speed = 50) {
    let index = 0;
    element.innerText = '';
    
    function type() {
        if (index < text.length) {
            element.innerText += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

/* ============================================
   MOUSE FOLLOW EFFECT
   ============================================ */

document.addEventListener('mousemove', (e) => {
    const floatingCard = document.querySelector('.floating-card');
    if (floatingCard) {
        const rect = floatingCard.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 100;
        
        if (distance < maxDistance) {
            floatingCard.style.transform = `translateY(-20px) rotate(${x * 0.02}deg)`;
        }
    }
});

/* ============================================
   SCROLL PROGRESS BAR
   ============================================ */

function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #ec4899);
        z-index: 999;
        width: 0%;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = scrollTop / docHeight;
        progressBar.style.width = scrolled * 100 + '%';
    });
}

initScrollProgress();

/* ============================================
   RIPPLE EFFECT FOR BUTTONS
   ============================================ */

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            left: ${x}px;
            top: ${y}px;
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        `;

        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        from {
            transform: scale(0);
            opacity: 1;
        }
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ============================================
   SKILL TAG INTERACTIONS
   ============================================ */

document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) rotate(2deg)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

/* ============================================
   ACTIVE NAV LINK STYLING
   ============================================ */

const style2 = document.createElement('style');
style2.textContent = `
    .nav-link.active {
        color: #6366f1;
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style2);

/* ============================================
   DARK MODE TOGGLE (Optional Feature)
   ============================================ */

function initDarkModeToggle() {
    const darkModeBtn = document.createElement('button');
    darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    darkModeBtn.className = 'dark-mode-toggle';
    darkModeBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        border: none;
        color: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
        transition: all 0.3s ease;
        z-index: 999;
    `;

    darkModeBtn.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 8px 30px rgba(99, 102, 241, 0.6)';
    });

    darkModeBtn.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 5px 20px rgba(99, 102, 241, 0.4)';
    });

    // Only add if you want dark mode toggle
    // document.body.appendChild(darkModeBtn);
}

// Uncomment to enable dark mode toggle
// initDarkModeToggle();

/* ============================================
   LAZY LOADING IMAGES
   ============================================ */

function initLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

initLazyLoading();

/* ============================================
   PERFORMANCE OPTIMIZATION
   ============================================ */

// Debounce scroll events for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for frequent events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ============================================
   PAGE LOAD ANIMATION
   ============================================ */

window.addEventListener('load', () => {
    document.body.style.animation = 'fadeIn 0.6s ease-in';
    
    // Stagger animations for multiple elements
    const elements = document.querySelectorAll('.skill-category, .project-card, .timeline-item');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(fadeInStyle);
