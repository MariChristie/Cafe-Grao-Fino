        const hamburgerButton = document.querySelector('.hamburger-button');
        const header = document.querySelector('.hero-section'); 

        hamburgerButton.addEventListener('click', () => {
            header.classList.toggle('nav-open');
        });