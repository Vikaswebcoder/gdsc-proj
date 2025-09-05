// Simple contact form validation (must fill at least email or contact number)
document.getElementById('contactForm').onsubmit = function(e) {
  var email = document.getElementById('email').value.trim();
  var contact = document.getElementById('contactNumber').value.trim();
  var messageBox = document.getElementById('formMessage');
  if (!email && !contact) {
    e.preventDefault();
    messageBox.style.display = 'block';
    messageBox.style.color = '#e74c3c';
    messageBox.textContent = "Please provide at least an Email ID or Contact Number.";
    return false;
  }
  // For demo: just show success message, not actually sending form
  e.preventDefault();
  messageBox.style.display = 'block';
  messageBox.style.color = 'var(--primary)';
  messageBox.textContent = "Thank you for contacting us! We'll get back to you soon.";
  this.reset();
  return false;
};