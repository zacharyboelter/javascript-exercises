const leapYears = function(year) {
        //if year / 4 is 0 and year / 100 isnt 0 or year / 400 IS 0, return true
    if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
