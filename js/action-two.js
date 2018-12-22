// var dropWideButton = document.querySelectorAll(".dropWideButton");
var dropWideMenu = document.querySelectorAll(".fullWidthDrop");
var dropDownButton = document.querySelectorAll(".dropButton");

// $(dropDownButton).each(function(index){
//
//   var menuShow = dropWideMenu[index];
//   var dropBut = dropDownButton[index];
//
//   $(this).mouseenter(function(event){
//         $(this).addClass("dropActive");
//             if ($(this).hasClass("dropActive")){
//             $(menuShow).show();
//           }
//         });
//
//
//
//
// });


$(dropDownButton).hover(function(){

  switch(dropWideMenu.id){

    case "capabilitiesMenu":
      for (var i = 0; i < dropDownButton.length; i++) {
        $(dropWideMenu).removeClass(".dropWideShow")
        }
      $("#capabilitiesMenu").addClass(".dropWideShow");
        console.log("capabilities menu dropped");
      break;

    case "solutionsMenu":
      for (var i = 0; i < dropDownButton.length; i++) {
        $(dropWideMenu).removeClass(".dropWideShow")
        }
      $("#solutionsMenu").addClass(".dropWideShow");
      console.log("solutions menu dropped");
      break;
    }

console.log("dropDownButton hover works");

});




// var dropWideButton = document.querySelectorAll(".dropWideButton");
var dropWideMenu = document.querySelectorAll(".fullWidthDrop");
var dropDownButton = document.querySelectorAll(".dropButton");

$(dropDownButton).each(function(index){
  var menuShow = dropWideMenu[index];
  var dropBut = dropDownButton[index];

  $(this).mouseenter(function(event){
        $(this).addClass("dropActive");
        $(this).removeClass("dropInactive");
          if ($(this).hasClass("dropActive")){
            // $(menuShow).show();
            $(menuShow).addClass(".dropWideShow");
          }

          if ($(menuShow).hasClass(".dropWideShow")){
            $(menuShow).show();
            console.log("menushow has dropwideshow" + index);
          }
        });

        $(this).mouseleave(function(event){
          if($(event.target).hasClass("dropActive")){
            $(menuShow).hide();
          }
          else{
            $(menuShow).hide();
          }
        });

        $(menuShow).mouseleave(function(event){
          $(this).hide();
        });

});
