
var dropWideMenu = document.querySelectorAll(".fullWidthDrop");
var dropDownButton = document.querySelectorAll(".dropButton");

$(dropDownButton).each(function(index){
  var menuShow = dropWideMenu[index];
  var dropBut = dropDownButton[index];


//Clears out classes that bring out the menu and
//any menus showing already this code must run first

  $(this).mouseleave(function(){
      for (var i = 0; i < dropDownButton.length; i++) {
        $(dropBut).removeClass(".dropActive");
        $(dropBut).css({"color": "initial", "border-bottom": "none"});
        $(menuShow).removeClass(".dropWideShow");
        $(menuShow).hide();
      }
    });


//This shows the menu
    $(this).mouseenter(function(){
      $(this).addClass(".dropActive");
        if($(this).hasClass(".dropActive")){
          $(menuShow).addClass(".dropWideShow");
          }
        if ($(menuShow).hasClass(".dropWideShow")){
          $(menuShow).show();
          $(dropBut).css({"color": "#13a79d", "border-bottom": "7px solid #13a79d"});
          }
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
