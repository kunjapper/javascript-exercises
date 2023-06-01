const sumAll = function(num1, num2) {

    var sum = 0;
    var low;
    var high;

    if(num1>0 && num2>0){

    }
    else{
        return "ERROR";
    }

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    if (num1>num2){
        high = num1;
        low = num2;
    }
    else if(num2 > num1){
        high = num2;
        low = num1;
    }

    for (let i=low; i<= high; i++){
        sum = sum + i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
