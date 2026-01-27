const year = document.getElementById("currentyear")
if (year) {
    const today = new Date();
    year.textContent = today.getFullYear();
}
const lastModify = document.getElementById("lastModified");
if (lastModify) {
    lastModify.textContent = `Last Modified: ${document.lastModified}`;
}

const temperature = 5;
const windSpeed = 12;

const chillElement = document.getElementById("chill");
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °F";
}
if (chillElement) {
    chillElement.textContent = windChill;
}
function calculateWindChill(temp, speed) {
    return (
        13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16
    );
}