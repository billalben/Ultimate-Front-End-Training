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
