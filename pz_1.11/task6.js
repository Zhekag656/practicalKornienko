const N = 10;
const arr = Array(N).fill().map(() => Math.floor(Math.random() * 100));

const max = Math.max(...arr);
const min = Math.min(...arr);

const sum = arr.reduce((acc, val) => acc + val, 0);

const avg = sum / arr.length;

console.log(`Найбільше значення масиву: ${max}`);
console.log(`Найменше значення масиву: ${min}`);
console.log(`Загальна сума елементів масиву: ${sum}`);
console.log(`Середнє арифметичне всіх елементів масиву: ${avg}`);

console.log('Непарні значення масиву: ');
arr.forEach((num) => {
    if (num % 2 !== 0) {
        console.log(num);
    }
});
