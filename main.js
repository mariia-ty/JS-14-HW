//Task 1

function delayedPromise(value, millisec) {
  return new Promise((res) => {
    setTimeout(() => res(value), millisec);
  });
}

const promises = [
  delayedPromise("1", 2000),
  delayedPromise("2", 3000),
  delayedPromise("3", 1000),
  delayedPromise("4", 1500),
  delayedPromise("5", 2500),
];

Promise.all(promises).then((result) => console.log(result));

//Task 2

function randomDelay(value) {
  let delay = Math.random() * (5000 - 1000 + 1) + 1000;
  return new Promise((res) => {
    setTimeout(() => res(value), delay);
  });
}

const promiseList = [
  randomDelay("1"),
  randomDelay("2"),
  randomDelay("3"),
  randomDelay("4"),
  randomDelay("5"),
];

Promise.race(promiseList).then((result) => console.log(result));
