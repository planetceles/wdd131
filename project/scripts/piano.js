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
// function displayCourses(list) {
//     courseContainer.innerHTML = "";

//     list.forEach(course => {
//         const card = document.createElement("div");
//         card.classList.add("course-card");

//         card.innerHTML = `
//             <h3>${course.title}</h3>
//             <p>Duration: ${course.duration}</p>
//             <p>Price: $${course.price}</p>
//             `;
//         courseContainer.appendChild(card);
//     });
// }
const testimonials = [
    "This academy changed m life!",
    "I learned to read music in 2 months",
    "Professional and patient teacher!"
];

const testimonialContainer = document.getElementById("testimonialContainer");

testimonials.map(text => {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    testimonialContainer.appendChild(p);
});

const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
    document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
    });
});

const form = document.getElementById("registrationForm");
const message = document.getElementById("formMessage");

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

    message.textContent = responseMessage;
});

window.addEventListener("load", () => {
    const savedName = localStorage.getItem("studentName");

    if (savedName) {
        message.textContent = `Welcome back ${savedName}!`;
    }
});