document.body.childNodes[1].innerText="Hello Javascript revision";
newBtn=document.createElement("button");
newBtn.innerText="Click me";
let button=document.querySelector(".btn");
button.addEventListener("click",()=>{
  window.alert("This is an alert message");  
});
button.addEventListener("mouseover",()=>{
     
});

document.querySelector(".box").append(newBtn);