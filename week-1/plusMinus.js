function plusMinus(arr) {
    let total = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < total; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }

    const positiveFraction = (positive / total).toFixed(6);
    const negativeFraction = (negative / total).toFixed(6);
    const zeroFraction = (zero / total).toFixed(6);

    console.log(positiveFraction);
    console.log(negativeFraction);
    console.log(zeroFraction);
}

const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
