const fs = require("fs")
const chalk = require("chalk")
const readlineSync = require("readline-sync")
const path = require("path");

let currentPath = process.cwd();

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

function readDirectory() {
    try {
        const files = fs.readdirSync(currentPath);
        console.log('Contents of ' + currentPath + ':');
        for (const file of files) {
            const filePath = path.join(currentPath, file);
            const stats = fs.statSync(filePath);
            const color = stats.isDirectory() ? '\x1b[34m' : '\x1b[32m';
            console.log(color + file);
        }
    } catch (err) {
        console.error(err);
    }
}

function goForward(){
    while (true){
        readDirectory();
        console.log('\n[.] - залишитись в поточній директорії');
        console.log('[..] - перейти до кореневої папки');
        console.log('Введіть назву директорії, в яку бажаєте переміститись');
        const choice = readlineSync.question();

        if (choice === '.'){
            continue;
        } else if (choice === '..'){
            currentPath = path.dirname(currentPath);
        } else {
            const newPath = path.join(currentPath, choice);
            if (fs.existsSync(newPath) && fs.statSync(newPath).isDirectory()){
                currentPath = newPath;
            } else {
                console.log('Хибний ввід, спробуйте ще раз')
            }
        }
    }

}

function goBack(){
    if (currentPath === path.parse(currentPath).root){
        console.log(`Неможливо повернутись назад з ${currentPath}`);
        return;
    }

    currentPath = path.dirname(currentPath)
    console.log(`Поточна директорія ${currentPath}`);
}












module.exports = {readCatalog, goForward, goBack}