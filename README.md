This is my Stage 0 task submission for the HNG 12 Frontend Wizards track.
The project is a responsive, accessible Profile Card built using semantic HTML, modern CSS, and vanilla JavaScript.

It displays my name, a short bio, avatar, hobbies, dislikes, social links, and a live time display that updates every second.
This task demonstrates my understanding of semantic structure, accessibility, and modern frontend development patterns using plain HTML/CSS/JS no frameworks.


* Features:

- Semantic HTML elements (<article>, <section>, <figure>, <nav>, etc.)

- Modern, mobile-first design with responsive layout using Flexbox and media queries

- Real-time clock that updates every second and shows both readable time and milliseconds

- Social links that open in a new tab safely (target="_blank" + rel="noopener noreferrer")

- Fully keyboard-accessible and screen-reader-friendly

- Clean, minimal, and professional user interface


* Technologies Used

- HTML5 — For structure and semantics

- CSS3 — For styling, layout, and responsiveness

- Vanilla JavaScript — For dynamic functionality (live clock)


* How to Run Locally

1.  Clone this repository:
-   gh repo clone OloriNifemi/hng-stage0-profile


2. Navigate into the folder:
-  cd hng-stage0-profile-card

3. Open the file index.html directly in your browser.


* Live Demo

- Hosted Link: [View on vercel](https://hng-stage0-profile.vercel.app/)
- GitHub Repository: https://github.com/OloriNifemi/hng-stage0-profile.git


* Task Requirements Covered

- All required data-testid attributes correctly included

- Semantic HTML structure (article, header, nav, section, figure, etc.)

- Displays user name, bio, avatar, hobbies, dislikes, and social links

- Live current time in milliseconds and readable format

- Responsive layout (mobile → tablet → desktop)

- Accessible and keyboard-navigable links.






<!-- Task 2 -->

---

## 🧭 Pages Overview

### 🏠 Home Page (`index.html`)
- Shows my Stage 0 profile card.
- Displays real-time local time and milliseconds.
- Social links (GitHub + LinkedIn).

### 📞 Contact Page (`contact.html`)
- Form fields:
  - Full Name (`data-testid="test-contact-name"`)
  - Email (`data-testid="test-contact-email"`)
  - Subject (`data-testid="test-contact-subject"`)
  - Message (`data-testid="test-contact-message"`)
  - Submit Button (`data-testid="test-contact-submit"`)
- Validation:
  - All fields required.
  - Email must be valid.
  - Message must be at least 10 characters.
- Shows success message after valid submission.
- Accessible labels, `aria-describedby`, and keyboard navigation.

### 👩‍💻 About Page (`about.html`)
- Sections include:
  - Bio (`data-testid="test-about-bio"`)
  - Goals (`data-testid="test-about-goals"`)
  - Areas of Low Confidence (`data-testid="test-about-confidence"`)
  - Note to Future Self (`data-testid="test-about-future-note"`)
  - Extra Thoughts (`data-testid="test-about-extra"`)
- Built using semantic HTML (`<main>`, `<section>`, `<h2>`).

---

## 🧱 Built With
- HTML5 (Semantic, Accessible)
- CSS3 (Responsive Design)
- JavaScript (Form validation, dynamic time updates)

---

## ♿ Accessibility
- Proper `<label>` for all form inputs.
- Error messages tied with `aria-describedby`.
- Fully keyboard navigable.

---

* Live Demo

- Hosted Link: [View on vercel](https://hng-stage0-profile.vercel.app/)
- GitHub Repository: https://github.com/OloriNifemi/hng-stage0-profile.git



***Obafemi Precious Ayomipo
Frontend Developer***
