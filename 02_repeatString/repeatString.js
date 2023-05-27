const { text } = require("express");

const repeatString = function repeat(text, count){
    var newString="";
    console.log("your original text is "+text);
    
    if(text<0){
        return ERROR;
    }
    newString = text;
    for(var i=0; i<=count; i++);{
        console.log("loop number"+i);
        newString = newString.concat("",newString);
    }
    console.log("Your new text is " + newString);
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
