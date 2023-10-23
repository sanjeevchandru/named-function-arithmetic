document.write("Arithmetic operation in named function"+"<br>");
document.write("--------------------------------------"+"<br>");
function arith(a,b){
    c=a+b;
    return c;
}
var a=parseInt(prompt("Enter a first value:"));
var b=parseInt(prompt("Enter a second value:"));
var x=arith(a,b);
document.write("The addition value of "+a+" and "+b+" is:  "+x+"<br>");



function sub(a,b){
    d=a-b;
    return d;
}
var x=sub(a,b);
document.write("The subtraction value of "+a+" and "+b+" is:  "+x+"<br>");


function mul(a,b){
    e=a*b;
    return e;
}
var x=mul(a,b);
document.write("The multiplication value of "+a+" and "+b+" is:  "+x+"<br>");


function div(a,b){
    f=a/b;
    return f;
}
var x=div(a,b);
document.write("The division value of "+a+" and "+b+" is:  "+x+"<br>");



function mod(a,b){
    g=a%b;
    return g;
}
var x=mod(a,b);
document.write("The modulo value of "+a+" and "+b+" is:  "+x+"<br>");


