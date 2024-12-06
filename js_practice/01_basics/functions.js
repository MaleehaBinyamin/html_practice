// function add(num1,num2){
//     let sum = num1 + num2;
//     return sum;
// }

// let sum = add(8,98)
// console.log(sum);

// function table(num)
// {
//     for(let i = 1; i<=10; i++){
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
    
// }

// table(9);

function showMassege(params) {
//     console.log("hello,javascript");
// }
showMassege()
// function calculate(num1,num2,operator) {
//     if (operator===`+`) {
//         return num1+num2
//     }
//     else if (operator===`-`) {
//         return num1-num2
//     }
//     else if (operator===`*`) {
//         return num1*num2
//     }
//     else if (operator===`/`) {
//         return num1/num2
//     }
// }else{
//     return "Invalid operator"
// }
// console.log(calculate(4, 2, '+'))
function calculate(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        return 'Invalid operator';
    }
}
console.log(calculate(4, 2, '+')); 