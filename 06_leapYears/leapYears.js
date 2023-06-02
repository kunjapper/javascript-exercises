const leapYears = function(year) {

    var isLeapYear = false;

    //leap year is divisible by 4
    //if year is divisible by 100 it isnt a leap year unless its divisible by 400 as well

    

    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

    

};

// Do not edit below this line
module.exports = leapYears;
