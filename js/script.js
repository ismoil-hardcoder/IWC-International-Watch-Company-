const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", () => {
  if (
    searchInput.style.display === "none" ||
    searchInput.style.display === ""
  ) {
    searchInput.style.display = "inline-block";
    searchInput.focus();
  } else {
    searchInput.style.display = "none";
  }
});

function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "0";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);

// Buttonni oling
const backToTopButton = document.getElementById("backToTop");

// Scroll qilganda ko‘rsatish
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopButton.style.opacity = "1";
  } else {
    backToTopButton.style.opacity = "0";
  }
};

// Tugma bosilganda yuqoriga scroll
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const brands = [
  "Rolex",
  "Omega",
  "Casio",
  "Seiko",
  "Tissot",
  "Fossil",
  "Swatch",
  "Citizen",
  "Tag Heuer",
  "Patek Philippe",
  "Breitling",
  "Hublot",
  "Cartier",
  "Longines",
  "Hamilton",
  "Movado",
  "Rado",
  "Invicta",
  "Bulova",
  "Chopard",
];

const input = document.getElementById("brand-input");
const button = document.getElementById("search-button");
const results = document.getElementById("results");

function showResults() {
  const query = input.value.toLowerCase();
  const filtered = brands.filter((b) => b.toLowerCase().includes(query));

  // Tozalash
  results.innerHTML = "";

  if (filtered.length === 0) {
    results.innerHTML = `<div>Hech narsa topilmadi 😢</div>`;
    return;
  }

  filtered.forEach((b) => {
    const div = document.createElement("div");
    div.textContent = b;
    results.appendChild(div);

    // Har bir brandni bosganda inputga tushadi
    div.addEventListener("click", () => {
      input.value = b;
      results.innerHTML = "";
    });
  });
}

input.addEventListener("input", showResults);
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") showResults();
});
button.addEventListener("click", showResults);
