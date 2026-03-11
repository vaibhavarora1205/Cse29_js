let person = {
    name: "Vaibhav",
    age: 19,
    isMarried: false,
    address: {
        street: "ABCD",
    }
}
console.log(person);

let person2= new Object();
person2.name='Vaibhav';
person2.age=19;
person2.isMarried= false;
person2.address ={};
person2.address.street="ABC";
console.log(person2);

let myinfo= new Array();
var myinfo1=myinfo;
console.log(myinfo,myinfo1);