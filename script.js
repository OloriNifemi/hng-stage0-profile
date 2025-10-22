// 🌍 Format time to match your local timezone
const readableFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Africa/Lagos',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: 'numeric',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});

const readableEl = document.getElementById('user-time-readable');
const msEl = document.getElementById('user-time-ms');

// 🕒 Function to update readable + ms time
function updateTime() {
  const nowMs = Date.now();
  msEl.textContent = nowMs; // Milliseconds
  readableEl.textContent = readableFormatter.format(nowMs); // Readable time
}

// 🪄 Run immediately + update every second
updateTime();
setInterval(updateTime, 1000);

// Toggle mobile navbar
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});



const contactForm = document.getElementById("contact-form")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form inputs
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const subjectInput = document.getElementById("subject")
    const messageInput = document.getElementById("message")

    // Get error message elements
    const nameError = document.getElementById("name-error")
    const emailError = document.getElementById("email-error")
    const subjectError = document.getElementById("subject-error")
    const messageError = document.getElementById("message-error")
    const successMessage = document.getElementById("success-message")

    // Reset all error messages
    nameError.textContent = ""
    nameError.classList.remove("show")
    emailError.textContent = ""
    emailError.classList.remove("show")
    subjectError.textContent = ""
    subjectError.classList.remove("show")
    messageError.textContent = ""
    messageError.classList.remove("show")
    successMessage.textContent = ""
    successMessage.classList.remove("show")

    let isValid = true

    // Validate full name
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Full name is required"
      nameError.classList.add("show")
      isValid = false
    }

    // Validate email format (name@example.com)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required"
      emailError.classList.add("show")
      isValid = false
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address"
      emailError.classList.add("show")
      isValid = false
    }

    // Validate subject
    if (subjectInput.value.trim() === "") {
      subjectError.textContent = "Subject is required"
      subjectError.classList.add("show")
      isValid = false
    }

    // Validate message (minimum 10 characters)
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message is required"
      messageError.classList.add("show")
      isValid = false
    } else if (messageInput.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters long"
      messageError.classList.add("show")
      isValid = false
    }

    // If all validations pass, show success message
    if (isValid) {
      successMessage.textContent = "Thank you for contacting us!"
      successMessage.classList.add("show")

      // Reset form
      contactForm.reset()

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.textContent = ""
        successMessage.classList.remove("show")
      }, 5000)
    }
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })
})



