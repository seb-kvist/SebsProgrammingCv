document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav a');

    // Template for the Home Page
    function getHomePageContent() {
        return `
            <h1>Well, hello there!</h1>
            <p>I'm glad you decided to check in and more so in giving me a chance to present myself.
            Either navigate through the nav-bar in the header on the buttons below from this site.
            I hope you enjoy your stay, and thank you again for checking it out!</p>
            <br>
            <p>All the best //Seb</p>
            <div class="button-container-home">
                <button data-page="about">About Me</button>
                <button data-page="contact">Contact Me</button>
                <button data-page="work">My Work</button>
            </div>
        `;
    }

    // Template for the About Page
    function getAboutPageContent() {
        return `
            <h1>About Me</h1>
            <p>Hi, I'm Sebastian.
            <br><br>
            I’m a 30-year-old from Oskarshamn, now living in Täby, Sweden. Currently, I’m studying .NET development at Campus Värnamo, focusing mainly on C# and .NET, but also HTML, CSS, jQuery, and JavaScript.
            <br><br>
            Before diving into programming, I studied Graphic Design and Communication at Linköping University. While it might seem like a different path, my design background has been a huge asset in my journey as a programmer.
            Understanding design principles has helped me approach problems with a focus on user experience, which is key when creating functional, intuitive applications. I believe this perspective makes me more mindful of how users interact with software, and ultimately, it leads to better code and smoother applications.
            I’m always eager to learn, tackle new challenges, and continue growing as a developer. With my design background and focus on .NET development, I’m looking forward to improving my skills!
            Thanks for stopping by!</p>
        `;
    }

    // Template for the Contact Page
    function getContactPageContent() {
        return `
            <h2>Contact Me</h2>
            <p>You can reach me via email: <a href="mailto:seb@example.com">seb@example.com</a>.</p>
        `;
    }

    // Template for the Work Page
    function getWorkPageContent() {
        return `
            <h1>My Work</h1>
            <p>Here you can explore some of the projects I've worked on during my studies. Each one reflects a different stage of my learning journey—some are more polished than others!</p>
            <br>
            <p>If you'd like to dive deeper into my work, feel free to visit my GitHub by clicking this <a href="https://github.com/seb-kvist?tab=repositories" target="_blank">link</a>.</p>
            <div class="myWorkGallery">
            <div class="project">
                <a href="https://github.com/seb-kvist/project1" target="_blank">
                    <img src="weather-app-thumbnail.png" alt="Weather App Screenshot">
                    <h3>Weather App</h3>
                    <p>A dynamic web application to display current weather information.</p>
                </a>
                </div>
                <div class="project">
                    <a href="https://github.com/seb-kvist/project2" target="_blank">
                        <img src="task-manager-thumbnail.png" alt="Task Manager Screenshot">
                        <h3>Task Manager</h3>
                        <p>A full-stack application to manage daily tasks.</p>
                    </a>
                </div>
                <div class="project">
                    <a href="https://github.com/seb-kvist/project3" target="_blank">
                        <img src="budget-tracker-thumbnail.png" alt="Budget Tracker Screenshot">
                        <h3>Budget Tracker</h3>
                        <p>A finance app to track expenses and income over time.</p>
                    </a>
                </div>
                <div class="project">
                    <a href="https://github.com/seb-kvist/project4" target="_blank">
                        <img src="portfolio-site-thumbnail.png" alt="Portfolio Site Screenshot">
                        <h3>Portfolio Site</h3>
                        <p>A personal website showcasing my projects and skills.</p>
                    </a>
                </div>
            </div>
        `;
    }

    // Function to update the active link (style for active page)
    function updateActiveLink(page) {
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });
    }

    // Function to load the page content
    function loadPage(page) {
        let pageContent;
        
        switch (page) {
            case 'home':
                pageContent = getHomePageContent();
                break;
            case 'about':
                pageContent = getAboutPageContent();
                break;
            case 'contact':
                pageContent = getContactPageContent();
                break;
            case 'work':
                pageContent = getWorkPageContent();
                break;
            default:
                pageContent = getHomePageContent();
                break;
        }

        // Update the content without clearing the entire container
        content.innerHTML = pageContent;
        updateActiveLink(page);  // Update active link style
    }

    // Initialize the home page by default
    loadPage('home');

    // Add event listeners to navigation links
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    // Delegate click events for dynamically created buttons
    document.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON' && e.target.hasAttribute('data-page')) {
            const page = e.target.getAttribute('data-page');
            loadPage(page);
        }
    });
});

// Activate Accessibility
document.addEventListener('DOMContentLoaded', () => {
    const accessibilityToggle = document.getElementById('accessibility-toggle');

    // Växla tillgänglighetsläget
    accessibilityToggle.addEventListener('click', () => {
        document.body.classList.toggle('accessible-mode');
    });
});
