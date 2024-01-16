let a =parseInt(prompt("Nhập a"));

let S = 0; 
let i = 1;
while( i <= a){
    S = S + 1.0 / i * i * i;
    i++;
}
console.log("Kết quả của biểu thức là: " +S.toFixed(5));
