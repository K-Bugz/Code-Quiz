// Variables
var score = 0; // Max value by decreasing each wrong answer
var highScore = 50; // Score add fix for ticking timer.
var timeLeft = 60;
// Btn elements
var startBtn = document.getElementById("start");
var option1Btn = document.getElementById("option1");
var option2Btn = document.getElementById("option2");
var option3Btn = document.getElementById("option3");
var option4Btn = document.getElementById("option4");
var highScoreBtn = document.getElementById("highScore");
var timeLeft = document.getElementById("timeLeft");
var questionDis = document.createElement("questionDis");
var enterName = document.createElement("enterName");


// Do not display anything that is not ready to be displayed
option1Btn.style.display = "none";
option2Btn.style.display = "none";
option3Btn.style.display = "none";
option4Btn.style.display = "none";
enterName.style.display = "none";
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