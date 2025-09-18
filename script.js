// 1️⃣ Contact Form Alert
document.getElementById('contactForm')?.addEventListener('submit', function(e){
    e.preventDefault(); // Prevent actual form submission
    alert('Thank you! Your message has been sent.');
});

// 2️⃣ Optional: Product Image Slider
let index = 0;
const productImages = document.querySelectorAll('.product-item img');

function showNext() {
    if (!productImages.length) return;
    productImages.forEach(img => img.style.display = 'none');
    productImages[index].style.display = 'block';
    index = (index + 1) % productImages.length;
}

// Change product images every 3 seconds
setInterval(showNext, 3000);

// 3️⃣ Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
});