document.getElementById('contact-form').addEventListener('submit', function(event) {
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value) {
        valid = false;
        alert('Please enter your name');
    }

    if (!email.value || !email.value.includes('@')) {
        valid = false;
        alert('Please enter a valid email');
    }

    if (!message.value) {
        valid = false;
        alert('Please enter your message');
    }

    if (!valid) {
        event.preventDefault();
    }
});
