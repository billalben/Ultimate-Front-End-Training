("use strict");

const toggleButton = document.querySelector(".toggle-sidebar");
const contentArea = document.querySelector(".content-aria");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", () => {
  contentArea.classList.toggle("no-sidebar");
  sidebar.classList.toggle("no-sidebar");
});
