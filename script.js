// Preloader
window.addEventListener('load', function() {
    // Hide preloader after page loads
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        preloader.classList.add('fadeOut');
        
        // Enable scrolling on body
        document.body.style.overflow = '';
        
        // Trigger initial animations
        initAnimations();
    }, 1000);
});

// Prevent scrolling during preload
document.body.style.overflow = 'hidden';

// Fix for boxicons to ensure they display properly
document.addEventListener('DOMContentLoaded', function() {
    // Force boxicons to load properly
    const boxIcons = document.querySelectorAll('.bx');
    boxIcons.forEach(icon => {
        icon.style.fontFamily = 'boxicons';
    });
});

// Custom cursor
document.addEventListener('mousemove', function(e) {
    const cursor = document.querySelector('.cursor');
    const cursor2 = document.querySelector('.cursor2');
    
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    cursor2.style.left = e.clientX + 'px';
    cursor2.style.top = e.clientY + 'px';
});

// Expand cursor on hover over clickable elements
document.addEventListener('DOMContentLoaded', function() {
    const clickables = document.querySelectorAll('a, button, .btn, input, textarea');
    
    clickables.forEach(element => {
        element.addEventListener('mouseenter', function() {
            document.querySelector('.cursor').classList.add('expand');
        });
        
        element.addEventListener('mouseleave', function() {
            document.querySelector('.cursor').classList.remove('expand');
        });
    });
});

// Add active state to cursor on click
document.addEventListener('mousedown', function() {
    document.querySelector('.cursor2').style.transform = 'translate(-50%, -50%) scale(0.7)';
});

document.addEventListener('mouseup', function() {
    document.querySelector('.cursor2').style.transform = 'translate(-50%, -50%) scale(1)';
});

// Initialize animations
function initAnimations() {
    // Add animation to decoration elements
    const decorElements = document.querySelectorAll('.decoration-elem');
    decorElements.forEach((elem, index) => {
        setTimeout(() => {
            elem.style.opacity = '0.1';
            elem.style.transform = 'scale(1)';
        }, 300 * index);
    });

    // Animate about section text
    const aboutTexts = document.querySelectorAll('.animate-text');
    aboutTexts.forEach((text, index) => {
        text.style.animationDelay = `${0.3 + (index * 0.2)}s`;
    });
}

// Parallax effect for decoration elements
document.addEventListener('mousemove', function(e) {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    const decorElements = document.querySelectorAll('.decoration-elem');
    decorElements.forEach((elem, index) => {
        const speedFactor = 0.05 * (index + 1);
        elem.style.transform = `translate(${moveX * speedFactor}px, ${moveY * speedFactor}px)`;
    });
});

// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Read More functionality
document.querySelector('.read-more-button').addEventListener('click', function() {
    const readMoreContent = document.querySelector('.read-more');
    this.classList.toggle('active');
    
    // Add fade-in animation
    readMoreContent.style.opacity = '0';
    readMoreContent.style.display = 'block';
    
    setTimeout(() => {
        readMoreContent.style.transition = 'opacity 0.5s ease';
        readMoreContent.style.opacity = '1';
    }, 10);
    
    document.querySelector('.read-less-button').style.display = 'block';
});

document.querySelector('.read-less-button').addEventListener('click', function() {
    const readMoreContent = document.querySelector('.read-more');
    document.querySelector('.read-more-button').classList.remove('active');
    
    // Add fade-out animation
    readMoreContent.style.transition = 'opacity 0.5s ease';
    readMoreContent.style.opacity = '0';
    
    setTimeout(() => {
    readMoreContent.style.display = 'none';
    }, 500);
    
    this.style.display = 'none';
});

// Performance optimized scroll handling
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let header = document.querySelector('header');
let footer = document.querySelector('footer');
let ticking = false;
let lastScrollY = 0;

// Parallax effect for background elements
function parallaxEffect() {
    const scrollY = window.scrollY;
    
    // Subtle parallax effect for sections
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Only apply to visible sections
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const speed = 0.05;
            const yPos = -(scrollY * speed);
            if (section.style.backgroundImage) { // Only apply to sections with backgrounds
                section.style.backgroundPosition = `center ${yPos}px`;
            }
        }
    });
}

// Add subtle animations to elements when they come into view
function animateOnScroll() {
    const elements = document.querySelectorAll('.skills-content, .education-content .content, .about-img, .contact form, .project-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            if (!element.classList.contains('animated')) {
                element.classList.add('animated');
                element.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        }
    });

    // Special animation for about text
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150 && rect.bottom > 0) {
            const animateTexts = aboutSection.querySelectorAll('.animate-text');
            animateTexts.forEach((text, index) => {
                setTimeout(() => {
                    text.style.opacity = '1';
                }, 300 * (index + 1));
            });
        }
    }
}

