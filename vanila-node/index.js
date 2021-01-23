let dateFormatter = new Intl.DateTimeFormat("ru", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

// Arrays

console.log("=== start ===", dateFormatter.format(new Date()));

console.log("=== end ===");
