let number = parseInt(prompt("Nhập một số: "));

if (number <= 1) {
  console.log("Số nguyên tố đầu tiên không tồn tại.");
} else {
  let count = 0;
  let i = 2;

  while (count < number) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log("Số nguyên tố đầu tiên", i);
      break;
    }
  }
}