// Promise

const boolean1 = false;

console.log("=== start ===", new Date().toLocaleTimeString());

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (boolean1) {
      resolve("someValue");
    } else {
      reject("errrror");
    }
  }, 200);
});

promise1
  .then((x) => {
    console.log("promise1.then:", x);
  })
  .catch((x) => {
    console.log("promise1.catch:", x);
  });

console.log("=== end ===");
