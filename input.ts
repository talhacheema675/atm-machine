import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";

let user=async(arr:string,typ:string="input",optn?:string[])=>{

    let atm=await inquirer.prompt([{
    name:"user",
    type:typ,
    message:chalk.red(chalk.red.bold(arr)),
    choices:optn

}]);

return atm.user;

}

let rand=async()=>{
    let num=Math.random()*1000000;
    num=Math.floor(num);
    return num;
}

export {user,rand};