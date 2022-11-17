"use strict";
exports.__esModule = true;
/*************************************************
Full Name: Syed Abu Owais Bin Nasar
Discord Username: owaisnasarubit#7433
Roll No.: PIAIC83125
Email: owatheowais@gmail.com
Twitter: @owatheowais
GitHub Profile URL: https://github.com/owatheowais
Linkedin: https://www.linkedin.com/in/abuowais/
WhatsApp Number: 03442124471
**************************************************/
var readline_sync_1 = require("readline-sync");
function main() {
    var firstnumber = (0, readline_sync_1.question)("Please enter First Number: ");
    var operatorn = (0, readline_sync_1.question)("Enter operator ( add or +  ||  subtract or -  ||  multiply or *  ||  divide or /): ").toLowerCase();
    var secondnumber = (0, readline_sync_1.question)("Please enter Second Number: ");
    var isvalid = isNumber(firstnumber) && isOperator(operatorn) && isNumber(secondnumber);
    if (isvalid) {
        // console.log(isvalid);
        var firstn = parseInt(firstnumber);
        var secondn = parseInt(secondnumber);
        var result = calculate(firstn, operatorn, secondn);
        console.log('Result: ' + result);
    }
    else {
        console.log("not valid");
        main();
    }
}
function calculate(firstn, operatorn, secondn) {
    switch (operatorn) {
        case '+':
            return firstn + secondn;
        case '-':
            return firstn - secondn;
        case '*':
            return firstn * secondn;
        case '/':
            return firstn / secondn;
        case 'add':
            return firstn + secondn;
        case 'subtract':
            return firstn - secondn;
        case 'multiply':
            return firstn * secondn;
        case 'divide':
            return firstn / secondn;
    }
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            return true;
        default:
            return false;
    }
}
function isNumber(str) {
    var mayBenumber = parseInt(str);
    var isNum = !isNaN(mayBenumber);
    return isNum;
}
main();
