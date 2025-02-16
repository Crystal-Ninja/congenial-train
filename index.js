const display=document.getElementById("output");

function appendvalue(value){
    display.textContent+=value;
}

function clearspace(){
    display.textContent="";
}
function remove(){
    display.textContent=display.textContent.slice(0,-1)
}
function calculate(){
    try{
        display.textContent=eval(display.textContent.replace("X","*").replace("^","**").replace("%","/100"));
    }catch(error){
        display.textContent="Syntax Error"
    }
}
