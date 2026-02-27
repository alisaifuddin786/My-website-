const contactForm = document.querySelector('#contactForm');
const formStatus = document.querySelector('#formStatus');

if (contactForm && formStatus) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formStatus.textContent = 'Please fill out all fields correctly.';
      return;
    }

    formStatus.textContent = 'Thanks! Your message has been received.';
    contactForm.reset();
  });
}
