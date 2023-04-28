function reverseAndSquare(arr) {
    const reversedArr = arr.reverse();
    const squaredArr = reversedArr.map((item) => {
        if (typeof item === "number") {
            return item ** 2;
        } else {
            return item;
        }
    });
    return squaredArr;
}

const arr = [1, 2, "three", 4, "five"];
const reversedAndSquaredArr = reverseAndSquare(arr);
console.log(reversedAndSquaredArr);