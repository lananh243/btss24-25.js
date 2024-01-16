
const number = parseInt(prompt("Nhập một số: "));
let isPrime = true;

if (number <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}
if (isPrime) {
  console.log(number + " là số nguyên tố.");
} else {
  console.log(number + " không là số nguyên tố.");
}