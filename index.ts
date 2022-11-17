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
import { question } from "readline-sync";

type operator2 = '+' | '-' | '*' | '/' | 'add' | 'subtract' | 'multiply' | 'divide';

function main():void{

  const firstnumber:string = question("Please enter First Number: ");
    const operatorn:string = question("Enter operator ( add or +  ||  subtract or -  ||  multiply or *  ||  divide or /): ").toLowerCase();
    const secondnumber:string = question("Please enter Second Number: ");
    const isvalid:boolean = isNumber(firstnumber) && isOperator(operatorn) && isNumber(secondnumber);
if(isvalid)
{
   // console.log(isvalid);
    const firstn: number = parseInt(firstnumber);
    const secondn: number = parseInt(secondnumber);
    const result = calculate(firstn,operatorn as operator2,secondn)
    console.log('Result: '+result);
}
else
{
    console.log("not valid");
    main();
}
}

function calculate(firstn:number,operatorn:operator2,secondn:number)
{
    switch(operatorn)
    {
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

function isOperator(operator:string):boolean
{
    switch(operator)
    {
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

function isNumber(str:string): boolean
{
    const mayBenumber = parseInt(str);
    const isNum: boolean=!isNaN(mayBenumber);
    return isNum;
}

main();