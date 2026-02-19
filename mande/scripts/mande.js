const hamButton = document.querySelector("#menu");
const navLinks = document.querySelector(".nav-links");

if (hamButton && navLinks) {
    hamButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        hamButton.classList.toggle("open");

        hamButton.setAttribute("aria-expanded", isOpen);
    });
}
function updateTimer() {
    const birthday = new Date();
    birthday.setHours(0, 0, 0, 0);

    const now = new Date();
    const difference = now - birthday;

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("timer").textContent = `${hours} hours, ${minutes} minutes, ${seconds} seconds depuis que l'anniversaire a commencer 🎂`;
}
setInterval(updateTimer, 1000);
updateTimer();

const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const confettiPieces = [];
const colors = ["#FFD700", "#FF6B81", "#7FDBFF", "#E6E6FA", "#FFFFFF"];

function createConfetti() {
    for (let i = 0; i < 150; i++) {
        confettiPieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            size: Math.random() * 8 + 4,
            speed: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            tilt: Math.random() * 10 - 10
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiPieces.forEach((piece, index) => {
        ctx.fillStyle = piece.color;
        ctx.beginPath();
        ctx.rect(piece.x, piece.y, piece.size, piece.size);
        ctx.fill();

        piece.y += piece.speed;
        piece.x += Math.sin(piece.tilt);

        if (piece.y > canvas.height) {
            confettiPieces[index].y = -10;
            confettiPieces[index].x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(drawConfetti);
}

function launchConfetti() {
    confettiPieces.length = 0;
    createConfetti();
}

document.getElementById("celebrateBtn")
    .addEventListener("click", launchConfetti);

launchConfetti();
drawConfetti();