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

// ---------------------------------------
// toggle settings

const toggleSettings = document.querySelector(".toggle-settings");

toggleSettings.addEventListener("click", function () {
  this.firstElementChild.classList.toggle("fa-spin");
  this.parentElement.classList.toggle("show-settings-box");
});

// ---------------------------------------
// switch color themes

const colorOptions = document.querySelectorAll(".color-options li");
const themesClasses = [];

colorOptions.forEach((colorOption) => {
  themesClasses.push(colorOption.getAttribute("data-theme"));
});

colorOptions.forEach((colorOption) => {
  colorOption.addEventListener("click", function () {
    //
    colorOptions.forEach( (colorOption) => {
      colorOption.classList.remove("active");
    });
    colorOption.classList.add("active");

    document.body.classList.remove(...themesClasses);
    document.body.classList.add(this.getAttribute("data-theme"));
  });
});
