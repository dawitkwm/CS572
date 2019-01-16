/**
 * Returns a string "weekday" or "weekend" depending on the day 
 * without using if or terinary statement.
 */
function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDay(); // 0 - 6 (0 is Sunday)
    const days = {
        0: "weekend",
        1: "weekday",
        2: "weekday",
        3: "weekday",
        4: "weekday",
        5: "weekday",
        6: "weekend"
    };
    return days[day];
}

console.log(isWeekend());