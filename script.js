$(document).ready(function() {
  var magic8Ball = {};

  magic8Ball.listOfAnswers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes ~ definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];

  $("#answer").hide();

  var onClick = function() {
    $("#answer").hide();

    $("#eightball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");

    setTimeout( function() {
      var question = prompt("ASK A YES/NO QUESTION!");
      $("#eightball").effect("shake");

      magic8Ball.askMagic8Ball(question);

    }, 500);
  };

  magic8Ball.askMagic8Ball = function(question) {
    $("#eightball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");

    $("#answer").fadeIn(4000);

    var randomNumber = Math.random() * this.listOfAnswers.length;
    var randomIndex = Math.floor(randomNumber);

    $("#answer").text(this.listOfAnswers[randomIndex] + ".");
  };

  $("#questionButton").click(onClick);
});
