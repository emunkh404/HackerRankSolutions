function matchingStrings(strings, queries) {
    const results = [];
    const stringCount = {}; // Object to store counts of each string

    // Count the occurrences of each string in the input strings
    for (const string of strings) {
        if (stringCount[string]) {
            stringCount[string]++;
        } else {
            stringCount[string] = 1;
        }
    }

    // For each query, look up its count in stringCount
    for (const query of queries) {
        if (stringCount[query]) {
            results.push(stringCount[query]);
        } else {
            results.push(0); // The query string was not found in the input strings
        }
    }

    return results;
}
const strings = ['aba', 'baba', 'aba', 'xzxb'];
const queries = ['aba', 'xzxb', 'ab'];
const result = matchingStrings(strings, queries);
console.log(result); // Output: [2, 1, 0]
