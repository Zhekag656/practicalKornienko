function add(a, b) {
    console.log(`Результат додавання: ${a + b}`);
}

function sub(a, b) {
    console.log(`Результат віднімання: ${a - b}`);
}

function mul(a, b) {
    console.log(`Результат множення: ${a * b}`);
}

function div(a, b) {
    if (b === 0) {
        console.log(`Ділення на нуль неможливе!`);
    } else {
        console.log(`Результат ділення: ${a / b}`);
    }
}

let a = parseFloat(prompt('Введіть перше число:'));
let b = parseFloat(prompt('Введіть друге число:'));
let operation = prompt('Введіть операцію (add, sub, mul, div):');

switch (operation) {
    case 'add':
        add(a, b);
        break;
    case 'sub':
        sub(a, b);
        break;
    case 'mul':
        mul(a, b);
        break;
    case 'div':
        div(a, b);
        break;
    default:
        console.log(`Неправильна операція!`);
}
