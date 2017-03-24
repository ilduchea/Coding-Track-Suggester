$(function(){

  $(".questions").hide();
  $(".results").hide();

  $("button#start").click(function() {
    var nameLength = parseInt($("#name").val().length);
    if (nameLength > 0) {
      $(".intro").hide();
      $(".questions").slideDown();
      $("input[type=radio]:checked + .blue_dot").addClass("blue_fill");
    } else {
      $("label").addClass("red");
      $(".error").text("Required Field.");
    }
  });

  $("input[type=radio]").click(function(){
    $(".blue_dot").removeClass("blue_fill");
    $("input[type=radio]:checked + .blue_dot").addClass("blue_fill");
  });

  $("button#submit").click(function() {
    var answer1 = parseInt($("input[name=question1]:checked").val());
    var answer2 = parseInt($("input[name=question2]:checked").val());
    var answer3 = parseInt($("input[name=question3]:checked").val());
    var answer4 = parseInt($("input[name=question4]:checked").val());
    var answer5 = parseInt($("input[name=question5]:checked").val());
    var usersName = $("#name").val();
    var totalAnswer = answer1 + answer2 + answer3 + answer4 + answer5;

    var result = function(id, track) {
      $(".questions").hide();
      $(id).show();
      $("#result-name").text(track);
    };

    $(".results").slideDown();
    $("#users-name").text(usersName);

    if (totalAnswer <= 8) {
      result("#CSS", "CSS/Design");
    } else if (totalAnswer <= 12) {
      result("#C-Sharp", "C#/.NET");
    } else if (totalAnswer <= 17) {
      result("#Java", "Java/Android");
    } else if (totalAnswer <= 20) {
      result("#Ruby", "Ruby/Rails");
    } else if (totalAnswer <= 25) {
      result("#PHP", "PHP/Durpal");
    };
  });

});
