//Objects containing questions and answers
var question1 = {
    question: "Where does the show take place?",
    true: "Indiana",
    false1: "Kansas",
    false2: "Mississippi",
    false3: "Oklahoma",
};
var question2 = {
    question: "What game are the boys always playing?",
    true: "Dungeons & Dragons",
    false1: "Super Mario Bros",
    false2: "The Legend of Zelda",
    false3: "Pac-Man",
};
var question3 = {
    question: "What is Eleven's favorite food?",
    true: "Eggos",
    false1: "Pop-Tarts",
    false2: "Frosted Flakes",
    false3: "Twinkies",
};
var question4 = {
    question: "Who is the first character to die in the series?",
    true: "Barb",
    false1: "Nancy",
    false2: "Will",
    false3: "Jonathon",
};
var question5 = {
    question: "How does Joyce communicate with Will when he goes missing?",
    true: "With Christmas lights",
    false1: "Through a mirror",
    false2: "On her cell phone",
    false3: "By painting on the walls",
};
var question6 = {
    question: "What parallel dimension does Will go missing in?",
    true: "The Upside Down",
    false1: "The Other Place",
    false2: "The Dark World",
    false3: "The Cold Land",
};
var question7 = {
    question: "What do the boys dress up as for Halloween?",
    true: "Ghostbusters",
    false1: "Star Wars characters",
    false2: "Their Dungeons & Dragons characters",
    false3: "Teletubbies",
};
var question8 = {
    question: "What are Will's visions from the Shadow Monster called?",
    true: "Now Memories",
    false1: "Now Moments",
    false2: "Shadow Memories",
    false3: "Monster Visions",
};
var question9 = {
    question: "What is the name of the monster from Season One?",
    true: "Demogorgon",
    false1: "Mind Slayer",
    false2: "Dark Demon",
    false3: "Shadow Monster",
};
var question10 = {
    question: "How does the gang get the Shadow Monster to leave Will's body?",
    true: "They use extreme heat",
    false1: "They use extreme cold",
    false2: "Surgery",
    false3: "By luring it out with food",
};

//Testing question objects
$("#question").text(question1.question);
$("#answer1").text(question1.true);
$("#answer2").text(question1.false1);
$("#answer3").text(question1.false2);
$("#answer4").text(question1.false3);