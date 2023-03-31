const fs = require("fs")
const chalk = require("chalk")
const readlineSync = require("readline-sync")

function readCatalog(){
    console.log("Введіть абсолютний шлях до директорії: ")
    const path = readlineSync.question();

    try {
        const files = fs.readdirSync(path);

        for (const file of files) {
            const stats = fs.statSync(`${path}/${file}`);

            if (stats.isDirectory()) {
                console.log(chalk.blue(`${file}`));
                console.log();
            } else {
                console.log(chalk.green(`${file}`));
                console.log();
            }
        }
    } catch (err) {
        console.error(err);
    }
}












module.exports = {readCatalog}