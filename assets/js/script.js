// Variables
var score = 0; // Player's score cannot go below zero
var highScore = 150; // High Score value
var timeLeft = 33; // Time left. Should be penalized for incorrect choices
var index = -1; // index of list questions
// These selects the correct Btn elements (next time give them the El)
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

// Functions  1:Countdown   2:Question Check   3: EndGame
function countdown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) { // As long as the `timeLeft` is greater than 1
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
        console.log("I am working! BOOOOOSHH!");
        score += 100;
        timeLeft += 6;
        scoreBtn.textContent = "score: " + score;
    } else {
        console.log("You lose my good sir or ma'dam!")
        score -= 50;
        timeLeft -= 6;
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
        audio.play();
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

