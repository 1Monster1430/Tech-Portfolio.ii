// Array of roles and images
const roles = ["Ict Student", "Grade 11", "Harvey",];
let roleIndex = 0; // Index for roles
const images = [
    "C:/Users/Teacher/Documents/Tech Portfolio/Asset/Image/𝚊𝚛𝚝𝚜𝚢 • 𝙰𝚒 𝚐𝚎𝚗𝚎𝚛𝚊𝚝𝚎𝚍.jpg",
    "C:/Users/Teacher/Documents/Tech Portfolio/Asset/Image/1716200802275_1.jpg"
];

const profileImage = document.getElementById("dynamic-image"); // Ensure this matches your HTML element

let imageIndex = 0; // Index for images

// Preload images to prevent black image during switch
const preloadedImages = images.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

function changeImage() {
    imageIndex = (imageIndex + 1) % preloadedImages.length;
    profileImage.src = preloadedImages[imageIndex].src; // Use the preloaded image
}

// Change the image every 3 seconds
setInterval(changeImage, 3000);

// Function to change the <p> text every 3 seconds
setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length; // Cycle through roles
    document.getElementById("developer-role").textContent = roles[roleIndex]; // Update text
}, 3000);

// Smooth scroll functionality on mouse scroll
window.addEventListener('wheel', function(event) {
    const scrollAmount = window.innerHeight * 0.5; // Scroll by half the height of the viewport

    // Check if the user is scrolling up or down
    if (event.deltaY > 0) {
        // Scroll down
        window.scrollBy({
            top: scrollAmount,  // Scroll down by the calculated amount
            behavior: 'smooth'  // Smooth scrolling effect
        });
    } else {
        // Scroll up
        window.scrollBy({
            top: -scrollAmount,  // Scroll up by the calculated amount
            behavior: 'smooth'   // Smooth scrolling effect
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const homeButton = document.getElementById('homeButton');
    const homeSound = document.getElementById('homeSound');
    const soundIcon = document.getElementById('sound-icon'); // Get the sound icon element

    // Function to play sound
    const playSound = () => {
        homeSound.currentTime = 0; // Reset sound to start
        homeSound.play(); // Play sound
    };

    // Check if elements exist before adding event listeners
    if (homeButton && homeSound) {
        homeButton.addEventListener('click', playSound); // Play sound on Home button click
    }

    if (soundIcon) {
        soundIcon.addEventListener('click', playSound); // Play sound on sound icon click
    } else {
        console.error("Sound icon not found.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const homeContent = document.querySelector('.home-content');
    homeContent.classList.add('visible'); // Add the class to make it visible
});
function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value, // Fixed the ID here
        message: document.getElementById("message").value,
    };

    emailjs.send("service_hn26vik", "template_o48ziir", params)
        .then(function(response) {
            alert("Email Sent!!");
        }, function(error) {
            alert("Failed to send email. Please try again later.");
            console.error('EmailJS error:', error);
        });
}
document.addEventListener("DOMContentLoaded", function() {
    const reflectionSection = document.querySelector(".personal-reflection");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                reflectionSection.classList.add("visible");
            }
        });
    });

    observer.observe(reflectionSection);
});
document.addEventListener("DOMContentLoaded", function() {
    const articleCards = document.querySelectorAll(".article-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing once it is visible
            }
        });
    });

    articleCards.forEach(card => {
        observer.observe(card); // Observe each card
    });
});
// JavaScript for toggling light/dark mode
const toggleButton = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Toggle the icon
  if (document.body.classList.contains('light-mode')) {
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
  } else {
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');
  }
});
document.addEventListener("DOMContentLoaded", () => {
    const skillProgress = document.querySelectorAll('.skill-progress');

    const animateSkills = () => {
        skillProgress.forEach(skill => {
            const level = skill.getAttribute('data-skill-level');
            skill.style.width = level; // Set the width to the data-skill-level
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    });

    // Observe the skills section to trigger the animation
    const skillsSection = document.querySelector('.skills');
    observer.observe(skillsSection);
});
