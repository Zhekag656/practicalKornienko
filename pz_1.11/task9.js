function numberProperties(num) {
    let sign = num >= 0 ? "позитивне" : "негативне";

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    let primeMessage = isPrime ? "просте" : "не є простим";

    let isDivisible = true;
    let divisors = [2, 5, 3, 6, 9];
    let divisibleMessage = "ділиться на: ";
    divisors.forEach(divisor => {
        if (num % divisor !== 0) {
            isDivisible = false;
        } else {
            divisibleMessage += divisor + " ";
        }
    });
    if (!isDivisible) {
        divisibleMessage = "не ділиться на 2, 5, 3, 6, 9 без залишку";
    }

    let message = `Введене число ${sign}, ${primeMessage}, і ${divisibleMessage}.`;
    return message;
}

console.log(numberProperties(18));