let dateFormatter = new Intl.DateTimeFormat("ru", {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

// Arrays

console.log("=== start ===", dateFormatter.format(new Date()));

const arr1 = [];

arr1[0] = "zero";

arr1.push("one");
arr1.push("two");
//
arr1.unshift("some");
arr1.shift();
//
console.log(arr1.pop());
arr1.push("two");
//

for (let x of arr1) {
  console.log("for of arr:", x);
}

console.log("arr1", arr1);
console.log("arr1.toString:", arr1.toString());

const arrN = [];
for (let i = 1; i < 10; i++) {
  arrN.push("itemN" + i);
}
console.log("arrN:", arrN.toString());
const arrN2 = arrN.slice(0, 5);
console.log("removed:", arrN.splice(2, 2, "inserted1", "inserted2"));
console.log("arrN:", arrN.toString());
console.log("arrN2:", arrN2.toString());
console.log("concat", arrN.concat(arrN2));

arrN2.forEach((item, index, arr) => {
  console.log("forEach, arrN2: ", item, index, arr);
});

console.log(`indexOf("itemN2"):`, arrN2.indexOf("itemN2"));
console.log(`includes("itemN2"):`, arrN2.includes("itemN2"));

console.log(
  `includes("itemN2"):`,
  arrN2.find((v) => {
    return v == "itemN2";
  })
);

const arrN3 = arrN2.map((v) => {
  return v + "-" + `arrN3`;
});

console.log("arrN3 (map):", arrN3);
console.log("arrN.sort:", arrN.sort());
console.log("arrN.reverse:", arrN.reverse());

let arrStr = "Adam, Bob, Jon".split(", ");
console.log(arrStr);
console.log(arrStr.join(" : "));
console.log("Vova".split("").join("-"));

const arrNR = [];
for (let i = 1; i < 10; i++) {
  arrNR.push(2);
}

const sum1 = arrNR.reduce((sum, item) => {
  return (sum += item);
}, 0);

console.log("reduce: sum1", sum1);

// Переведите текст вида border-left-width в borderLeftWidth
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

function camelize(str) {
  return str
    .toLowerCase()
    .split("-")
    .map((word, index) => {
      return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(camelize("list-style-imAge"));

// Фильтрация по диапазону
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

function filterRange(arr, a, b) {
  return arr.filter((v) => {
    return a <= v && v <= b;
  });
}

const arrFilterRange = [5, 3, 8, 1];

console.log(`filterRange`, filterRange(arrFilterRange, 1, 4));
console.log(`arrFilterRange`, arrFilterRange);

// Фильтрация по диапазону "на месте"
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.

let arrfilterRangeInPlace = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  arr.forEach((v, i, arr) => {
    if (v < a || v > b) {
      arr.splice(i, 1);
    }
  });
}
filterRangeInPlace(arrfilterRangeInPlace, 1, 4); // удалены числа вне диапазона 1..4
console.log(`arrfilterRangeInPlace`, arrfilterRangeInPlace);

console.log("=== end ===");
