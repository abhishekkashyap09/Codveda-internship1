// Show "Back to Top" button
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

// Scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
