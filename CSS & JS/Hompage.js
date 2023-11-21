// ===== Count System 
let valueDisplay = document.querySelectorAll(".num");
let interval = 7000;

valueDisplay.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval/endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue==endValue){
            clearInterval(counter);
        }
    }, duration)

});
// ===== Count System end 

// ===== Faq System 

const questions = document.querySelectorAll(".questionI");

questions.forEach((questionI)=>{
    questionI.addEventListener("click",()=>{
        questionI.classList.toggle("active");
    })
})