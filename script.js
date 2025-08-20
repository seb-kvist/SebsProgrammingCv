document.addEventListener('DOMContentLoaded', () => {
    // Project data - Easy to add new projects!
    const projects = [
        {
            title: "Toshi-I-Verket",
            description: "Web-based auction platform developed with .NET and ASP.NET Core.",
            image: "img/ToshiIVerket.jpg",
            link: "https://github.com/seb-kvist/Toshi-i-verket",
            languages: ["csharp", "javascript", "html", "css"]
        },
        {
            title: "Auktion-App",
            description: "Practice on Core Identity for an auction-based website. Register as two different roles, each with different permissions.",
            image: "img/AuktionApp.jpg",
            link: "https://github.com/seb-kvist/auktioner-net",
            languages: ["csharp", "html", "css"]
        },
        {
            title: "A Night at the Museum",
            description: "A C#-console app where users navigate through a museum, exploring its rooms and interacting with the displayed artwork based on a predefined map.",
            image: "img/MuseumConsoleApp.jpg",
            link: "https://github.com/seb-kvist/MuseumConsoleApp",
            languages: ["csharp"]
        },
        {
            title: "SebsFabrik",
            description: "Another C# console app, allowing customers to place orders for different types of products",
            image: "img/SebsFabrik.jpg",
            link: "https://github.com/seb-kvist/SebsFabrik",
            languages: ["csharp"]
        },
        {
            title: "Cities & Countries",
            description: "Javascript app where users can click on a country to see a list of cities within it, view detailed information about a city, and mark cities they have visited.",
            image: "img/Cities and Countries.jpg",
            link: "https://github.com/seb-kvist/Cities-Countries",
            languages: ["javascript", "html", "css"]
        },
        {
            title: "Seb's Bank-E-Rhino",
            description: "Typescript project trying out balance, withdrawal and deposit functions.",
            image: "img/SebsBankERhino.jpg",
            link: "https://github.com/seb-kvist/SebsBank",
            languages: ["typescript", "html", "css", "javascript"]
        }
        // To add a new project, simply copy the format above and add it here:
        // {
        //     title: "Your Project Name",
        //     description: "Description of your project",
        //     image: "img/YourImage.jpg",
        //     link: "https://github.com/your-username/your-repo",
        //     languages: ["language1", "language2"]
        // }
    ];

    // Navigation elements
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const workGrid = document.querySelector('.work-grid');

    // FAQ functionality
    function setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');

        // Ensure the first item is open by default
        if (faqItems.length > 0 && !faqItems[0].classList.contains('active')) {
            faqItems[0].classList.add('active');
        }
        
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-header');
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        });
    }

    // Scroll arrow functionality
    function setupScrollArrow() {
        const scrollArrow = document.querySelector('.scroll-arrow');
        
        scrollArrow.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Smooth scrolling for navigation links
    function setupSmoothScrolling() {
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Intersection Observer for scroll animations
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const section = entry.target;
                
                if (entry.isIntersecting) {
                    // Section is entering viewport - add animate class
                    section.classList.add('animate');
                } else {
                    // Section is leaving viewport - remove animate class to reset animation
                    section.classList.remove('animate');
                }
            });
        }, observerOptions);

        // Observe all sections except home
        const sections = document.querySelectorAll('.section:not(#home)');
        sections.forEach(section => observer.observe(section));
    }

    // Parallax effect for floating elements
    function setupParallax() {
        const floatingElements = document.querySelectorAll('.floating-element');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            floatingElements.forEach(element => {
                const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos}px)`;
            });
        });
    }

    // Accessibility toggle
    function setupAccessibilityToggle() {
        const accessibilityToggle = document.getElementById('accessibility-toggle');
        
        accessibilityToggle.addEventListener('click', () => {
            document.body.classList.toggle('accessible-mode');
            
            // Update button text
            if (document.body.classList.contains('accessible-mode')) {
                accessibilityToggle.textContent = '☀️';
            } else {
                accessibilityToggle.textContent = '🌙';
            }
        });
    }

    // Add hover effects to project cards
    function setupProjectCardEffects() {
        const projectCards = document.querySelectorAll('.project-card');
        
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                // Add smooth transition for all cards
                projectCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    }
                });
            });
            
            card.addEventListener('mouseleave', () => {
                // Reset all cards when hover ends
                projectCards.forEach(otherCard => {
                    otherCard.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                });
            });
        });
    }

    // Add scroll-triggered animations for hero elements
    function setupHeroAnimations() {
        const heroElements = document.querySelectorAll('.hero-text, .hero-visual');
        const words = document.querySelectorAll('.word');
        
        heroElements.forEach((element, index) => {
            element.style.animationDelay = `${0.5 + index * 0.2}s`;
        });
        
        // Make words visible after initial animation with individual delays
        words.forEach((word, index) => {
            const delay = parseFloat(word.getAttribute('data-delay')) || 0;
            setTimeout(() => {
                word.classList.add('visible');
            }, 1500 + (delay * 1000));
        });
    }

    // Simple and reliable scroll-based loading
    function setupScrollBasedLoading() {
        console.log('Setting up scroll-based loading...');
        
        // Add scroll listener for content loading
        window.addEventListener('scroll', handleScrollLoading);
        
        // Initial check in case page is already scrolled
        handleScrollLoading();
    }

    // Handle content loading based on scroll position
    function handleScrollLoading() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Check work section
        const workSection = document.getElementById('work');
        if (workSection && !workSection.dataset.loaded) {
            const workRect = workSection.getBoundingClientRect();
            if (workRect.top < windowHeight * 0.8) { // Load when 80% of viewport height is reached
                console.log('Scroll trigger: Loading work section');
                loadWorkSection();
            }
        }
        
        // Check about section
        const aboutSection = document.getElementById('about');
        if (aboutSection && !aboutSection.dataset.loaded) {
            const aboutRect = aboutSection.getBoundingClientRect();
            if (aboutRect.top < windowHeight * 0.8) {
                console.log('Scroll trigger: Loading about section');
                loadAboutSection();
            }
        }
        
        // Check contact section
        const contactSection = document.getElementById('contact');
        if (contactSection && !contactSection.dataset.loaded) {
            const contactRect = contactSection.getBoundingClientRect();
            if (contactRect.top < windowHeight * 0.8) {
                console.log('Scroll trigger: Loading contact section');
                loadContactSection();
            }
        }
    }

    // Load work section with clean animations
    function loadWorkSection() {
        const workSection = document.getElementById('work');
        if (!workSection || workSection.dataset.loaded === 'true') return;
        
        console.log('Loading work section content...');
        const workGrid = workSection.querySelector('.work-grid');
        
        if (!workGrid) {
            console.error('Work grid not found!');
            return;
        }
        
        // Clear placeholder and add projects
        workGrid.innerHTML = '';
        
        projects.forEach((project, index) => {
            const item = document.createElement('div');
            item.className = 'project-item';
            
            // Start with animation-ready state
            item.style.opacity = '0';
            item.style.transform = 'translateY(60px) scale(0.9)';
            
            const languagesHTML = project.languages.map(lang => 
                `<span class="language-tag ${lang}">${lang.toUpperCase()}</span>`
            ).join('');
            
            item.innerHTML = `
                <div class="project-image-container">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                </div>
                <div class="project-content">
                    <div class="project-number">${String(index + 1).padStart(2, '0')}</div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-languages">
                        ${languagesHTML}
                    </div>
                    <a href="${project.link}" target="_blank" class="project-link">View Project</a>
                </div>
            `;
            
            workGrid.appendChild(item);
        });
        
        // Mark as loaded first
        workSection.dataset.loaded = 'true';
        console.log('Work section content loaded, starting animations...');
        
        // Wait for DOM to settle, then start animations
        setTimeout(() => {
            const projectItems = workGrid.querySelectorAll('.project-item');
            projectItems.forEach((item, index) => {
                // Add transition CSS dynamically
                item.style.transition = 'opacity 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55), transform 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                
                // Animate in with staggered delay
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0) scale(1)';
                }, index * 800);
            });
        }, 1000);
    }

    // Load about section with clean animations
    function loadAboutSection() {
        const aboutSection = document.getElementById('about');
        if (!aboutSection || aboutSection.dataset.loaded === 'true') return;
        
        // Mark as loaded first
        aboutSection.dataset.loaded = 'true';
        console.log('About section loaded, starting animations...');
        
        // Wait, then start animations
        setTimeout(() => {
            const faqItems = aboutSection.querySelectorAll('.faq-item');
            faqItems.forEach((item, index) => {
                // Start with animation-ready state
                item.style.opacity = '0';
                item.style.transform = 'translateY(60px) scale(0.9)';
                
                // Add transition CSS dynamically
                item.style.transition = 'opacity 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55), transform 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0) scale(1)';
                }, index * 600);
            });
        }, 1200);
    }

    // Load contact section with clean animations
    function loadContactSection() {
        const contactSection = document.getElementById('contact');
        if (!contactSection || contactSection.dataset.loaded === 'true') return;
        
        // Mark as loaded first
        contactSection.dataset.loaded = 'true';
        console.log('Contact section loaded, starting animations...');
        
        // Wait, then start animations
        setTimeout(() => {
            const contactCards = contactSection.querySelectorAll('.contact-card');
            contactCards.forEach((card, index) => {
                // Start with animation-ready state
                card.style.opacity = '0';
                card.style.transform = 'translateY(60px) scale(0.9)';
                
                // Add transition CSS dynamically
                card.style.transition = 'opacity 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55), transform 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0) scale(1)';
                }, index * 700);
            });
        }, 1400);
    }

    // Initialize all functionality
    function init() {
        console.log('Initializing website...'); // Debug log
        setupFAQ();
        setupScrollArrow();
        setupSmoothScrolling();
        setupScrollBasedLoading(); // Use new scroll-based loading system
        setupParallax();
        setupAccessibilityToggle();
        setupProjectCardEffects();
        setupHeroAnimations();
        
        // Add scroll event listener for navigation
        window.addEventListener('scroll', updateActiveNavLink);
        
        // Initial call to set active nav link
        updateActiveNavLink();
        
        console.log('Website initialization complete!'); // Debug log
    }

    // Add some playful interactions
    document.addEventListener('mousemove', (e) => {
        const cards = document.querySelectorAll('.project-card');
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardX = rect.left + rect.width / 2;
            const cardY = rect.top + rect.height / 2;
            
            const deltaX = (mouseX - cardX) / 20;
            const deltaY = (mouseY - cardY) / 20;
            
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                card.style.transform = `perspective(1000px) rotateY(${deltaX}deg) rotateX(${-deltaY}deg) translateZ(10px)`;
            }
        });
    });

    // Reset card transforms when mouse leaves window
    document.addEventListener('mouseleave', () => {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
        });
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Reset any active states
            document.querySelectorAll('.project-card').forEach(card => {
                card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
            });
        }
    });

    // Performance optimization: Throttle scroll events
    let ticking = false;
    function updateOnScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateActiveNavLink();
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', updateOnScroll);
    
    // Start the application
    init();
});
