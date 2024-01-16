let n =parseInt(prompt("Nhập n"));
let sum = 0;
if(n<0){
    console.log("Không hợp lệ");
}else{
    for(let i=0; i<=n; i++){
        console.log(i);
        if(i % 2 === 0){
            sum ++;
        }
    }
    console.log("Số chẵn: ",+sum);
}