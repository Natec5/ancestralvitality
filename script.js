document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButtons = document.querySelectorAll('.learn-more');

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.parentElement.getAttribute('data-product-id');
            window.location.href = `product-${productId}.html`; 
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
  
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (name && email && message) {
            alert('Thank you for your message! We will get back to you as soon as possible.');
            contactForm.reset(); // Reset form fields after submission
        } else {
            alert('Please fill out all fields.');
        }
    });
});
