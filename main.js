// Select the hamburger icon and the navigation links container
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Add a click event listener to the hamburger icon
hamburger.addEventListener('click', () => {
  // Toggle the 'active' class on the navigation links container
  navLinks.classList.toggle('active');
});
