function timeConversion(s) {
    // Extract hours, minutes, and seconds from the input time string
    const hours = parseInt(s.slice(0, 2)); // (02):24:04AM
    const minutes = s.slice(3, 5); // 02:(24):04AM
    const seconds = s.slice(6, 8); // 02:24:(04)AM
    const period = s.slice(8, 10); // 02:24:04(AM)

    if (period === "AM") {
        if (hours === 12) {
            // Special case: 12:00 AM should be converted to 00:00:00
            return `00:${minutes}:${seconds}`;
        } else {
            // For other AM times, keep the hours as is
            return `${s.slice(0, 8)}`; //(02:24:04)AM
        }
    } else if (period === "PM") {
        if (hours === 12) {
            // 12:00 PM remains the same
            return s.slice(0, 8);
        } else {
            // Add 12 to the hours for other PM times
            const militaryHours = hours + 12;
            return `${militaryHours}:${minutes}:${seconds}`;
        }
    }
}

const inputTime1 = "12:45:30PM";
const inputTime2 = "12:45:30AM";
const inputTime3 = "01:45:30PM";
const convertedTime1 = timeConversion(inputTime1);
const convertedTime2 = timeConversion(inputTime2);
const convertedTime3 = timeConversion(inputTime3);
console.log(convertedTime1); // Output: "12:45:30"
console.log(convertedTime2); // 00:45:30
console.log(convertedTime3); // 13:45:30