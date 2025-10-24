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

// Only run this section if those elements exist
if (readableEl && msEl) {
  function updateTime() {
    const nowMs = Date.now();
    msEl.textContent = nowMs; // Milliseconds
    readableEl.textContent = readableFormatter.format(nowMs); // Readable time
  }

  // 🪄 Run immediately + update every second
  updateTime();
  setInterval(updateTime, 1000);
}

// Toggle mobile navbar
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form fields
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const subjectInput = document.getElementById("subject");
      const messageInput = document.getElementById("message");

      // Get message elements
      const nameError = document.getElementById("name-error");
      const emailError = document.getElementById("email-error");
      const subjectError = document.getElementById("subject-error");
      const messageError = document.getElementById("message-error");
      const successMessage = document.getElementById("success-message");

      // Reset all messages
      [nameError, emailError, subjectError, messageError, successMessage].forEach((msg) => {
        msg.textContent = "";
        msg.classList.remove("show");
      });

      let isValid = true;

      // Validate Name
      if (nameInput.value.trim() === "") {
        nameError.textContent = "Full name is required.";
        nameError.classList.add("show");
        isValid = false;
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailInput.value.trim() === "") {
        emailError.textContent = "Email address is required.";
        emailError.classList.add("show");
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.classList.add("show");
        isValid = false;
      }

      // Validate Subject
      if (subjectInput.value.trim() === "") {
        subjectError.textContent = "Subject is required.";
        subjectError.classList.add("show");
        isValid = false;
      }

      // Validate Message
      if (messageInput.value.trim() === "") {
        messageError.textContent = "Message is required.";
        messageError.classList.add("show");
        isValid = false;
      } else if (messageInput.value.trim().length < 10) {
        messageError.textContent = "Message must be at least 10 characters long.";
        messageError.classList.add("show");
        isValid = false;
      }

      // If valid — show success message
      if (isValid) {
        successMessage.textContent = "✅ Thank you for contacting us!";
        successMessage.classList.add("show");

        // Reset form
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          successMessage.textContent = "";
          successMessage.classList.remove("show");
        }, 5000);
      }
    });
  }

  //  Highlight active nav link
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
