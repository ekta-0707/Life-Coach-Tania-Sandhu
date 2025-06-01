// js/scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Validate and process form data
    alert('Form submitted!');
  });
});