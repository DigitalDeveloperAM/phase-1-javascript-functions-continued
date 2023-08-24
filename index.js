// code your solution here

function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity= "go to the office") {
    return `This Monday, I will ${activity}.`;
}

// const wrapAdjective = function("*") {
    
// }

const star = "*";
// const adjective = "a hard worker";
function wrapAdjective (star) {
    
    return function (adjective = "a hard worker") {
        return `You are ${star}${adjective}${star}!`;
    };
}

// const bigL = "||"
// function wrapAdjective () {
    
//     return function (adjective = "a dedicated programmer") {
//         return `You are ${bigL}${adjective}${bigL}!`;
//     };
// }