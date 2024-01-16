let a = parseInt(prompt("Nhập số nguyên dương:"));

if (isNaN(a) || a <= 0) {
  console.log("Số không hợp lệ. Vui lòng nhập một số nguyên dương.");
} else {
  let reversed = 0;
  let temp = a;
  while (temp > 0) {
    let digit = temp % 10;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
  }
  console.log("Số đảo ngược là: " + reversed);
}