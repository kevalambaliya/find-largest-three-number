function findthree(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let c = parseInt(document.getElementById('num3').value);

    let msg;

     if(a >= b && a >= c){
        msg = a;
     }
    else if(b >= a && b >= c){
        msg = b;
     }
     else{
        msg = c;
     }

     document.getElementById('res').innerHTML = msg+ " IS A LARGEST NUMBER"
}