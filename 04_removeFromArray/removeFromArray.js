const removeFromArray = function(original, ...argument) {
    /*
    the original thing i tried which is too complicated
    var x = original.length;
    console.log(x);

    for (let i=0; i++, i<x;){
        console.log(i);
        if(original[i]==argument)
        original.splice(i);
    }
    console.log(original);
    return original;
    */

    const newArray = [];

    original.forEach((item) =>{
        if(!argument.includes(item)){
            newArray.push(item);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
