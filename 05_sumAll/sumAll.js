const sumAll = function(x, y) {
    //if not a number
    if (!Number.isInteger(x) || !Number.isInteger(y)) return 'ERROR'
    //if negative number
    if (x < 0 || y < 0) return 'ERROR'
    //if x is greater than y
    if (x > y){
        let min = x
         x = y
         y = min
    }


    //add smaller number to sum until 1 more than larger num
    let sum = 0
    for (let i = x; i < y + 1; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;


