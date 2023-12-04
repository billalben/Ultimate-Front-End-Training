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
