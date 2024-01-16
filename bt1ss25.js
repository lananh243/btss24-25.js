let n = parseInt(prompt("Nhập một số nguyên dương:"));
let sum = 0;

console.log("Các số nguyên dương từ 1 đến", n + ":");

for (let i = 1; i <= n; i++) {
  console.log(i);
  sum += i;
}

if (sum % 2 === 0) {
  sum += 1;
}

console.log("Tổng các số:", sum);