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

// Search tugmasini bosganda ishlaydi
document.getElementById("searchBtn").addEventListener("click", function () {
  let input = document.getElementById("searchInput").value;
  if (input.trim() !== "") {
    alert("You searched for: " + input);
  } else {
    alert("Please type something to search 😊");
  }
});
document.getElementById("searchBtn").addEventListener("click", function () {
  let input = document.getElementById("searchInput").value;
  if (input.trim() !== "") {
    alert("You searched for: " + input);
  } else {
    alert("Please type something to search 😊");
  }
});

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      document.getElementById("searchBtn").click();
    }
  });

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
