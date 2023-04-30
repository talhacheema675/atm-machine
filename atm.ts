#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import { user,rand } from "./input.js";
console.log(chalk.yellow.bold(figlet.textSync("Welcome to ATM")));
for(let j=2;j>=0;j--)
{
let user_name=await user("please enter user name","input");
let passward= await user("please enter your password","password")

if(user_name=="talha" && passward==123)
{
  for(let i=0;i>=0;i++)  
  {
    let funct= await user("\twelcome\nplease select the desired operation","rawlist",["check balance","withdraw","transfer","deposit","exit"]);
    let balance= await rand();
    console.log(`balance : ${balance}`);

    if(funct=="check balance")
    {
        console.log(balance);
    }

    else if(funct=="withdraw")
    {
        let wtdr= await user("enter amount to withdraw","number")
        if(balance>wtdr)
        {
            balance=balance-wtdr;
        console.log(chalk.green.bold(`withdraw successful now your remaining balance is: ${balance}`));
        }
        else{
            console.log("sorry you have insufficient balance");
        }
    }
    
    else if(funct=="transfer")
    {
        let trans= await user("enter amount to transfer","number") 
        if(balance>trans)
        {
            let account= await user("enter receiver account","number")
            balance=balance-trans;
            console.log(chalk.green.bold(`Amount transfered successfully and you remaining balance is: ${balance}`));   
        }
        else{
            console.log(chalk.red.bold("sorry you have insufficient balance"));
        }

    }
    else if(funct=="deposit")
    {
        let deposite= await user("enter amount to be deposite","number")
        balance=balance+deposite;
        console.log(chalk.green.bold(`your balance after deposit : ${balance}`))
    }
    else if (funct=="exit")
    {
        break;
    }
    let ans=await user("press any key to perform another transaction or n to exit")
        if(ans=="n")
            {
                break;
            }

}
break;
}
else
{
    console.log(chalk.redBright.bold(`\t!!! ${chalk.bgRed(`your username or password is wrong\n\t\n Please note: you only have ${j} attempts left`)} !!!\n\n`))
    if(j==0)
    {
        console.log(chalk.red.bold("\n your card is captured, Please contact your bank for further details"))
    }
}
}
