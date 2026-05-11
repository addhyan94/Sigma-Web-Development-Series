let btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    document.getElementById("msg").textContent = "Button dab gaya!"
    document.getElementById("msg").style.color = "aqua"
})
let Btn = document.getElementById("counter-btn");
Btn.addEventListener("click", (event) => {
    Btn.textContent = `Click Counter: ${event.detail}`
})