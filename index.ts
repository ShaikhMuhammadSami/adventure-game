#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

class Player{
    name:string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100;
    }
};
class Opponent{
    name:string;
    fuel: number = 100;
    constructor(name:string){
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
};

let player = await inquirer.prompt([
    {
        name : "name",
        type : "input",
        message : chalk.magentaBright("Please Enter Your Name"),
        validate: function (value) {
            if(value.trim() !== "") {
                return true;
            }
            return `Please Enter Your Name!`;
        }
    }
]);

let opponent = await inquirer.prompt([
    {
        name : "select",
        type : "list",
        message : chalk.magentaBright("Select your Opponent"),
        choices : ["Thanos", "Voldemort", "Hulk", "Loki"],
    }
]);

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    // Thanos
    if(opponent.select == "Thanos") {
        let ask = await inquirer.prompt([
            {
                name : "opt",
                type : "list",
                message: chalk.greenBright("What would you Like To Do ?"),
                choices : ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if(ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.yellowBright(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`${o1.name} Fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.bgRedBright(`You Loose, Bette luck Next Time!!`))
                    process.exit();
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.yellowBright(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`${o1.name} Fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.bgGreenBright(`Congratulations, You Win !!!!!!!!`))
                    process.exit();
                }
            }
        }
        if(ask.opt == "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.yellowBright(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if(ask.opt == "Run For Your Life") {
            console.log(chalk.bgRedBright(`You Loose, Better Luck Next Time !!!!!`));
            process.exit();
        }
    }

    // Voldemort
    if(opponent.select == "Voldemort") {
        let ask = await inquirer.prompt([
            {
                name : "opt",
                type : "list",
                message: chalk.greenBright("What would you Like To Do ?"),
                choices : ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if(ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.yellowBright(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`${o1.name} Fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.bgRedBright(`You Loose, Bette luck Next Time!!`))
                    process.exit();
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.yellowBright(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`${o1.name} Fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.bgGreenBright(`Congratulations, You Win !!!!!!!!`))
                    process.exit();
                }
            }
        }
        if(ask.opt == "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.yellowBright(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if(ask.opt == "Run For Your Life") {
            console.log(chalk.bgRedBright(`You Loose, Better Luck Next Time !!!!!`));
            process.exit();
        }
    }

    // Hulk
    if(opponent.select == "Hulk") {
        let ask = await inquirer.prompt([
            {
                name : "opt",
                type : "list",
                message: chalk.greenBright("What would you Like To Do ?"),
                choices : ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if(ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.yellowBright(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`${o1.name} Fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.bgRedBright(`You Loose, Bette luck Next Time!!`))
                    process.exit();
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.yellowBright(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`${o1.name} Fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.bgGreenBright(`Congratulations, You Win !!!!!!!!`))
                    process.exit();
                }
            }
        }
        if(ask.opt == "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.yellowBright(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if(ask.opt == "Run For Your Life") {
            console.log(chalk.bgRedBright(`You Loose, Better Luck Next Time !!!!!`));
            process.exit();
        }
    }

    // Loki
    if(opponent.select == "Loki") {
        let ask = await inquirer.prompt([
            {
                name : "opt",
                type : "list",
                message: chalk.greenBright("What would you Like To Do ?"),
                choices : ["Attack", "Drink Portion", "Run For Your Life"]
            }
        ]);
        if(ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(chalk.yellowBright(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`${o1.name} Fuel is ${o1.fuel}`));
                if(p1.fuel <= 0){
                    console.log(chalk.bgRedBright(`You Loose, Bette luck Next Time!!`))
                    process.exit();
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(chalk.yellowBright(`${p1.name} Fuel is ${p1.fuel}`));
                console.log(chalk.yellowBright(`${o1.name} Fuel is ${o1.fuel}`));
                if(o1.fuel <= 0){
                    console.log(chalk.bgGreenBright(`Congratulations, You Win !!!!!!!!`))
                    process.exit();
                }
            }
        }
        if(ask.opt == "Drink Portion") {
            p1.fuelIncrease()
            console.log(chalk.yellowBright(`You Drink Health Portion Your Fuel is ${p1.fuel}`));
        }
        if(ask.opt == "Run For Your Life") {
            console.log(chalk.bgRedBright(`You Loose, Better Luck Next Time !!!!!`));
            process.exit();
        }
    }
}
while(true)

















