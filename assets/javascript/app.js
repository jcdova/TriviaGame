
//variables

var countdownTimer = 0;
var seconds = 59;

//initialize variables
var rightAnswers = 0;
var wrongAnswers = 0;
var notAnswered = 12;
var userAnswers= [];

//array of correct answers to all questions
// var qAnswers = ["b. Slightly drunk", "a. Dice", "d. The night"];

var qAnswers = ["b. Slightly drunk", "a. Dice", "d. The night", "c. huge feet", "a. Beer",
 "c. breaking habits", "b. Shock", "d. The fear of overworking", "a. The medical system",
  "c. The middle finger", "b. Hearing", "c. Farming"];

$(document).ready(function(){

$("#hideAll").load("load", function() {
	$("#time").hide();
    $("#StartButton").show();
    $("#questionsContainer").hide();
    $("#doneButton").hide();
    $("#allDone").hide();
});


$("#startButton").on("click", function() {
	countdownTimer = setInterval(secondPassed, 1000);
	secondPassed(); 
	$("#questionsContainer").show();
	$("#time").show();
	$("#startButton").hide();
	$("#doneButton").show();     
});

$("#doneButton").on("click", function() {
	clearInterval(countdownTimer);
	$("#totalCorrect").html("<h2>" + "Correct Answers: " + rightAnswers + "</h2>");
	$("#totalWrong").html("<h2>" + "Incorrect Answers: " + wrongAnswers + "</h2>");
	$("#totalUnanswered").html("<h2>" + "Unanswered: " + wrongAnswers + "</h2>"); 
	$("#questionsContainer").hide();   
	$("#time").hide();
	$("#startButton").hide();
	$("#doneButton").hide();
	$("#allDone").show();
	userInput();
	getAnswers();
	
});

// countdown timer 
// this sets the time limit  at 1 mim to finish the quiz
// The game ends when the time runs out 
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    $("#display").html("<h2><strong>" + "Time Remaining: " + minutes + ":" + remainingSeconds + "<strong></h2>");
    if (seconds == 0) {
        clearInterval(countdownTimer);
        $("#display").html("<h2><strong>" + "Times Up!" + "</strong></h2>");
        $("#questionsContainer").hide();
		$("#time").show();
		$("#startButton").hide();
		$("#doneButton").hide();
		$("#allDone").show();
		userInput();
		getAnswers();   
    } else {
        seconds--;
    }
};
 

function userInput() {
    var answer1 = ($('input:radio[name=q1]:checked').val());
    var answer2 = ($('input:radio[name=q2]:checked').val());
    var answer3 = ($('input:radio[name=q3]:checked').val());
    var answer4 = ($('input:radio[name=q4]:checked').val());
    var answer5 = ($('input:radio[name=q5]:checked').val());
    var answer6 = ($('input:radio[name=q6]:checked').val());
    var answer7 = ($('input:radio[name=q7]:checked').val());
    var answer8 = ($('input:radio[name=q8]:checked').val());
    var answer9 = ($('input:radio[name=q9]:checked').val());
    var answer10 = ($('input:radio[name=q10]:checked').val());
    var answer11 = ($('input:radio[name=q11]:checked').val());
    var answer12 = ($('input:radio[name=q12]:checked').val());

    userAnswers.push(answer1);
    userAnswers.push(answer2);
    userAnswers.push(answer3);
    userAnswers.push(answer4);
    userAnswers.push(answer5);
    userAnswers.push(answer6);
    userAnswers.push(answer7);
    userAnswers.push(answer8);
    userAnswers.push(answer9);
    userAnswers.push(answer10);
    userAnswers.push(answer11);
    userAnswers.push(answer12);

    console.log(userAnswers);
 };


// This will reveal the number of questions that players answer correctly and incorrectly.
function getAnswers() {
  for (var i = 0; i < qAnswers.length; i++) { 
        if (qAnswers[i] === userAnswers[i]) {
               rightAnswers++;
               notAnswered--;
               // alert("correct!");   
        } else {
            wrongAnswers++;
 			notAnswered--;
 			// alert("Not Correct!");
      }
  }    
  $("#totalCorrect").html("<h2>" + "Correct Answers: " + rightAnswers + "</h2>");
  $("#totalWrong").html("<h2>" + "Incorrect Answers: " + wrongAnswers + "</h2>");
  $("#totalUnanswered").html("<h2>" + "Unanswered: " + wrongAnswers + "</h2>");   
};


});

	
