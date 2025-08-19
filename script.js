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

    // Generate project items
    function generateProjectCards() {
        workGrid.innerHTML = '';
        
        projects.forEach((project, index) => {
            const item = document.createElement('div');
            item.className = 'project-item';
            item.style.animationDelay = '0.2s'; // All items animate at the same time
            
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
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate all items at once when work section is visible
                    if (entry.target.classList.contains('work-section')) {
                        const projectItems = entry.target.querySelectorAll('.project-item');
                        projectItems.forEach(item => {
                            item.classList.add('animate');
                        });
                    } else {
                        entry.target.classList.add('animate');
                    }
                } else {
                    if (entry.target.classList.contains('work-section')) {
                        const projectItems = entry.target.querySelectorAll('.project-item');
                        projectItems.forEach(item => {
                            item.classList.remove('animate');
                        });
                    } else {
                        entry.target.classList.remove('animate');
                    }
                }
            });
        }, observerOptions);

        // Observe sections instead of individual cards
        const sections = document.querySelectorAll('.section');
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

    // Smooth reveal animations for sections and text elements
    function setupSectionReveals() {
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Animate text elements within the section
                    const textElements = entry.target.querySelectorAll('h1, h2, h3, p, .project-title, .project-description');
                    textElements.forEach((element, index) => {
                        element.style.opacity = '0';
                        element.style.transform = 'translateY(30px)';
                        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                        
                        setTimeout(() => {
                            element.style.opacity = '1';
                            element.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                } else {
                    // Reset animations when section is out of view
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(50px)';
                    
                    const textElements = entry.target.querySelectorAll('h1, h2, h3, p, .project-title, .project-description');
                    textElements.forEach(element => {
                        element.style.opacity = '0';
                        element.style.transform = 'translateY(30px)';
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        sections.forEach(section => {
            if (section.id !== 'home') {
                section.style.opacity = '0';
                section.style.transform = 'translateY(50px)';
                section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                sectionObserver.observe(section);
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

    // Initialize all functionality
    function init() {
        generateProjectCards();
        setupSmoothScrolling();
        setupScrollAnimations();
        setupParallax();
        setupAccessibilityToggle();
        setupSectionReveals();
        setupProjectCardEffects();
        setupHeroAnimations();
        
        // Add scroll event listener for navigation
        window.addEventListener('scroll', updateActiveNavLink);
        
        // Initial call to set active nav link
        updateActiveNavLink();
    }

    // Start the application
    init();

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
});
