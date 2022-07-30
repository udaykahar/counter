let count = 0;
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const btnclass = btn.classList;
        if(btnclass.contains("decrease")){
            count--;
            value.textContent=count;
            value.style.color = "red";
        }else if(btnclass.contains("increase")){
            count++;
            value.textContent=count;
            value.style.color = "green";
        }else{
            count=0;
            value.textContent=count;
            value.style.color = "black";
        }
    })
    
});