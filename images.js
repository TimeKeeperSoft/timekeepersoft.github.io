const images = document.querySelectorAll('.rounded-img');
const randomIndex = Math.floor(Math.random() * images.length);
images[randomIndex].classList.add('active');