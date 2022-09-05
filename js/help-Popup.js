(function() {
    const modal = document.querySelector(".need-help-window");
    const trigger = document.querySelector(".need-help__popup");
    const closeButton = document.querySelector(".close-help-window");
    
    function toggleModal(ev) {
        modal.classList.toggle("show-modal");
        ev.stopPropagation();
    }
    
    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    modal.addEventListener("click", toggleModal);
})();