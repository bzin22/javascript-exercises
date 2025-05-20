const sumAll = function(num1, num2) {
    let arr = [num1, num2].sort((a,b) => a-b);
    let sum = 0;

    if (num1 < 0 || num2 < 0 || 
        !Number.isInteger(num1) || !Number.isInteger(num2) || 
        typeof num1 !== "number" || typeof num2 !== "number"){

        return "ERROR"
    }else{
        for (let num = arr[0]; num<arr[1]+1;num++){
            sum += num;
        };
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
