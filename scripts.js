let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Function to show the current slide
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

// Function to go to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Function to go to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Automatically change slides every 7 seconds
setInterval(nextSlide, 7000);
