const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach(function (buttons) {
    buttons.addEventListener("click", function(e){
       // console.log("Se ha hecho clic en el botón:", e.currentTarget.textContent);
       const styleBtns = e.currentTarget.classList;
       
        if (styleBtns.contains("decrease")) {
            count--;
            if (count < 0) {
                value.style.color = "red";
            }
        }
        else if (styleBtns.contains("increase")){
            count++;
            if (count > 0) {
                value.style.color = "green";
            }
        }
        else{
            count=0;
            if(count === 0){
                value.style.color = "#222";
            }
        }
        value.textContent = count;
    })
});
