function birthday(s, d, m) {
    let count = 0;

    for (let i = 0; i <= s.length - m; i++) {
        let segmentSum = 0;

        for (let j = 0; j < m; j++) {
            segmentSum += s[i + j];
        }

        if (segmentSum === d) {
            count++;
        }
    }

    return count;
}

// Example usage:
const squares = [1, 2, 1, 3, 2];
const day = 3;
const month = 2;
console.log(birthday(squares, day, month)); // Output: 2
