var alertBoxBus = document.getElementById("checkboxAlertBus");
var alertBoxAca = document.getElementById("checkboxAlertAca");

$('.modal').on('hidden.bs.modal', function () {
  console.log("form reset");
  $(alertBoxBus).hide();
  $(alertBoxBus).css("height","0px");
  $(alertBoxAca).hide();
  $(alertBoxAca).css("height","0px");
  $(".form-check-label").css("font-weight", "normal");
});

$("#acceptBusiness").click(function(e){
    if(document.getElementById("businessCheck").checked){
        $(".selAcctType").hide();
        $(".banner").hide();
        $(".businessForm").show();
        $(this).attr('data-dismiss', 'modal');
        window.scrollTo(0, 0);
    }
    else{
        $(alertBoxBus).show();
        $(alertBoxBus).css("height","30px");
        $(".form-check-label").css("font-weight", "bold");

    }
});

$("#acceptAcademic").click(function(e){
    if(document.getElementById("academicCheck").checked){
        $(".selAcctType").hide();
        $(".banner").hide();
        $(".academicForm").show();
        $(this).attr('data-dismiss', 'modal');
        window.scrollTo(0, 0);
        }
    else{
        $(alertBoxAca).show();
        $(alertBoxAca).css("height","30px");
        $(".form-check-label").css("font-weight", "bold");
    }
});


// $(".decline, .close").click(function(){
//   console.log("form reset")
//   $(alertBoxBus).hide();
//   $(alertBoxBus).css("height","0px");
//   $(alertBoxAca).hide();
//   $(alertBoxAca).css("height","0px");
//   $(".form-check-label").css("font-weight", "normal");
// });
