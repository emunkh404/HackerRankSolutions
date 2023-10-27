function twoArrays(k, A, B) {
    // Sort array A in ascending order and array B in descending order.
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    // Check if the relation A[i] + B[i] >= k holds for all i.
    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO";
        }
    }

    return "YES";
}

// Example usage:
console.log(twoArrays(10, [2, 1, 3], [7, 8, 9])); // Output: "YES"
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4])); // Output: "NO"
