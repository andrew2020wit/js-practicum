let dateFormatter = new Intl.DateTimeFormat("ru", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

// strings

console.log("=== start ===", dateFormatter.format(new Date()));

const string1 = "Hello JavaScript!";

console.log("length", string1.length);
console.log(string1[0]);

let i = 0;

for (let char of string1) {
  console.log(char);
  i++;
  if (i > 5) {
    break;
  }
}

console.log(string1.toUpperCase());
console.log("Java, pos: ", string1.indexOf("Java"));
console.log("include Java", string1.includes("Java"));
console.log("slice 2-5", string1.slice(2, 5));
console.log("slice 2", string1.slice(2));
console.log("slice -4 -1", string1.slice(-4, -1));
console.log("substring(5, 1)", string1.substring(5, 1));
console.log("substring(-3, 2)", string1.substring(-3, 2));
console.log("substr(6, 2)", string1.substr(6, 2));
console.log("substr(-3, 3)", string1.substr(-3, 3));
console.log(`"A" < "z" `, "A" < "z");
console.log(`"a" > "Z" `, "a" > "Z");
console.log(`a - codePointAt `, "a".codePointAt(0));
console.log(`A - codePointAt `, "A".codePointAt(0));
console.log(`z - codePointAt `, "z".codePointAt(0));
console.log(`Z - codePointAt `, "Z".codePointAt(0));
console.log(
  `localeCompare Österreich Zealand`,
  "Österreich".localeCompare("Zealand")
);

console.log("trim", "|", " dsf ", "|");
console.log("trim", "|", " dsf ".trim(), "|");

console.log("repeat 20", "a".repeat(20));

// Сделать первый символ заглавным

function f1(str) {
  str1 = str.slice(0, 1).toUpperCase();
  str2 = str.slice(1).toLowerCase();
  return str1 + str2;
}

console.log("vova =>", f1("vova"));

// truncate
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

function truncate(str, length) {
  if (str.length <= length) {
    return str;
  }
  return str.substr(0, length - 3) + "...";
}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));

console.log("=== end ===");
