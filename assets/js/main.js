// home page js
  var popupNewletter = $("#pop-up-new-letter");
  var popupBtn = $("#pop-up-button");
  popupBtn.click(function () {
    popupNewletter.toggleClass("active");
  });
  // category

  var dropDownBtn = $("#dropdown");
  var dropDownBlock = $("#btn-dropdown-block");
  dropDownBtn.click(function () {
    dropDownBlock.toggleClass("btn-dropdown-active");
  });

  //filter dropdown
  var fillterBtnDropdown = $("#fillter-btn-dropdown");
  var fillteBlock = $("#fillter-drop-down-block");
  var closeBtn = $(".close");
  fillterBtnDropdown.click(function () {
    fillteBlock.slideToggle("slow", function () {});
    fillterBtnDropdown.toggleClass("active")
  });
  closeBtn.click(function () {
    fillteBlock.slideUp("slow", function () {});
  });
  // status bar prodottom 
  var mainNavTab = $(".main-nav-tabs");
  var subNavTab = $(".sub-nav-tabs");
  mainNavTab.click(function(){
    subNavTab.slideToggle("slow", function(){})
    mainNavTab.toggleClass("active")
  })