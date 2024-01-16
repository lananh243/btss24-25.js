let n = parseInt(prompt("Nhập n"));
let sum = 0;
let m = 0;

if (n < 0) {
  console.log("Không hợp lệ");
} else {
  for (let i = 1; i <= n; i++) {
    sum = sum + i;

    if (sum <= n) {
      m = i; // Gán lại giá trị max
    }
  }

  console.log("Max = ", m);
}
