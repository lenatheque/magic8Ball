$(document).ready(function(){
  
var magic8ball = {};
  
magic8ball.listOfAnswers = ["Yes", "No", "Maybe", "Ask again later", "In your dreams", "It is certain", "Why not?", "I have no clue"];

// define the method
 magic8ball.askQuestion= function(question) { 
   
   // create a random number
      var randomNumber = Math.random();
      var randomAnswer = Math.floor(randomNumber * this.listOfAnswers.length);
    var randomIndex = Math.floor(randomAnswer);
      var answer = this.listOfAnswers[randomIndex];
 
      $("#answer").hide();
      $("#8ball").effect( "shake");   
      
      $("#answer").fadeIn(4000);
 $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
      $("#answer").text( answer );
   
   console.log(question);
   console.log(answer);
}; 
  var onClick = function() {  
        
        	
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");

    //wait half a second before showing prompt
setTimeout(function() {
//show prompt

      var question = prompt("Ask a yes or no question");

           magic8ball.askQuestion(question);

       }, 500);
  
  };
        $("#questionButton").click(onClick);
  
