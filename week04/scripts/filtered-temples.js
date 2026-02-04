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
    lastModify.textContent = `Last Modified: ${document.lastModified}`;
}

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Montreal Quebec Temple",
    location: "Montreal, Quebec, Canada",
    dedicated: "2015, November, 22",
    area: 11550,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg"
  },
  {
    templeName: "Helsinki Finland Temple",
    location: "Helsinki, Finland",
    dedicated: "2006, October, 22",
    area: 16350,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/helsinki-finland-temple/helsinki-finland-temple-22169-main.jpg"
  },
  {
    templeName: "Nairobi Kenya Temple",
    location: "Nairobi, Kenya",
    dedicated: "2025, May, 18",
    area: 19870,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-60488-main.jpg"
  },
  {
    templeName: "Los Angeles California Temple",
    location: "Los Angeles, California, United States",
    dedicated: "1956, March, 11",
    area: 190614,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  }
];

const templeSection = document.querySelector("#temple-cards");

function displayTemples(list) {
  templeSection.innerHTML = "";

  list.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><span class="label">LOCATION:</span> ${temple.location}</p>
      <p><span class="label">DEDICATED:</span> ${temple.dedicated}</p>
      <p><span class="label">SIZE:</span> ${temple.area.toLocaleString()} sq ft</p>
      
      <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">
      `;
    templeSection.appendChild(card);
  });
}
function getYear(dateString) {
  return parseInt(dateString.split(",")[0]);
}

const navLinks = document.querySelectorAll(".navigation a");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.id;
    let filtered = temples;

    switch (id) {
      case "old":
        filtered = temples.filter(t => getYear(t.dedicated) < 1900);
        break;
      
      case "new":
        filtered = temples.filter(t => getYear(t.dedicated) > 2000);
        break;
      
      case "large":
        filtered = temples.filter(t => t.area > 90000);
        break;

      case "small":
        filtered = temples.filter(t => t.area < 10000);
        break;
      
      case "home":
      default:
        filtered = temples;
        break;
    }
    displayTemples(filtered);

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

displayTemples(temples);
