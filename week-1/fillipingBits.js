function flippingBits(n) {
    // Create a mask of 32 ones in binary (0xFFFFFFFF)
    const mask = 0xFFFFFFFF;

    // Use XOR to flip all the bits
    const result = n ^ mask;

    return result >>> 0; // To ensure the result is an unsigned integer
}
const n = 2147483647; // Example input
const flippedResult = flippingBits(n);
console.log(flippedResult); // Output: 2147483648
