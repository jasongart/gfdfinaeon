//THIS WORKS!

//finds all instances of the dropdown menu item and the dropdown menu in the code
var dropWideMenu = document.querySelectorAll(".fullWidthDrop");
var dropDownButton = document.querySelectorAll(".dropButton");

//runs this function through each dropdown menu item, passes the argument index
//so that the function runs on one index item at a time


$(dropDownButton).each(function(index){
//variables to store the index of the buttons and menus to prevent
//from typing [index] all over this code
  var menuShow = dropWideMenu[index];
  var dropBut = dropDownButton[index];

//Clears out classes that bring out the menu and any
//menus showing already this code must run first
  $(this).mouseleave(function(){
    for (var i = 0; i < dropDownButton.length; i++) {
      $(dropBut).removeClass(".dropActive");
      $(menuShow).removeClass(".dropWideShow");
      $(menuShow).hide();

    if($(dropBut).hasClass(".dropActive") && $(menuShow).hasClass(".dropWideShow")){
      console.log("for loop NOT working");
      }
    else{console.log("for loop does work");  }
    }
  });


//This shows the menu
    $(this).mouseenter(function(){
      $(this).addClass(".dropActive");
        if($(this).hasClass(".dropActive")){
          $(menuShow).addClass(".dropWideShow");
          console.log("dropActive class added to " + index);
        }

        if ($(menuShow).hasClass(".dropWideShow")){
            $(menuShow).show();
            console.log("menushow has dropwideshow " + index);
          }
      });



//This prevents the menu from hiding on mouseleave from menu item
      $(menuShow).mouseenter(function(){
        $(this).show();
      });

//This hides menu from anywhere the mouse leaves it
      $(menuShow).mouseleave(function(){
        $(this).hide();
        console.log("menushow removed dropwideshow for " + index);
      });

});
