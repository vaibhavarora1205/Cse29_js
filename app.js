console.log("Hello World");
document.write("Hello World");
var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="Vaibhav";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=undefined;
console.log(num);
console.log(typeof(num));
// let n;
// console.log(n);
// console.log(typeof(n));

//function
var sayHello=function(){
    alert('Hello!');
}

const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);
if(sym1==sym2)
{
    console.log(true);
}
else
{
    console.log(false);
}