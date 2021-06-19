// Scroll Indicator
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
}
// Hamburger Menu
const menu = document.querySelector("#mobileMenu");
const menuLinks = document.querySelector(".navbarMenu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
//google-sheet

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzLy_54uk5RmSSR8pAdzRbh_S-WJd0FM3LeFi24ifGkSXlg4iC1glYC7ioZy-_JdyWt/exec";
const form = document.forms["googleSheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});
