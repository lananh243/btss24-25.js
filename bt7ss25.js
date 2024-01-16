let a =parseInt(prompt("Nhập a"));
let b =parseInt(prompt("Nhập b"));
let c =parseInt(prompt("Nhập c"));
let d =parseInt(prompt("Nhập d"));
let lcm = Math.abs(a);
let numbers = [b, c, d];

for (let i = 0; i < numbers.length; i++) {
  let gcd = numbers[i];
  let remainder, temp;
  
  while (gcd !== 0) {
    temp = lcm;
    lcm = gcd;
    remainder = temp % gcd;
    gcd = remainder;
  }
  
  lcm = Math.abs((numbers[i] * lcm)) / lcm;
}

console.log("Bội chung nhỏ nhất của là:", lcm);
