// Simple image gallery for the hero banner
let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');
const totalItems = galleryItems.length;

function changeImage() {
  galleryItems[currentIndex].style.opacity = 0.5; // hide current image
  currentIndex = (currentIndex + 1) % totalItems;
  galleryItems[currentIndex].style.opacity = 1; // show next image
}

// Change image every 3 seconds
setInterval(changeImage, 3000);

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // prevent form submission

  const name = document.getElementById('name').value;
  const location = document.getElementById('location').value;
  const message = document.getElementById('message').value;
  const whatsAppUrl = `https://wa.me/201150575305?text=Hi my name is ${name}. My location is ${location}. I wanted to let you know that ${message}`;

  window.open(whatsAppUrl, "_blank");

  if (!name || !location || !message) {
    alert("Please fill out all fields.");
  }
});

// Create popup with the image 
let ourGallery = document.querySelectorAll("img.item");

for (let i of ourGallery) {
  i.addEventListener("click", e => {
    // create element
    let div = document.createElement("div");
    let container = document.createElement("div");
    // add class overlay
    div.className = "popup-overlay";
    container.className = "popup-container";
    // let pic = e.target;
    let picClone = e.target.cloneNode(true);
    picClone.style.opacity = 1;
    div.append(container)
    container.append(picClone)
    //append overlay to the body
    document.body.append(div);
    //make an out for the overlay
    // div.addEventListener("click", _=> div.remove()); // the easy way
    let closeSpan = document.createElement("span");
    closeSpan.innerHTML = "&cross;"
    closeSpan.addEventListener("click", _ => div.remove());
    container.append(closeSpan)
  })
}