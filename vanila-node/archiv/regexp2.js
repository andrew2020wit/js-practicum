// regexp2
console.log("=== start ===", new Date().toLocaleTimeString());

console.log("/[23]top/gi", "1top 2top 3top".match(/[23]top/gi));
console.log("/[1-3]top/gi", "1top 2top 3top".match(/[1-3]top/gi));
console.log("[^12]", "1top 2top 3top".match(/[^12]top/gi));
console.log("===========");

console.log("/\\d{3,4}/gi", "1234 12345 123 12".match(/\d{3,4}/gi));
console.log("/\\d{3,}/gi", "1234 12345 123 12".match(/\d{3,}/gi));
console.log("===========");
// + ? *

console.log("(go)?", "go gogo gogogo".match(/(go)?/gi));
console.log("(go)+", "go gogo gogogo".match(/(go)+/gi));
console.log("===========");

const dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
const str = "2019-04-30";
const groups = str.match(dateRegexp).groups;
console.log(groups.year); // 2019
console.log(groups.month); // 04
console.log(groups.day); // 30
console.log("===========");

console.log("(abc|fds)", "abc dre fds".match(/(abc|fds)/gi));

console.log("=== end ===");
