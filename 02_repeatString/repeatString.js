const { text } = require("express");

const repeatString = function repeat(word, count){
    let newString="";
    console.log("your original text is "+word);
    
    if(count<0){
        return "ERROR";
    }

    newString = "";
    /*
    for(let i=0; i<count; i++);{
        console.log("loop number "+i);
        newString += word;
        //console.log("New string is " + newString + "loop number " + i);
    }
    */
    for (let i = 0; i < count; i++) {
        newString = newString + word;
      }
    console.log("Your new text is " + newString);
    
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
