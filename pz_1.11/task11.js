function removeDuplicates(array) {
    return array.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
}

const arr = [1, 1, 22, 22, 31, 32, 32, 44, 44]
console.log(removeDuplicates(arr))