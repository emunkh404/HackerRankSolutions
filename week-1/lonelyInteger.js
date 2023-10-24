function lonelyinteger(a) {
    let result = 0;
    
    for (let num of a) {
        result ^= num;
    }
    
    return result;
}
const a = [1, 2, 3, 4, 1, 2, 3];
const uniqueElement = lonelyinteger(a);
console.log(uniqueElement); // Output: 4
