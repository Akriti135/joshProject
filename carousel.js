// Select the carousel and the navigation buttons
const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Get the width of a single food card + gap between them
const cardWidth = 280; // Card width in pixels (same as CSS flex size)
const gap = 24; // Space between the cards
const visibleCards = 3; // Number of visible cards at a time

// Calculate the maximum scrollable index
const totalCards = document.querySelectorAll('.food-card').length;
const maxIndex = Math.ceil(totalCards / visibleCards) - 1;

let currentIndex = 0; // Start at the first set of 3 cards

// Function to update the carousel's position
function updateCarousel() {
  const scrollWidth = (cardWidth + gap) * visibleCards;
  const translateX = -(scrollWidth * currentIndex);
  carousel.style.transform = `translateX(${translateX}px)`;
}

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarousel();
  }
});

// Event listener for the "Previous" button
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});



const video = document.getElementById('foodVideo');
const playBtn = document.getElementById('playBtn');

// Play/pause toggle function
playBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play(); // Play the video
    playBtn.classList.add('hidden'); // Hide play button when video is playing
  } else {
    video.pause(); // Pause the video
    playBtn.classList.remove('hidden'); // Show play button when video is paused
  }
});

// Show the play button when the video is paused
video.addEventListener('pause', () => {
  playBtn.classList.remove('hidden'); // Show play button
});

// Hide the play button when the video is playing
video.addEventListener('play', () => {
  playBtn.classList.add('hidden'); // Hide play button
});
const requestBtn = document.querySelector('.request-btn');
const modal = document.getElementById('requestModal');
const closeModalBtn = document.getElementById('closeModal');
const requestForm = document.getElementById('requestForm');

requestBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Also close modal if user clicks outside modal content
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

requestForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const dishName = requestForm.dishName.value.trim();
  const details = requestForm.details.value.trim();

  if (!dishName) {
    alert('Please enter the dish name');
    return;
  }

  // Here you can add your logic to send this data to backend or show confirmation
  alert(`Thank you! Your request for "${dishName}" has been submitted.`);

  // Reset form & close modal
  requestForm.reset();
  modal.classList.add('hidden');
});
