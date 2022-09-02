(function () {
  const pricingPopupWindow = document.querySelector(".book__tour-popup-window");
  const openPopupBtn = document.querySelectorAll(".open-popup");
  const closeBtnPopup = document.querySelector(".close-button-popup");

  function openPopup(el) {
    pricingPopupWindow.classList.toggle("show-modal");
    el.stopPropagation();
  }

  openPopupBtn.forEach((btn) => {
    btn.addEventListener("click", openPopup);
  });

  closeBtnPopup.addEventListener("click", openPopup);
})();
