(function () {
  const tourPopupWindow = document.querySelector(".book__tour-popup-window");
  const openPopupBtn = document.querySelector(".open-popup");
  const closeBtnPopup = document.getElementById("close-button-popup");

  function openPopup(el) {
    tourPopupWindow.classList.toggle("show-modal");
    el.stopPropagation();
  }

  openPopupBtn.addEventListener("click", openPopup);

  closeBtnPopup.addEventListener("click", openPopup);
})();
