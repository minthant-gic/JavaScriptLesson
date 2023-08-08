// let name = prompt("Enter Your name")

// document.querySelector("#hh").innerText = name

let con = confirm("are you user?")
let answer = con ? "User" : "Bot"

document.querySelector("#hh").innerText = answer

let text = document.querySelector("#hh")
text.style.background = "black"
text.style.color = "white"



document.querySelector("#btn").addEventListener('click',
function(){
    window.location.href = "next.html"
}
)