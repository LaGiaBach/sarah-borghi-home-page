$(window).ready(function() {
  // home page js
 var popupNewletter = $('#pop-up-new-letter');
 var popupBtn = $('#pop-up-button');
 popupBtn.click(function() {
  popupNewletter.toggleClass('active');
 })
 // category

 var dropDownBtn = $('#dropdown');
 var dropDownBlock = $('#btn-dropdown-block');
 dropDownBtn.click(function() {
  dropDownBlock.toggleClass('btn-dropdown-active');
 })

 //filter dropdown
 var fillterBtnDropdown = $('#fillter-btn-dropdown');
 var fillteBlock = $('#fillter-drop-down-block');
 var closeBtn = $('.close');
 fillterBtnDropdown.click(function() {
  fillteBlock.slideToggle("slow", function() {

  })
 })
 closeBtn.click(function() {
  fillteBlock.slideUp("slow", function() {})
 })
 var btnDropDownMenu = $('.main-menu-drop-down');
 var subMenuBlock = $('.sub-menu');
 btnDropDownMenu.click(function(){
   console.log(Math.random());
  subMenuBlock.slideToggle("slow", function() {})
 })
})