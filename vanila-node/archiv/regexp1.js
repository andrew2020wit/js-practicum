// regexp1
console.log("=== start ===", new Date().toLocaleTimeString());

const testStr = "abc ABC aAbBcC 1234 abc";

console.log(testStr);
console.log("testStr.match(/abc/gi) \n", testStr.match(/abc/gi));
console.log(
  "testStr.replace(/abc/gi, `!!!`) \n",
  testStr.replace(/abc/gi, "!!!")
);

const regexp1 = /abc/gi;
console.log("regexp1.test(testStr)", regexp1.test(testStr));
console.log("==========");

console.log(`/\\d/g`, testStr.match(/\d/g));
console.log(`/\\w/g`, testStr.match(/\w/g));
console.log(`/\\s/g`, testStr.match(/\s/g));
console.log(`/\\S/g`, testStr.match(/\S/g));
console.log(`/a.c/g`, testStr.match(/a.c/g));
console.log("==========");

const unicode4str = "A ბ ㄱ xAF";
console.log("unicode4str", unicode4str);
console.log(`/\\p{L}/gu)`, unicode4str.match(/\p{L}/gu));
console.log(`/\\p{L}/g)`, unicode4str.match(/\p{L}/g));
console.log(`Hex_Digit`, unicode4str.match(/x\p{Hex_Digit}\p{Hex_Digit}/gu));

console.log(`/^abc/g`, testStr.match(/^abc/g));
console.log(`/abc$/g`, testStr.match(/abc$/g));
console.log("==========");

const strM = `1е место: Винни
2е место: Пятачок
3е место: Слонопотам`;
console.log("strM: gm", strM.match(/^\d/gm)); // 1, 2, 3
console.log("strM: g", strM.match(/^\d/g)); // 1
console.log("==========");

console.log(`\\b`, "abcd bc bc abcx".match(/\bbc\b/g));
console.log(`\\b`, "abcd bc bc abcx".match(/bc/g));

console.log("=== end ===");
