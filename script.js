document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        let isValid = true;

        // Validate Name
        const nameInput = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('is-invalid');
            nameError.textContent = 'Please fill out your name.';
            isValid = false;
        } else {
            nameInput.classList.remove('is-invalid');
            nameError.textContent = '';
        }

        // Validate Email
        const emailInput = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailInput.value.trim() === '') {
            emailInput.classList.add('is-invalid');
            emailError.textContent = 'Please fill out your email.';
            isValid = false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            emailInput.classList.add('is-invalid');
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            emailInput.classList.remove('is-invalid');
            emailError.textContent = '';
        }

        // Validate Message
        const messageInput = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        if (messageInput.value.trim() === '') {
            messageInput.classList.add('is-invalid');
            messageError.textContent = 'Please fill out your message.';
            isValid = false;
        } else {
            messageInput.classList.remove('is-invalid');
            messageError.textContent = '';
        }

        if (isValid) {
            formMessage.innerHTML = '<div class="alert alert-success">Your message has been sent successfully!</div>';
            contactForm.reset(); // Clear the form
            // In a real application, you would send the form data to a server here.
        } else {
            formMessage.innerHTML = '<div class="alert alert-danger">Please correct the errors in the form.</div>';
        }
    });
});
