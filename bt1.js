let number =parseInt(prompt("Nhập số: "));
let num = 0;
if(number < 0){
    console.log("Không hợp lệ");
}else{
    for(let i=1; i<=number; i++){
        if(i % 2 === 0){
            console.log(i);
            let square = i*i;
            console.log("Bình phương số nguyên chẵn là: ", square);
        }
    }
    
}