let display = document.getElementById("display");

let count = 0;
function increament(){
    count +=1;
    display.textContent =  count;
}

function Decreament(){
    count -=1;
    display.textContent = count;
    
}
let saveshow = document.getElementById("saveshow")

function savebtn(){
    
    saveshow.textContent +=count
    

}