/*
CSD 122 JavaScript Final Project

Author: Tammy Hansen
*/

const readline = require('readline-sync');

let exitFlag = false;

do {
let input = readline.question('Enter number, /+-*, ^ or POW, ^2, SQRT, F or 1/x, PM or +-, or E for exit: ');

function calcRPN(input) {
    const stack = [];
    const inputArray = input.split(' ');
    for(let i = 0; i < inputArray.length; i++) {
        switch (inputArray[i]) {
            // exit
            case 'E':
            case 'e':
                exitFlag = true;
                return "";
                break;
            // addition
            case '+':
                stack.push(Number(stack.pop()) + Number(stack.pop()));
                break;
            // subtraction
            case '-':
                let tempMinus = stack.pop();
                stack.push(stack.pop() - tempMinus);
                break;
            // multiplication
            case '*':
                stack.push(stack.pop() * stack.pop());
                break;
            // division
            case '/':
                let tempDiv = stack.pop();
                stack.push(stack.pop() / tempDiv);
                break;
            // power
            case '^':
            case 'POW':
            case 'pow':
                // need to grab the exponent off the stack first
                let tempPow = stack.pop();
                stack.push(Math.pow(stack.pop(), tempPow));
                break;
            case '^2':
            case 'SQ':
            case 'sq':
                stack.push(Math.pow(stack.pop(), 2));
                break;
            // square root
            case 'SQRT':
            case 'sqrt':
                stack.push(Math.sqrt(stack.pop()));
                break;
            // 1/x  ('flip')
            case 'F':
            case 'f':
            case '1/x':
            case '1/X':
                stack.push(1/stack.pop());
                break;
            // change sign (+/-)
            case '+-':
            case 'PM':
            case 'pm':
                stack.push(-(stack.pop()));
                break;
            // entering a number into the stack
            default:
                stack.push(inputArray[i]);
        } // end switch
    } // end for-loop

    return stack.pop();
    
} // end function

console.log(calcRPN(input));

} while (exitFlag == false);

/*
Test cases for user input:
Case 1 use:  3 ^2 4 ^2 + SQRT   
answer: 5
Case 2 use:  4 +- 4 2 ^ 4 2 * 4 +- * +- + SQRT + 2 2 * /      
answer: 0.732051
*/