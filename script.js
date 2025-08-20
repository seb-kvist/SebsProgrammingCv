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
    ];

    // Navigation elements
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const workGrid = document.querySelector('.work-grid');

    // Animation state tracking
    let animationState = {
        heroLoaded: false,
        aboutLoaded: false,
        workLoaded: false,
        contactLoaded: false
    };

    // FAQ functionality - Only one tab open at a time
    function setupFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        // Close all FAQ items by default
        faqItems.forEach(item => {
            item.classList.remove('active');
        });
        
        // Function to update body class based on active FAQ state
        function updateBodyClass() {
            const hasActiveFAQ = Array.from(faqItems).some(item => item.classList.contains('active'));
            if (hasActiveFAQ) {
                document.body.classList.add('faq-active');
            } else {
                document.body.classList.remove('faq-active');
            }
        }
        
        faqItems.forEach(item => {
            const header = item.querySelector('.faq-header');
            header.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                if (isActive) {
                    // Close current tab
                    item.classList.remove('active');
                    updateBodyClass();
                } else {
                    // Close all other FAQ items first
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Wait a brief moment for the closing animation to complete
                    // This prevents the portrait from getting confused
                    setTimeout(() => {
                        item.classList.add('active');
                        updateBodyClass();
                    }, 150); // 150ms delay to ensure smooth transition
                }
            });
        });
        
        // Initial body class update
        updateBodyClass();
    }

    // Floating animation for "hello" word
    function setupHelloAnimation() {
        const helloWord = document.querySelector('.word[data-delay="0.2"]');
        if (!helloWord) return;

        // Create floating animation
        let time = 0;
        const animate = () => {
            time += 0.02;
            const x = Math.sin(time) * 8; // Horizontal movement
            const y = Math.sin(time * 1.5) * 6; // Vertical movement
            const rotation = Math.sin(time * 0.8) * 3; // Slight rotation
            
            helloWord.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
            requestAnimationFrame(animate);
        };
        
        animate();
    }

    // Hero section entrance animation
    function setupHeroAnimations() {
        const heroElements = [
            { element: '.title-line', delay: 0, duration: 1200 },
            { element: '.title-subtitle', delay: 800, duration: 1000 },
            { element: '.hero-description', delay: 1200, duration: 1000 },
            { element: '.hero-cta', delay: 1600, duration: 1000 },
            { element: '.scroll-indicator', delay: 2000, duration: 800 }
        ];

        heroElements.forEach(({ element, delay, duration }) => {
            const el = document.querySelector(element);
            if (!el) return;

            el.style.opacity = '0';
            el.style.transform = 'translateY(40px)';
            el.style.transition = `opacity ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55), transform ${duration}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;

            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, delay);
        });

        // Animate individual words with staggered timing
        const words = document.querySelectorAll('.word');
        words.forEach((word, index) => {
            word.style.opacity = '0';
            word.style.transform = 'translateY(30px) scale(0.9)';
            word.style.transition = 'opacity 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), transform 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55)';

            setTimeout(() => {
                word.style.opacity = '1';
                word.style.transform = 'translateY(0) scale(1)';
            }, 400 + (index * 200));
        });

        animationState.heroLoaded = true;
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

    // Intersection Observer for scroll-based loading
    function setupScrollBasedLoading() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    
                    switch (sectionId) {
                        case 'about':
                            if (!animationState.aboutLoaded) {
                                loadAboutSection();
                            }
                            break;
                        case 'work':
                            if (!animationState.workLoaded) {
                                loadWorkSection();
                            }
                            break;
                        case 'contact':
                            if (!animationState.contactLoaded) {
                                loadContactSection();
                            }
                            break;
                    }
                }
            });
        }, observerOptions);

        // Observe all sections except home
        const sectionsToObserve = document.querySelectorAll('.section:not(#home)');
        sectionsToObserve.forEach(section => observer.observe(section));
    }

    // Load about section with smooth animations
    function loadAboutSection() {
        if (animationState.aboutLoaded) return;
        
        const aboutSection = document.getElementById('about');
        const faqItems = aboutSection.querySelectorAll('.faq-item');
        
        // Animate FAQ items only
        faqItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(60px) scale(0.9)';
            item.style.transition = 'opacity 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55), transform 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0) scale(1)';
            }, index * 300);
        });

        animationState.aboutLoaded = true;
    }

    // Load work section with all projects at once
    function loadWorkSection() {
        if (animationState.workLoaded) return;
        
        const workSection = document.getElementById('work');
        const workGrid = workSection.querySelector('.work-grid');
        
        if (!workGrid) return;
        
        // Clear and populate work grid
        workGrid.innerHTML = '';
        
        projects.forEach((project, index) => {
            const item = document.createElement('div');
            item.className = 'project-item';
            
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
        
        // Animate all projects in with staggered timing
        setTimeout(() => {
            const projectItems = workGrid.querySelectorAll('.project-item');
            projectItems.forEach((item, index) => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(80px) scale(0.9)';
                item.style.transition = 'opacity 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55), transform 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0) scale(1)';
                }, index * 200); // Faster stagger for better flow
            });
        }, 300);
        
        animationState.workLoaded = true;
    }

    // Load contact section with smooth animations
    function loadContactSection() {
        if (animationState.contactLoaded) return;
        
        const contactSection = document.getElementById('contact');
        const contactCards = contactSection.querySelectorAll('.contact-card');
        
        contactCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(60px) scale(0.9)';
            card.style.transition = 'opacity 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55), transform 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 200);
        });
        
        animationState.contactLoaded = true;
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
        // This will be set up after projects are loaded
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('.project-item')) {
                const projectItems = document.querySelectorAll('.project-item');
                projectItems.forEach(item => {
                    if (item !== e.target.closest('.project-item')) {
                        item.style.filter = 'brightness(0.7)';
                        item.style.transform = 'scale(0.98)';
                    }
                });
            }
        });
        
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('.project-item')) {
                const projectItems = document.querySelectorAll('.project-item');
                projectItems.forEach(item => {
                    item.style.filter = 'brightness(1)';
                    item.style.transform = 'scale(1)';
                });
            }
        });
    }

    // Initialize all functionality
    function init() {
        setupFAQ();
        setupScrollArrow();
        setupSmoothScrolling();
        setupScrollBasedLoading();
        setupAccessibilityToggle();
        setupProjectCardEffects();
        setupHelloAnimation();
        setupHeroAnimations();
        
        // Add scroll event listener for navigation
        window.addEventListener('scroll', updateActiveNavLink);
        
        // Initial call to set active nav link
        updateActiveNavLink();
    }

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
