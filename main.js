const modeToggle = document.querySelector(".switch-toggle");

const modeToggleLabel = document.querySelector(".switch-btn-label")

modeToggle.addEventListener("click", ()=>{
    document.body.classList.toggle("lightmode")

    if(modeToggleLabel.textContent==="Dark Mode"){
        modeToggleLabel.textContent="Light Mode"
    } else{
        modeToggleLabel.textContent="Dark Mode"
    }
})