let a =parseInt(prompt("Nhập a"));
let b =parseInt(prompt("Nhập b"));
let sum =0;
for(let i=a; i<b; i++){
    sum += i;
    console.log(i);
}
console.log("Tổng các số nguyên là: "+sum);
