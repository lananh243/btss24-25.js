let n =parseInt(prompt("Nhập n"));
let S = 0;
let P = 1;
if(n<0){
    console.log("Không hợp lệ");
}else{
   for(let i = 1; i<=n; i++){
        P = P *i;
        S = S +P;
    }
    console.log("Kết quả của biểu thức: " +S); 
}
    
