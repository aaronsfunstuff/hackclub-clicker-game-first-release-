document.addEventListener('DOMContentLoaded', () => {
    const magicBox = document.getElementById('magic-box');

    magicBox.addEventListener('click', () => {
        alert('🎉 Surprise! You found the magic!');
    });
});
    document.addEventListener('DOMContentLoaded', () => {
        
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            });
        });

        // Form Validation
        const form = document.querySelector('#contact-form form');
        form.addEventListener('submit', (e) => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill out all fields.');
                e.preventDefault(); 
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                e.preventDefault(); 
            }
        });

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    });
