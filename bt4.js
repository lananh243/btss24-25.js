let a =parseInt(prompt("Nhập số nguyên dương bất kì"));
let sum = 0;
let square = 0;
if(a<0){
    console.log("Không hợp lệ");
}else{
   for(let i = 1; i < a; i++){
    if( i % 2 === 0){
        square = i * i;
        sum += i;
        console.log(i);
        console.log("Bình phương của các số là: "+square);
        }
    } 
    
    if(sum < a){
        console.log("Tổng các số nhỏ hơn số đã nhập là: "+sum);
    }else{
        console.log("Tổng các chữ số lớn hơn số đã nhập");
    }
}
