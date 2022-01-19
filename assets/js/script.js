// Variables
var score = 0; // Player's score cannot go below zero
var highScore = 0; // High Score value
var timeLeft = 60; // Time left. Should be penalized for incorrect choices
// Btn elements
var startBtn = document.getElementById("start-quiz");
var option1Btn = document.getElementById("option1");
var option2Btn = document.getElementById("option2");
var option3Btn = document.getElementById("option3");
var option4Btn = document.getElementById("option4");
var highScoreBtn = document.getElementById("highScore");
var timeLeftEl = document.getElementById("timer");
var questionDis = document.createElement("questionDis");
var enterName = document.createElement("enterName");
// Question Objects
var q1 = {
    question: "What Hall of Fame Chicago Bear football player wore #54?",
    choices: ["Charles Tillman", "Brian Urlacher", "Dick Butkus", "Walter Payton"],
    answer: "Brian Urlacher",
    theyGotCorrect: false
}
var q2 = {
    question: "What is the name of the stadium of the Chicago Bears?",
    choices: ["United Center", "Midway Stadium", "O'Hare Field", "Soldier  Field"],
    answer: "Soldier  Field",
    theyGotCorrect: false
}
var q3 = {
    question: "What Hall of Fame Chicago Bear football player wore #34?",
    choices: ["Charles Tillman", "Gale Sayers", "Dick Butkus", "Walter Payton"],
    answer: "Walter Payton",
    theyGotCorrect: false
}
var q4 = {
    question: "What player has the unique record of back to back overtime walkoff interception tds?",
    choices: ["Mike Brown", "William 'the fridge' Perry", "Richard Dent", "Rex Grossman"],
    answer: "Mike Brown",
    theyGotCorrect: false
}
var q5 = {
    question: "What was the last years the Chicago Bears went to the superbowl?",
    choices: ["1985-1986", "2001-2002", "2006-2007", "2011-2012"],
    answer: "2006-2007",
    theyGotCorrect: false
}
var q6 = {
    question: "Who are the Bears rival (longest in NFL history)?",
    choices: ["Detriot Lions", "Minnesota Vikings", "New York Giants", "GreenBay Packers"],
    answer: "GreenBay Packers",
    theyGotCorrect: false
}
var q6 = {
    question: "Who are the Bears rival (longest in NFL history)?",
    choices: ["Detriot Lions", "Minnesota Vikings", "New York Giants", "GreenBay Packers"],
    answer: "GreenBay Packers",
    theyGotCorrect: false
}
var q7 = {
    question: "Which Chicago Bear has scored the most points as a Bear?",
    choices: ["Robbie Gould", "Walter Payton", "Gale Sayers", "George Blanda"],
    answer: "Robbie Gould",
    theyGotCorrect: false
}
var q8 = {
    question: "Which former Bear is currently working for the FBI?",
    choices: ["Tommie Harris", "Brian Urlacher", "Pat Summeral", "Charles Tillman"],
    answer: "Charles Tillman",
    theyGotCorrect: false
}
var q9 = {
    question: "What was Walter Payton's nickname?",
    choices: ["Sweetness", "Cadillac", "The Sultan of Sweat", "Crazy Shoes Payton"],
    answer: "Sweetness",
    theyGotCorrect: false
}
// List of question objects
var questions = [q1, q2, q3, q4, q5, q5, q6, q7, q8, q9];

// Player Object (make sure to make functions)
var playerInfo = {
    // name: getPlayerName(),
    // points: getPlayerPoints()
};

function countdown() {
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timeLeftEl.textContent = timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timeLeftEl.textContent = timeLeft;
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timeLeftEl.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            displayMessage();
        }
    }, 1000);
}
$(document).ready(function () { // upon document load this function will happen
    $("#start-quiz").click(function () { // WHen I click start quiz do this...
        var playerName1 = $("input[name=enterName]").val();
        $("h2").append(playerName1); // adds player's name
        $(this).hide(); // hides button
        $("input").hide(); // hides name textbox

        // Start timer
        countdown()

        //Generate Questions
        for (let i = 0; i < questions.length; i++) {
            // iterate through each question
            // console.log(questions[i].question);
            // console.log(JSON.stringify(questions[i]));
            questionDis.textContent = questions[i].question;
            questionDis.append(questionDis);
        }

    });
});
