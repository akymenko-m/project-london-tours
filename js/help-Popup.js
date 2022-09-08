(function() {
    const helpWindowPopup = document.querySelector(".need-help-window");
    const openHelpBtn = document.querySelector(".need-help__popup");
    const closeHelpBtn = document.querySelector(".close-help-window");
    
    function openHelpWindow(wi) {
        helpWindowPopup.classList.toggle("show-help-window");
        wi.stopPropagation();
    }
    
    openHelpBtn.addEventListener("click", openHelpWindow);
    closeHelpBtn.addEventListener("click", openHelpWindow);
    helpWindowPopup.addEventListener("click", openHelpWindow);
})();