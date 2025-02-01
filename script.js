document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const links = document.querySelectorAll('nav a');

    // Template for the Home Page
    function getHomePageContent() {
        return `
            <div class="container">
                <h1 class="animated-text">Well, hello there!</h1>
            </div>
            <div class = "home-container">
                <p>I'm glad you decided to check in and more so in giving me a chance to present myself.
                Either navigate through the nav-bar in the header on the buttons below.</p>
                <p>I hope you enjoy your stay, and thank you again for checking out my portfolio!</p>
                <br>
                <div class="button-container-home">
                    <button data-page="about">About Me</button>
                    <button data-page="contact">Contact Me</button>
                    <button data-page="work">My Work</button>
                </div>
            </div>
        `;
    }

    // Template for the About Page
    function getAboutPageContent() {
        return `
            <h1>About Me</h1>
            <p>Hi, I'm Sebastian.
            <br><br>
            I’m a 30-year-old from Oskarshamn, now living in Täby, Sweden. </p>
            <p>I'm currently studying to become a <strong>.NET Web Developer</strong> at Jönköping University, Campus Värnamo, where I mainly focus on C# and .NET, but also some HTML, CSS, jQuery, and JavaScript.</p>
            <br>
            Before diving into programming, I studied Graphic Design and Communication at Linköping University. While it might seem like a different path, my design background has been a huge asset in my journey as a programmer.
            Understanding design principles has helped me approach problems with a focus on user experience, which is key when creating functional, intuitive applications. I believe this perspective makes me more mindful of how users interact with software, and ultimately, it leads to better code and smoother applications.
            I’m always eager to learn, tackle new challenges, and continue growing as a developer. With my background in design and my current focus on .NET development, I am eager to refine my skills and build a future career in programming!</p>
            <div class= "portrait-container">
                <img src="img/selfportrait.jpg" alt="Self Portrait Screenshot">
            </div>
        `;
    }

    // Template for the Contact Page
    function getContactPageContent() {
        return `
            <div class="contact-container">
                <h1>Contact Me</h1>
                <p>If you'd like to get in touch, here are my details:</p>
                <div class="contact-details">
                    <p><strong>Name:</strong> Sebastian Kvist</p>
                    <p><strong>Address:</strong> Täbyvägen 326A, Täby, Stockholm</p>
                    <p><strong>Phone:</strong> 072-227 78 77</p>
                    <p><strong>Email:</strong> sebastian_kvist@hotmail.com</p>
                </div>
            </div>
        `;
    }

    // Template for the Work Page
    function getWorkPageContent() {
        return `
            <h1>My Work</h1>
            <p>Here you can explore some of the projects I've worked on during my studies. Each one reflects a different stage of my learning journey— where some are more polished than others!</p>
            <br>
            <p>If you'd like to dive deeper into my work, feel free to visit my GitHub by clicking this <a href="https://github.com/seb-kvist?tab=repositories" target="_blank">link</a>.</p>
            <p>Or you can click on any of the work below to go directly to its GitHub repository with a README to test the different projects.</p>
            <div class="myWorkGallery">

            <div class="project">
                <a href="https://github.com/seb-kvist/Toshi-i-verket" target="_blank">
                    <img src="img/ToshiIVerket.jpg" alt="ToshiIVerket Screenshot">
                    <h3>Toshi-I-Verket</h3>
                    <p>Web-based auction platform developed with .NET and ASP.NET Core.</p>
                    <div class="language-practice">
                        <strong>Language practice: </strong> 
                        <span class="csharp">C#</span>,
                        <span class="javascript">JavaScript</span>
                        <span class="html">HTML</span>,
                        <span class="css">CSS</span>
                    </div>
                </a>
            </div>

            <div class="project">
                <a href="https://github.com/seb-kvist/auktioner-net" target="_blank">
                    <img src="img/AuktionApp.jpg" alt="AuktionApp Screenshot">
                    <h3>Auktion-App</h3>
                    <p>Practice on Core Identity for an auction-based website. Register as two different roles, each with different permissions. </p>
                    <div class="language-practice">
                        <strong>Language practice: </strong> 
                        <span class="csharp">C#</span>,
                        <span class="html">HTML</span>,
                        <span class="css">CSS</span>
                    </div>
                </a>
            </div>

            <div class="project">
                <a href="https://github.com/seb-kvist/MuseumConsoleApp" target="_blank">
                    <img src="img/MuseumConsoleApp.jpg" alt="Museum Console App Screenshot">
                    <h3>A Night at the Museum</h3>
                    <p>A C#-console app where users navigate through a museum, exploring its rooms and interacting with the displayed artwork based on a predefined map.</p>
                    <div class="language-practice">
                        <strong>Language practice: </strong> <span class="csharp">C#</span>
                    </div>
                </a>
            </div>

            <div class="project">
                <a href="https://github.com/seb-kvist/SebsFabrik" target="_blank">
                    <img src="img/SebsFabrik.jpg" alt="SebsFabrik Site Screenshot">
                    <h3>SebsFabrik</h3>
                    <p>Another C# console app, allowing customers to place orders for different types of products</p>
                    <div class="language-practice">
                        <strong>Language practice: </strong> <span class="csharp">C#</span>
                    </div>
                </a>
            </div>

            <div class="project">
                    <a href="https://github.com/seb-kvist/Cities-Countries" target="_blank">
                        <img src="img/Cities and Countries.jpg" alt="Cities-Countries Site Screenshot">
                        <h3>Cities & Contries</h3>
                        <p>Javascript app where users can click on a country to see a list of cities within it, view detailed information about a city, and mark cities they have visited. </p>
                        <div class="language-practice">
                        <strong>Language practice: </strong>
                            <span class="javascript">JavaScript</span> 
                            <span class="html">HTML</span>, 
                            <span class="css">CSS</span>,
                        </div>
                    </a>
            </div>

            <div class="project">
                    <a href="https://github.com/seb-kvist/SebsBank" target="_blank">
                        <img src="img/SebsBankERhino.jpg" alt="Sebs Bank-E-Rhino Site Screenshot">
                        <h3>Seb's Bank-E-Rhino</h3>
                        <p>Typescript project trying out balance, withdrawal and deposit functions.</p>
                        <div class="language-practice">
                        <strong>Language practice: </strong> 
                            <span class="typescript">TypeScript</span>
                            <span class="html">HTML</span>, 
                            <span class="css">CSS</span>,
                            <span class="javascript">JavaScript</span>
                        </div>
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
