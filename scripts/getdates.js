
const year = document.getElementById("currentyear")
if (year) {
    const today = new Date();
    year.textContent = today.getFullYear();
}
const lasModify = document.getElementById("lastModified");
if (lasModify) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}