$(function(){
  $(".questions").hide();
  $(".results").hide();

  $("button#start").click(function() {
    $(".intro").hide();
    $(".questions").show();
  });


});
