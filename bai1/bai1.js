//ax + b = 0
function PTBN(a,b){
    if(a===0){
        if(b!==0){
            return "phương trình vô nghiệm";
        }else {
            return "phương trình vô số nghiệm";
        }
    }else {
        return -b/a;
    }
}

function Program(){
   let test = PTBN(5,8);
   alert(test);
}

Program();
