("use strict");

const toggleButton = document.querySelector(".toggle-sidebar");
const contentArea = document.querySelector(".content-aria");
const sidebar = document.querySelector(".sidebar");

toggleButton.addEventListener("click", () => {
  contentArea.classList.toggle("no-sidebar");
  sidebar.classList.toggle("no-sidebar");
});

// -------------------------
const dropMenus = document.querySelectorAll(".drop-menu");

dropMenus.forEach((dropMenu) => {
  const iconToggleSubmenu = dropMenu.querySelector(".toggle-submenu");
  const childLinks = dropMenu.parentElement.nextElementSibling;

  dropMenu.addEventListener("click", () => {
    iconToggleSubmenu.classList.toggle("down");

    if (childLinks) {
      childLinks.classList.toggle("open");
    }
  });
});

// ------------------------------
/* Get the documentElement (<html>) to display the page in fullscreen */
const openCloseFullscreen = document.querySelector(".toggle-fullscreen");

openCloseFullscreen.addEventListener("click", function () {
  this.classList.toggle("full-screen");

  if (this.classList.contains("full-screen")) {
    openFullscreen();
  } else {
    closeFullscreen();
  }
});

const elem = document.documentElement;

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
