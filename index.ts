
import inquirer  from "inquirer"
import {sum,sub,mul,div} from "./components.js"
import chalk from "chalk"
import chalkAnimation from "chalk-animation"
import figlet from "figlet"
import gradient from "gradient-string"
let answers=[
    {"name": "num1",
    "type": "number",
    "message": "Enter first number"},{
        "name": "num2",
        "type": "number",
        "message": "Enter second number"
    },{
        "name": "operation",
        "type": "list",
        "choices": ["add","sub","mul","div"],
        "message": "Enter your operation"
    }
]

let answer=[
    {
        "name": "yesNo",
        "type": "confirm",}]