function miniMaxSum(arr) {
    let min =Math.min(...arr);
    let max =Math.max(...arr);
    let total = 0; 
    for (let i=0; i<arr.length; i++) {
        total += arr[i];         
    }
    console.log(total - max, total - min);

}

const arr = [5,4,1,2,4,6];
miniMaxSum(arr); //16 21