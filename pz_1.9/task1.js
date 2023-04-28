let num = 0;
while (num <= 100) {
    let isPrime = true;
    if (num === 0 || num === 1) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime) {
        console.log(num);
    }
    num++;
}