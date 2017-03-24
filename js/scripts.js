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

    var totalAnswer = answer1 + answer2 + answer3 + answer4 + answer5;
    console.log(totalAnswer);

    $(".results").slideDown();

    if (totalAnswer <= 6) {
      $(".questions").hide();
      $("#C-Sharp").show();
      $("#result-name").text("C-Sharp");
    } else if (totalAnswer <= 10) {
      $(".questions").hide();
      $("#Java").show();
      $("#result-name").text("Java");
    } else if (totalAnswer <= 14) {
      $(".questions").hide();
      $("#PHP").show();
      $("#result-name").text("PHP");
    } else if (totalAnswer <= 17) {
      $(".questions").hide();
      $("#Ruby").show();
      $("#result-name").text("Ruby");
    } else if (totalAnswer <= 20) {
      $(".questions").hide();
      $("#CSS").show();
      $("#result-name").text("CSS");
    };

  });

});
