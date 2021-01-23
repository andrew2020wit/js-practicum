let dateFormatter = new Intl.DateTimeFormat("ru", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

console.log("=== start ===", dateFormatter.format(new Date()));
const obj1 = {
  f1: "f11",
  f2: 2222,
};

for (let key in obj1) {
  console.log("first: ", obj1[key]);
}

console.log("=== end ===");
