import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {message:"enter fisrt number",type:"number",name:"fisrtNumber"},
    {message:"enter second number",type:"number",name:"secondNumber"},

    {message:"select one of the operator to performs operation",
    type:"list",
    name:"operator",
    choices:["Addition","Subtraction","Multiplication","Division"]
    }
]) 

//conditional statement:

if(answer.operator==="Addition"){
   console.log(answer.fisrtNumber + answer.secondNumber);
}
else if(answer.operator==="Subtraction"){
    console.log(answer.fisrtNumber-answer.secondNumber);
}
else if(answer.operator==="Multiplication"){
    console.log(answer.fisrtNumber*answer.secondNumber);
}
else if(answer.operator==="Division"){
    console.log(answer.fisrtNumber/answer.secondNumber);
}
else {
    console.log("Please select a valid operator:");
}