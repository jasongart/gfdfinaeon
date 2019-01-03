var alertBoxBus = document.getElementById("checkboxAlertBus");
var alertBoxAca = document.getElementById("checkboxAlertAca");


$('.modal').on('hidden.bs.modal', function () {
  console.log("form reset");
  $(alertBoxBus).hide();
  $(alertBoxBus).css("height","0px");
  $(alertBoxAca).hide();
  $(alertBoxAca).css("height","0px");
  $(".form-check-label").css("font-weight", "normal");
  $(".form-check-input").prop("checked", false);
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
        $(alertBoxBus).css("height","40px");
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
        $(alertBoxAca).css("height","40px");
        $(".form-check-label").css("font-weight", "bold");
    }
});


$(".form-check-label").click(function(){
    if ($(".form-check-input").is(":checked")){
        $(".form-check-input").prop("checked", false);
    }
    else{
    $(".form-check-input").prop("checked", true);
}
    // console.log("check test 1 2 1 2")
});

// $(".decline, .close").click(function(){
//   console.log("form reset")
//   $(alertBoxBus).hide();
//   $(alertBoxBus).css("height","0px");
//   $(alertBoxAca).hide();
//   $(alertBoxAca).css("height","0px");
//   $(".form-check-label").css("font-weight", "normal");
// });
