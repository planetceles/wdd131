const year = document.getElementById("currentYear");
if (year) {
    const today = new Date();
    year.textContent = today.getFullYear();
}
const lastModify = document.getElementById("lastModified");
if (lastModify) {
    lastModify.textContent = `Last Modified: ${document.lastModified}`;
}
const courses = [
    {
        title: "Beginner Piano",
        duration: "6 Months",
        price: "---"
    },
    {
        title: "Intermediate Piano",
        duration: "12 Months",
        price: "---"
    },
    {
        title: "Advanced Piano",
        duration: "18 Months",
        price: "---"
    }
];
const courseContainer = document.getElementById("courseContainer");
// const courseContainer = document.querySelector("#course-container");

if (courseContainer) {
    courses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");

    card.innerHTML = `
    <h3>${course.title}</h3>
    <p>Duration: ${course.duration}</p>
    <p>Price: $${course.price}</p>
    `;
    courseContainer.appendChild(card);
});
}

const reviewForm = document.getElementById("reviewForm");
const testimonialContainer = document.getElementById('testimonialContainer');

window.addEventListener("load", () => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

    savedReviews.forEach(review => {
        displayReview(review.name, review.text);
    });
});
if (reviewForm) {
    reviewForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("reviewName").value;
        const text = document.getElementById("reviewText").value;

        const review = { name, text };

        const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];

        savedReviews.push(review);

        localStorage.setItem("reviews", JSON.stringify(savedReviews));

        displayReview(name, text);
        reviewForm.requestFullscreen();
    });

}
function displayReview(name, text) {
    if (!testimonialContainer) return;

    const card = document.createElement("div");
    card.classList.add("testimonial-card");

    card.innerHTML = `
    <h4>${name}</h4>
    <p>${text}</p>
    `;
    testimonialContainer.appendChild(card);
}
const exploreBtn = document.getElementById("exploreBtn");

if (exploreBtn) {
    exploreBtn.addEventListener("click", () => {
        document.getElementById("courses").scrollIntoView({
            behavior: "smooth"
        });
    });
}

const form = document.getElementById("registrationForm");

if (form) {
    form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fname").value;
    const age = document.getElementById("age").value;
    const level = document.getElementById("level").value;

    let responseMessage;

    if (age < 6) {
            responseMessage = "You are too young to enroll!";
    }
    else {
            responseMessage = `Welcome ${name}! You registered for ${level} level.`;

            localStorage.setItem("studentName", name);
            localStorage.setItem("studentLevel", level);
        }

        // message.textContent = responseMessage;
        document.getElementById("formMessage").textContent = responseMessage;
    });
}
const message = document.getElementById("formMessage");



window.addEventListener("load", () => {
    const savedName = localStorage.getItem("studentName");

    if (savedName) {
        message.textContent = `Welcome back ${savedName}!`;
    }
});

const hamButton = document.querySelector("#menu");
const navLinks = document.querySelector(".nav-links");

if (hamButton && navLinks) {
    hamButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        hamButton.classList.toggle("open");

        hamButton.setAttribute("aria-expanded", isOpen);
    });
}