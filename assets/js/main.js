$(window).ready(function() {
   const popupNewletter = $('#pop-up-new-letter');
   const popupBtn = $('#pop-up-button');
   popupBtn.click(function() {
    popupNewletter.toggleClass('active');
   })
})