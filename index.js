// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun()

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(mrk1 = "*",){
    return function(spc = "special"){ 
        return `You are ${mrk1}${spc}${mrk1}!`
    }
}