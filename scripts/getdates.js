
const year = document.getElementById("currentyear")
if (year) {
    const today = new Date();
    year.textContent = today.getFullYear();
}
const lasModify = document.getElementById("lastModified");
if (lasModify) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// temples.forEach(temple => {
//   let card = document.createElement("section");
//   let name = document.createElement("h2");
//   let location = document.createElement("p");
//   let dedicated = document.createElement("p");
//   let area = document.createElement("p");
//   let img = document.createElement("img");

//   name.textContent = temple.templeName;
//   location.innerHTML = `<span class="label">LOCATION:</span> ${temple.location}`;
//   dedicated.innerHTML = `<span class="label">DEDICATED:</span> ${temple.dedicated}`;
//   area.innerHTML = `<span class="label">SIZE:</span> ${temple.area.toLocaleString()} sq ft`;

//   img.setAttribute("src", temple.imageUrl);
//   img.setAttribute("alt", `${temple.templeName} Temple`);
//   img.setAttribute("loading", "lazy");

//   card.appendChild(name);
//   card.appendChild(location);
//   card.appendChild(dedicated);
//   card.appendChild(area);
//   card.appendChild(img);

//   card.classList.add("temple-card");

//   templeSection.appendChild(card);

// });