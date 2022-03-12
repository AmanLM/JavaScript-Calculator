let screen = document.getElementById('screen');
var buttons = document.querySelectorAll("button");
var result = document.getElementById("result");

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){

        if(this.innerHTML=="="){
            result.innerHTML = eval(result.innerHTML);
        }
        else{
            if(this.innerHTML=="AC"){
                result.innerHTML = " ";
            }
            else{
                result.innerHTML += this.innerHTML;//Stores in main screen
            }
        }
    })
}