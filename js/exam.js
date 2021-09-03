var queue = [];
queue.push(1);
queue.push(5);
queue.push(3);
queue.shift();
console.log(queue[1]);

function calcUsingCallback(v1, v2, func) {
  if (typeof func == "function") {
    console.log(func(v1, v2));
  }
}

calcUsingCallback(10, 20, function (v1, v2) {
  return v1 * v2;
});

let [first, second, third = "default", ...others] = ["홍길동", "장길산"];
console.log(first, second, third, others);
