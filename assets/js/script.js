// Variables
var score = 0; // Player's score cannot go below zero
var highScore = 150; // High Score value
var timeLeft = 33; // Time left. Should be penalized for incorrect choices
var index = -1; // index of list questions
// This selects the correct Btn elements (next time give them the El)
var startBtn = document.getElementById("start-quiz");
var questionDis = document.getElementById("questionDisplay");
var scoreBtn = document.getElementById("scoreDisplay");
var highScoreBtn = document.getElementById("highScore");
var option1Btn = document.getElementById("option1");
var option2Btn = document.getElementById("option2");
var option3Btn = document.getElementById("option3");
var option4Btn = document.getElementById("option4");
var tlEl = document.getElementById("timer"); // tlEL stands for time left
var enterName = document.createElement("enterName");

// Question Objects
var q1 = {
    question: "What Hall of Fame Chicago Bear football player wore #54?",
    choices: ["Charles Tillman", "Brian Urlacher", "Dick Butkus", "Walter Payton"],
    answer: "Brian Urlacher"
};
var q2 = {
    question: "What is the name of the stadium of the Chicago Bears?",
    choices: ["United Center", "Midway Stadium", "O'Hare Field", "Soldier Field"],
    answer: "Soldier Field"
};
var q3 = {
    question: "What Hall of Fame Chicago Bear football player wore #34?",
    choices: ["Charles Tillman", "Gale Sayers", "Dick Butkus", "Walter Payton"],
    answer: "Walter Payton"
};
var q4 = {
    question: "What player has the unique record of back to back overtime walkoff interception tds?",
    choices: ["Mike Brown", "William 'the fridge' Perry", "Richard Dent", "Rex Grossman"],
    answer: "Mike Brown"
};
var q5 = {
    question: "What was the last years the Chicago Bears went to the superbowl?",
    choices: ["1985-1986", "2001-2002", "2006-2007", "2011-2012"],
    answer: "2006-2007"
};
var q6 = {
    question: "Who are the Bears rival (longest in NFL history)?",
    choices: ["Detriot Lions", "Minnesota Vikings", "New York Giants", "GreenBay Packers"],
    answer: "GreenBay Packers"
};
var q7 = {
    question: "Which Chicago Bear has scored the most points as a Bear?",
    choices: ["Robbie Gould", "Walter Payton", "Gale Sayers", "George Blanda"],
    answer: "Robbie Gould"
};
var q8 = {
    question: "Which former Bear is currently working for the FBI?",
    choices: ["Tommie Harris", "Brian Urlacher", "Pat Summeral", "Charles Tillman"],
    answer: "Charles Tillman"
};
var q9 = {
    question: "What was Walter Payton's nickname?",
    choices: ["Sweetness", "Cadillac", "The Sultan of Sweat", "Crazy Shoes Payton"],
    answer: "Sweetness"
};
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9]; // List of question objects

// Functions  1:Countdown   2:UpdateQuestion 
function countdown() {
    var timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            tlEl.textContent = timeLeft;
            timeLeft--;
        } else {
            tlEl.textContent = '';// Once `timeLeft` gets to 0, set `timerEl` to an empty string
            // Use `clearInterval()` to stop the timer   .... does this need more?
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000); // One thousand miliseconds is 1 second
}
function questionCheck(elContent) { // Control if question is correct
    console.log(elContent);
    console.log(questions[index].answer);
    console.log(elContent === questions[index].answer);
    if (elContent === questions[index].answer) {
        console.log("I am working! BOOOOOSHH!")
        score += 100;
        timeLeft += 10;
        scoreBtn.textContent = "score: " + score;
    } else {
        console.log("You lose my good sir or ma'dam!")
        score -= 50;
        timeLeft -= 10;
        scoreBtn.textContent = "score: " + score;
    }
}
function endGame() { // End Game function
    document.body.innerHTML = ("Game over! The high score is " + highScore);
    document.body.setAttribute("class", "endGame");
}
function highScore1() {
    highScoreBtn.textContent = highScore;

}
function updateButton() { // update button functions
    index++;
    if (score > highScore) {
        highScore = score;
    }
    highScore1()
    console.log(index);
    if (index >= questions.length - 1) {
        endGame()
    }
    questionDis.textContent = questions[index].question; // Display Question
    option1Btn.textContent = questions[index].choices[0]; // Display option1
    option2Btn.textContent = questions[index].choices[1]; // Display option2
    option3Btn.textContent = questions[index].choices[2]; // Display option3
    option4Btn.textContent = questions[index].choices[3]; // Display option4
    //option1Btn.addEventListener("click", updateButton());
    $(option1Btn).unbind().click(function () {
        questionCheck(option1Btn.textContent)
        updateButton();
    });
    $(option2Btn).unbind().click(function () {
        questionCheck(option2Btn.textContent)
        updateButton();
    });
    $(option3Btn).unbind().click(function () {
        questionCheck(option3Btn.textContent)
        updateButton();
    });
    $(option4Btn).unbind().click(function () {
        questionCheck(option4Btn.textContent)
        updateButton();
    });
    $(highScoreBtn).click(function () {
        highScore1();
    });
}

$(document).ready(function () { // upon document load this function will happen
    $(highScoreBtn).click(function () {
        highScore1();
    });
    $("#start-quiz").click(function () { // WHen I click start quiz do this...
        var playerName1 = $("input[name=enterName]").val();
        if (playerName1 === "") { // A catch or default if people don't insert a name in. 
            playerName1 = "BumbleBee Tuna";
        }
        $("h2").append("Name: " + playerName1); // adds player's name
        $(this).hide(); // hides start button
        $("input").hide(); // hides name textbox
        option1Btn.setAttribute("class", "btnB"); // Shows questions
        option2Btn.setAttribute("class", "btnB"); // Shows questions
        option3Btn.setAttribute("class", "btnB"); // Shows questions
        option4Btn.setAttribute("class", "btnB"); // Shows questions
        scoreBtn.textContent = "score: " + score; // Shows Score
        countdown() // Starts the timer
        updateButton() // Calls itself for every question

        // $(highScoreBtn).click(function () {
        //     highScore1();
        // });
    });
});

