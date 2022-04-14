// Question Objects and array
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
var q10 = {
    question: "The bears unfortanelty are the only team in the SuperBowl era to punt on every single ofensive series. What year did this occur?",
    choices: ["1995", "1997", "2015", "2017"],
    answer: "2015"
};
var q11 = {
    question: "What year was Brian Urlacher drafted to the Chicago Bears?",
    choices: ["1998", "1999", "2000", "2001"],
    answer: "2000"
};
var q12 = {
    question: "What year did the Bears play in Champaign Illinois at the Univeristy of Illinois?",
    choices: ["2000", "2001", "2002", "2003"],
    answer: "2002"
};
var q13 = {
    question: "How many career forced fumbles does Charles Tillman have?",
    choices: ["38", "44", "42", "44"],
    answer: "44"
};
var q14 = {
    question: "What was the last year Mike Brown played all 16 games for the Bears. (He did play all 16 games for Kansas city in 2009)?",
    choices: ["2003", "2005", "2007", "2008"],
    answer: "2003"
};
var q15 = {
    question: "What Bears QB has the most wins for the Bears?",
    choices: ["Mike Tomczak", '"Smoking" Jay Cutler', "Jim Mcmahon", "Mitchell Trubisky"],
    answer: "Mike Tomczak"
};
var q16 = {
    question: "What Bears has the most wins and games suited up?",
    choices: ["Kevin Butler", "Richard Dent", "Walter Payton", "Patrick Mannelly"],
    answer: "Patrick Mannelly"
};
var q17 = {
    question: "How many seasons was George Halas the head coach?",
    choices: ["25", "30", "35", "40"],
    answer: "40"
};
var q18 = {
    question: "What Bear had 6 TDs in one game?",
    choices: ["Gale Sayers", "Walter Payton", "Neal Anderson", "Thomas Jones"],
    answer: "Gale Sayers"
};
var q19 = {
    question: "What Bear threw 7 TDs in one game?",
    choices: ["Jay Cutler", "Sid Luckman", "Jim Harbaugh", "Jim McMahon"],
    answer: "Sid Luckman"
};
var q20 = {
    question: "What Bear what defensive player of the year twice?",
    choices: ["Brian Urlacher", "Mike Singletary", "Richard Dent", "Dick Butkus"],
    answer: "Mike Singletary"
};
var q21 = {
    question: "What Bear what defensive player of the year and defensive rookie of the year?",
    choices: ["Brian Urlacher", "Mike Singletary", "Richard Dent", "Dick Butkus"],
    answer: "Brian Urlacher"
};

var questionsUnsorted = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21]; // List of question objects

var questions = _.shuffle(questionsUnsorted);