document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav a');

    // Template for the Home Page
    function getHomePageContent() {
        return `
            <h1>Well, hello there!</h1>
            <p>I'm glad you decided to check in and more so in giving me a chance to present myself.</p>
            <p>Either navigate through the nav-bar in the header on the buttons below from this site.</p>
            <p>I hope you enjoy your stay, and thank you again for checking it out! </p>
            <p>All the best //Seb</p>
            <div class="button-container">
                <button data-page="about">About Me</button>
                <button data-page="contact">Contact Me</button>
                <button data-page="work">My Work</button>
            </div>
        `;
    }

    // Template for the About Page
    function getAboutPageContent() {
        return `
            <h2>About Me</h2>
            <p>Hi, I'm Seb. A passionate programmer specializing in C#. I love creating innovative solutions and learning new technologies.</p>
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
            <h2>My Work</h2>
            <p>Here are some of my projects:</p>
            <ul>
                <li><a href="#">Project 1</a> - Description</li>
                <li><a href="#">Project 2</a> - Description</li>
                <li><a href="#">Project 3</a> - Description</li>
            </ul>
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
