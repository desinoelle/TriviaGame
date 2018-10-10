//Object containing questions and answers
var theQuestions = {
    question1: {
        question: "Where does the show take place?",
        answers: {
            a: "A: Kansas",
            b: "B: Indiana",
            c: "C: Mississippi",
            d: "D: Oklahoma",
        },
        correctAnswer: "b"
    },
    question2: {
        question: "What game are the boys always playing?",
        answers: {
            a: "A: Dungeons & Dragons",
            b: "B: Super Mario Bros",
            c: "C: The Legend of Zelda",
            d: "D: Pac-Man",
        },
        correctAnswer: "a"
    },
    question3: {
        question: "What is Eleven's favorite food?",
        answers: {
            a: "A: Frosted Flakes",
            b: "B: Pop-Tarts",
            c: "C: Eggos",
            d: "D: Twinkies",
        },
        correctAnswer: "c"
    },
    question4: {
        question: "Who is the first character to die in the series?",
        answers: {
            a: "A: Nancy",
            b: "B: Barb",
            c: "C: Will",
            d: "D: Jonathon",
        },
        correctAnswer: "b"
    },
    question5: {
        question: "How does Joyce communicate with Will when he goes missing?",
        answers: {
            a: "A: By painting on the walls",
            b: "B: Through a mirror",
            c: "C: On her cell phone",
            d: "D: With Christmas lights",
        },
        correctAnswer: "d"
    },
    question6: {
        question: "What parallel dimension does Will go missing in?",
        answers: {
            a: "A: The Upside Down",
            b: "B: The Other Place",
            c: "C: The Dark World",
            d: "D: The Cold Land",
        },
        correctAnswer: "a"
    },
    question7: {
        question: "What do the boys dress up as for Halloween?",
        answers: {
            a: "A: Ghostbusters",
            b: "B: Star Wars characters",
            c: "C: Their Dungeons & Dragons characters",
            d: "D: Teletubbies",
        },
        correctAnswer: "a"
    },
    question8: {
        question: "What are Will's visions from the Shadow Monster called?",
        answers: {
            a: "A: Now Moments",
            b: "B: Now Memories",
            c: "C: Shadow Memories",
            d: "D: Monster Visions",
        },
        correctAnswer: "b"
    },
    question9: {
        question: "What is the name of the monster from Season One?",
        answers: {
            a: "A: Dark Demon",
            b: "B: Mind Slayer",
            c: "C: Demogorgon",
            d: "D: Shadow Monster",
        },
        correctAnswer: "c"
    },
    question10: {
        question: "How does the gang get the Shadow Monster to leave Will's body?",
        answers: {
            a: "A: They use extreme heat",
            b: "B: They use extreme cold",
            c: "C: Surgery",
            d: "D: By luring it out with food",
        },
        correctAnswer: "a"
    }
};

//Keeps track of the score (starts at zero)
var score = 0;

//Keeps track of which question the user is currently answering
var questionNum = 0;

//Keeps track of whether or not the question was answered
var answered = false;

//Time the user has to answer each question
var number = 10;
var intervalId;

//Display the current question
askQuestion();

//Starting timer text content and start the timer
$("#time-remaining").text("Time Remaining: " + number);
run();


function askQuestion () {
    //Display the current question and answer choices
    for (var i = 0; i < 10; i++) {
        if (questionNum === i) {
            $("#question").text(theQuestions["question" + (questionNum+1)].question);
            $("#a").text(theQuestions["question" + (questionNum+1)].answers.a);
            $("#b").text(theQuestions["question" + (questionNum+1)].answers.b);
            $("#c").text(theQuestions["question" + (questionNum+1)].answers.c);
            $("#d").text(theQuestions["question" + (questionNum+1)].answers.d);
        }
    }

    //If all questions have been answered, display the final score
    if (questionNum === 10) {
        finalScore();
    }
}

function finalScore() {
    stop();
        $("#time-remaining").text("You finished the quiz!");
        $("#question").text("Score: " + score + " points");
        $("#a").text("");
        $("#b").text("");
        $("#c").text("");
        $("#d").text("");

        //Add this button to restart the game
        var restartButton = $("<button>");
        restartButton.text("Restart Game");
        restartButton.click( function() {
            //Reset variables
            score = 0;
            questionNum = 0;
            answered = false;
            number = 10;

            //Display first question
            askQuestion();

            //Starting timer text content and start the timer
            $("#time-remaining").text("Time Remaining: " + number);
            run();
        });
        $("#question").append(restartButton);
}

//Check answer clicked
function answerClick(userAnswer) {
    //Set answered to true and stop timer
    answered = true;
    stop();

    //Score increased if userAnswer is correct
    if (userAnswer === theQuestions["question" + (questionNum+1)].correctAnswer) {
        $("#time-remaining").text("Correct! Next question...")
        score++;

        //Display next question after this one is answered
        questionNum++;
        askQuestion();
        number = 11;
        run();
    }
    else {
        $("#time-remaining").text("Wrong answer! The correct answer was " + "'" + theQuestions["question" + (questionNum+1)].correctAnswer + "'.");

        //Display next question after this one is answered
        questionNum++;
        askQuestion();
        number = 11;
        run();
    }
}

//Timer running
function run() {
    intervalId = setInterval(decrement, 1000);
}

//Count down the time
function decrement() {
    number--;
    $("#time-remaining").text("Time Remaining: " + number);

    //This displays if the question isn't answered in time
    if (number === 0 && answered === false) {
        stop();

        $("#time-remaining").text("You didn't choose an answer! On to the next one...");

        //Display next question and reset timer
        questionNum++;
        askQuestion();
        number = 11;
        run();
    }
}

function stop() {
    clearInterval(intervalId);
}
