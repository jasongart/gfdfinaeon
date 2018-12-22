//Dynamically pulls current year into copyright footer text
var year = new Date().getFullYear();
document.getElementById("copyrightFooter").innerHTML = "&copy; " + year + " Global Financial Data. All rights reserved.";


//Full screen width dropdowns for non-mobile

var dropWideMenu = document.querySelectorAll(".fullWidthDrop");
var dropDownButton = document.querySelectorAll(".dropButton");

$(dropDownButton).each(function(index){
  var menuShow = dropWideMenu[index];
  var dropBut = dropDownButton[index];

//This shows the menu
    $(this).mouseenter(function(){
      $(menuShow).show();
      $(dropBut).css({"color": "#13a79d", "border-bottom": "7px solid #13a79d"});
      });

      $(this).mouseleave(function(){
        $(dropBut).css({"color": "initial", "border-bottom": "none"});
        $(menuShow).hide();

        });
//This prevents the menu from hiding on mouseleave from menu item

      $(menuShow).mouseenter(function(){
        $(this).show();
        $(dropBut).css({"color": "#13a79d", "border-bottom": "7px solid #13a79d"});
      });


//This hides menu from anywhere the mouse leaves it
      $(menuShow).mouseleave(function(){
        $(this).hide();
        $(dropBut).css({"color": "initial", "border-bottom": "none"});
      });

});
