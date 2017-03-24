$(function(){
  $(".questions").hide();
  $(".results").hide();

  $("button#start").click(function() {
    $(".intro").hide();
    $(".questions").show();
  });

  $("button#submit").click(function() {
    var answer1 = parseInt($("input[name=question1]:checked").val());
    var answer2 = parseInt($("input[name=question2]:checked").val());
    var answer3 = parseInt($("input[name=question3]:checked").val());
    var answer4 = parseInt($("input[name=question4]:checked").val());
    var answer5 = parseInt($("input[name=question5]:checked").val());
    
  });

});
