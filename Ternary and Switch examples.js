// Ternary
function isUserValid(boolean){
    return boolean;
}

var answer = isUserValid(true)? "You can enter" : "Access Denied";
// var automatedanswer = 
//     "Your account # is" + (isUserValid(true)? " 123456" : " not available");

// instead of using Ternary we can use if condition    
function condition(){
    if(true){
        return "You can enter";
    } else {
        return "Access denied";
    }
}
var answer2 = condition();
// Another example of Ternary

function findGreaterOrEqual(a,b){
    return (a===b)? "a and b are equal"
    : (a>b)? "a greater than b"
    : "b greater than a";
}
// check equal
function checkEqual(a,b){
    return (a===b)? "a equal b" : "a not equal b"
}

// check number sign postive, negative or zero
function checkNumber(a){
    return(a===0)? "zero"
    :(a>0)? "positive"
    : "negative";
}
//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

function experiencePoints(boolean) {
    return boolean;
}
var answer = experiencePoints(true)? 10 : 1

//---------Use If condition---------------
function condition(){
    if (true){
        return 10
    } else {
        return 1
    }
}
var answer2 = condition();

//-------Switch-----------

function moveCommand(direction){
    var whatHappens;
    switch(direction){
        case "forward":
            whatHappens = "you encountered a monster";
            break;
        case "backward":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
            break;
    }
    return whatHappens;
}
// assign var whatHappens = "please enter a valid direction" 
// then we don't need to use default.

