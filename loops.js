let count;
document.write("Starting loop" + "</br>");
for(count=0;count<10;count++)
{
    document.write("Current count: "+count);
    document.write("</br>")
}
document.write("Loop Stopped" + "<br>" + "<br>");

document.write("For in Loop" + "<br>"+ "<br>")
const person={
    fname:"Vaibhav",
    lname:"Arora",
    age:19
}
for(let key in person)
{
    document.write("Person Details: " +key+ " : " + person[key] + "<br>")
}
document.write("<br>"+"Conditional Statement" + "<br>"+ "<br>")
let Age=20;
if(Age>18)
{
    document.write("<b>You are eligible to vote</b><br>")
}

let grade="L";
document.write("<br>"+"ENtering Switch block"+ "<br>");
switch(grade){
    case 'A': document.write("Good Job")
    break;
    case 'B': document.write("Pretty Good")
    break;
    case 'C': document.write("Passed")
    break;
    case 'D': document.write("Not so Good")
    break;
    case 'F': document.write("Fail")
    break;
    default: document.write("Unknown Grade")
}
document.write("<br>"+"Exiting Switch block"+ "<br>");

document.write("<br>"+"<b>Functions</b"+ "<br>");
function myFunction()
{
    alert("Hello World");
}