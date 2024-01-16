let n = parseInt(prompt("Nhập n"));
let a = 0;
let b = 1;

console.log("Các số Fibonacci trong khoảng từ 0 đến", n, "là:");

while (a <= n) {
  console.log(a);
  let fibo = a + b;
  a = b;
  b = fibo;
}