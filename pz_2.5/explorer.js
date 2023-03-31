const fs = require("fs");
const readline = require("readline-sync");
const fileSystem = require('./filesystem');
const chalk = require("chalk");

let currentPath = __dirname;

const menuItems = [
    "Перегляд вмісту каталогу",
    "Повернутись назад",
    "Відкрити",
    "Створити папку",
    "Створити файл",
    "Редагувати вміст файлу",
    "Перейменувати",
    "Видалити",
    "Інформація про файл чи папку"
]

function mainMenu(){
    for (let i = 0; i < menuItems.length; i++){
        console.log(`${i+1} - ${menuItems[i]}`)
    }
    console.log("Оберіть пункт:");
    let input = parseInt(readline.question().toString()) - 1;
    if (isNaN(input) || input < 0 || input > 9){
        console.log(chalk.red("Ви ввели невірне значення! Будь ласка оберіть цифру від 1 до 9."));
        mainMenu();
    }
    userMenuChoice(input);
}
mainMenu()
function userMenuChoice(input){
    let menuChoice = parseInt(input);
    let option = menuItems[menuChoice];

    switch (option){
        case menuItems[0]:
            printCurrentCatalog(currentPath);
            mainMenu();
            break;
        case menuItems[1]:
            console.log("2")
            break;
        case menuItems[2]:
            console.log("3")
            break;
        case menuItems[3]:
            console.log("4")
            break;
        case menuItems[4]:
            console.log("5")
            break;
        case menuItems[5]:
            console.log("6")
            break;
        case menuItems[6]:
            console.log("7")
            break;
        case menuItems[7]:
            console.log("8")
            break;
        case menuItems[8]:
            console.log("9")
            break;
    }
    console.log()
}

function printCurrentCatalog(){
    fileSystem.readCatalog();
}