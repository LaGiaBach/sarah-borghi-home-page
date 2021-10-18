
$(window).ready(function() {
    // home page js
   const popupNewletter = $('#pop-up-new-letter');
   const popupBtn = $('#pop-up-button');
   popupBtn.click(function() {
    popupNewletter.toggleClass('active');
   })
   // category

   const dropDownBtn = $('#dropdown');
   const dropDownBlock = $('#btn-dropdown-block');
   dropDownBtn.click(function() {
    dropDownBlock.toggleClass('btn-dropdown-active');
   })

   //filter dropdown
   const fillterBtnDropdown = $('#fillter-btn-dropdown');
   const fillteBlock = $('#fillter-drop-down-block');
   const closeBtn = $('.close');
   fillterBtnDropdown.click(function() {
    fillteBlock.slideToggle("slow", function() {

    })
   })
   closeBtn.click(function() {
    fillteBlock.slideUp("slow", function() {})
   })
   // reset css mobile container
   
})