// Optimize animations by marking completed ones
function markCompletedAnimations() {
    const animateElements = document.querySelectorAll('.animate');
    animateElements.forEach(el => {
        if (el.style.animationPlayState === 'completed' || 
            el.style.animationPlayState === 'finished') {
            el.classList.add('animation-complete');
        }
    });
}

// Debounce function to limit the rate at which a function can fire
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

// Update sections and animations
function updateSections() {
    const scrollY = window.scrollY;
    
    // Only process if scroll position has changed significantly
    if (Math.abs(scrollY - lastScrollY) < 5) return;
    lastScrollY = scrollY;
    
    // Sticky header with optimized check
    header.classList.toggle('sticky', scrollY > 100);
    
    // Process sections in view for animation
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        const inView = (rect.top <= window.innerHeight && rect.bottom >= 0);
        
        if (inView) {
            const id = sec.getAttribute('id');
            
            // Update active nav link
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`header nav a[href*=${id}]`);
            if (activeLink) activeLink.classList.add('active');
            
            // Add animation class only if not already animated
            if (!sec.classList.contains('show-animate')) {
                sec.classList.add('show-animate');
            }
        }
    });
    
    // Footer animation - only check when near bottom
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (Math.ceil(scrollY) >= scrollable - 100) {
        footer.classList.add('show-animate');
    } else {
        footer.classList.remove('show-animate');
    }
    
    // Apply parallax effect
    parallaxEffect();
    
    // Animate elements as they come into view
    animateOnScroll();
    
    // Mark completed animations to reduce active animations
    if (scrollY > 300) {
        markCompletedAnimations();
    }
    
    ticking = false;
}

// Add subtle hover effects to interactive elements
function addHoverEffects() {
    const interactiveElements = document.querySelectorAll('.btn, .home-sci a, .education-content .content, .project-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });
}

// Passive scroll listener for better performance
window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            updateSections();
            ticking = false;
        });
        ticking = true;
    }
}, { passive: true });

// Initial update
window.addEventListener('load', function() {
    updateSections();
    synchronizeSkillBars();
    addHoverEffects();
    initLoadingAnimation();
});

// Handle resize events with debounce
window.addEventListener('resize', debounce(function() {
    updateSections();
    synchronizeSkillBars();
}, 100), { passive: true });

// Clean up navbar state when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// Function to ensure skill bars match their displayed percentages
function synchronizeSkillBars() {
    // Get all skill progress elements
    const progressElements = document.querySelectorAll('.skills-content .progress');
    
    progressElements.forEach(progress => {
        // Get the percentage text from the span inside h3
        const percentText = progress.querySelector('h3 span').innerText;
        // Extract the number from the percentage text (remove the % sign)
        const percentValue = parseFloat(percentText.replace('%', '')) / 100;
        // Apply the exact percentage to the progress bar using transform
        const barSpan = progress.querySelector('.bar span');
        
        // Reset any animation that might be in progress
        barSpan.style.transition = 'none';
        barSpan.style.transform = 'scaleX(0)';
        
        setTimeout(() => {
            // Add animation
            barSpan.style.transition = 'transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)';
            barSpan.style.transform = `scaleX(${percentValue})`;
        }, 50);
    });
}

// Initialize loading animation for sections
function initLoadingAnimation() {
    document.body.classList.add('loaded');
    
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, 300 * index);
    });
    
    // Force show projects section after a delay to ensure animation works
    setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.classList.add('show-animate');
            
            // Make sure project cards are visible
            const projectCards = projectsSection.querySelectorAll('.project-card');
            projectCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 * (index + 1));
            });
        }
    }, 1500);
}

// Add CSS for new animations
function addStyleSheet() {
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        section {
            opacity: 0;
            transition: opacity 0.8s ease;
        }
        
        section.visible {
            opacity: 1;
        }
        
        .loaded .home-content {
            animation: fadeInUp 0.8s ease forwards;
        }

        /* Fix for boxicons */
        .bx:before {
            font-family: 'boxicons' !important;
            font-style: normal;
            font-weight: normal;
            font-variant: normal;
            display: inline-block;
        }
    `;
    document.head.appendChild(styleSheet);
}

// Call addStyleSheet on load
document.addEventListener('DOMContentLoaded', addStyleSheet);