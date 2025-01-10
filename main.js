// Simple image gallery for the hero banner
let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');
const totalItems = galleryItems.length;

function changeImage() {
  galleryItems[currentIndex].style.opacity = 0; // hide current image
  currentIndex = (currentIndex + 1) % totalItems;
  galleryItems[currentIndex].style.opacity = 1; // show next image
}

// Change image every 3 seconds
setInterval(changeImage, 3000);

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    event.preventDefault(); // prevent form submission
  }
});
