const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    hamButton.classList.toggle("open");

    hamButton.setAttribute("aria-expanded", isOpen);
});

const year = document.getElementById("currentyear");
if (year) {
    const today = new Date();
    year.textContent = today.getFullYear();
}
const lastModify = document.getElementById("lastModified");
if (lastModify) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}