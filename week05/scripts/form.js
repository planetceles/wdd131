const year = document.getElementById("currentyear");
if (year) {
    const today = new Date();
    year.textContent = today.getFullYear();
}
const lastModify = document.getElementById("lastModified");
if (lastModify) {
    lastModify.textContent = `Last Modified: ${document.lastModified}`;
}

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];
document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("pname");
    
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;

        productSelect.appendChild(option);
    });

});

function incrementReview() {
    let count = Number(localStorage.getItem("reviewCount")) || 0;

    count++;

    localStorage.setItem("reviewCount", count);
    console.log(`Reviews Completed: ${count}`);
}
if (window.location.pathname.includes("review.html")) {
    incrementReview();
}