// const leapYears = function(num) {
//     if (num % 4 === 0 || num % 400 === 0){
//         if (num % 100 === 0){
//             if (num % 400 === 0){
//                 return true
//             }else{
//                 return false
//             }
//         }
//         return true    
//     }else {
//         return false
//     }
// };

const leapYears = (year) => (year % 400 === 0 || (year % 100 === 0 && year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0));
    
// Do not edit below this line
module.exports = leapYears;
