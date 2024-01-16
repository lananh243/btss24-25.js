let a =parseInt(prompt("Nhập a"));
let b =parseInt(prompt("Nhập b"));
let sum1 = 0;
let sum2=0;
if( a<0 || b<0){
    console.log("Không hợp lệ");
}else{
    
    for(let i= a; i<= b; i++){
        console.log(i);
        if(i % 2 === 1){
            sum1 +=i;
        }else{
            sum2+=i;
        }
    
    }
    console.log("Tổng các số chẵn: " +sum2);
    console.log("Tổng các số lẻ: " +sum1);


    
}