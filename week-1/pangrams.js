function pangrams(s) {
    // Convert the input string to lowercase to ignore case.
    s = s.toLowerCase();

    // Create a Set to store the unique letters found in the string.
    const letterSet = new Set();

    // Iterate through the string and add each letter to the Set.
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char >= 'a' && char <= 'z') {
            letterSet.add(char);
        }
    }

    // Check if the Set contains all 26 letters of the alphabet.
    if (letterSet.size === 26) {
        return "pangram";
    } else {
        return "not pangram";
    }
}

// Example usage:
console.log(pangrams("We promptly judged antique ivory buckles for the next prize")); // Output: "pangram"
console.log(pangrams("We promptly judged antique ivory buckles for the prize")); // Output: "not pangram"
