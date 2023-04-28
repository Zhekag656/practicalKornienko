function doubleArray() {
    const matrix = [];
    for (let i = 0; i < 5; i++) {
        matrix.push([]);
        for (let j = 0; j < 5; j++) {
            matrix[i].push(Math.floor(Math.random() * 10) - 5);
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][i] < 0) {
            matrix[i][i] = 0;
        } else {
            matrix[i][i] = 1;
        }
    }

    console.log(matrix);
}

doubleArray();
