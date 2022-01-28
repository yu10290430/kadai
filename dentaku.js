//電卓
let result = document.getElementById("result");
let numbers = ["0","00","1","2","3","4","5","6","7","8","9"];
let operator = ["+","-","*","/","."];

function clickbutton(target){
    if(target.value === "AC"){
        result.value = "0";
    } else if(target.value === "="){
        result.value = eval(result.value)
    }else {
        if(result.value === "0") {
            result.value = target.value;
        }else if (operator.includes(result.value.slice(-1)) == true && operator.includes(target.value) == true){
            return;
        }else{
     result.value += target.value;
        }
    }
}


