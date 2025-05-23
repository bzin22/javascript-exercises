const fibonacci = function(number) {
    num = +number;
    if (num < 0){
        return "OOPS"
    }else if(num === 0){
        return 0
    }else if(num === 1){
        return 1
    }else{
        let a = 0;
        let b = 1;
        let fib = 0;
        for(let i = 2;i<num+1;i++){
            fib = a + b;
            a = b;
            b = fib;
        };
        return fib
    }
};

// Do not edit below this line
module.exports = fibonacci;

/*
Fibonacci secquence: 1, 1, 2, 3, 5, 8
n = 2 => 0 + 1 = 1
n = 3 => 1 + 1 = 2
n = 4 => 1 + 2 = 3
n = 5 => 2 + 3 = 5
n = 6 => 3 + 5 = 8
*/