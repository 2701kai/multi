// IMAGE LOADER
let loaderWrapper = document.querySelector(".image-loader-wrapper");
window.addEventListener("load", function () {
  // loaderWrapper.style.display = "none";
  setTimeout(function () {
    loaderWrapper.parentElement.removeChild(loaderWrapper);
  }, 900);
});
