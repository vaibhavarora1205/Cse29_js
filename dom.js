// const para=document.getElementById("p1");
// console.log(para);
// para.innerHTML="<b>Learning dom</b>"
// const result=document.getElementsByClassName("p1");
// console.log(result);
// result[1].innerHTML="Arora";
// result[0].innerHTML="Vaibhav";
// const tag=document.getElementsByTagName("p");
// console.log(tag);
// tag[3].style.color="red";
// document.querySelector("#p1");
// document.querySelectorAll(".p1");
// const para=document.querySelector("p");
// const c = para.getAttribute("class");
// const i = para.getAttribute("id");
// const result=document.getElementById("d");
// result.innerHTML= c,i;
// const heading=document.createElement("h2");
// heading.innerHTML="DOM"
// const bodytag=document.getElementsByTagName("body");
// bodytag[0].append(heading);
// bodytag[0].prepend(heading);
function Hellofunction()
{
    alert("Hello");
}

function onClick(){
    console.log("Button clicked")
}
function onDblClick(){
    console.log("Button clicked twice")
}
function onMouseOver(){
    console.log("Mouse over button")
}
function onMouseDown(){
    console.log("MOuse down")
}
function onMouseUp(){
    console.log("Mouse Up")
}
function onMouseOut(){
    console.log("Mouse out")
}
function onMouseMove(){
    console.log("Mouse MOve");
}

const x=document.querySelector("input");
x.addEventListener('focus', onhandelfocus);
x.addEventListener('blur', onhandelblur);
function onhandelfocus()
{
    x.style.backgroundColor='red';
}
function onhandelblur()
{
    x.style.backgroundColor='green'
}
