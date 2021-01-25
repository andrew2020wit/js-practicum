// Date

console.log("=== start ===", new Date().toLocaleTimeString());

const date1 = new Date();
console.log("date1", date1);
console.log("toLocaleString", date1.toLocaleString("ru"));
console.log("toLocaleDateString", date1.toLocaleDateString("ru"));
console.log("toLocaleTimeString", date1.toLocaleTimeString("ru"));
console.log("date1.getTime()", date1.getTime());
console.log("+date1", +date1);
console.log("Date.now()", Date.now());

const formatter = new Intl.DateTimeFormat("ru");
console.log(formatter.format(date1));

const formatter2 = new Intl.DateTimeFormat("ru", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});
console.log(formatter2.format(date1));

console.log("=== end ===");
