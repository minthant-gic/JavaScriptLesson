let oldH1 = document.querySelector("#hh")

// let lis = document.querySelector(ul.lis)
// let firstList = document.querySelector("ul > li:first-child")
// let aTag = firstList.childNodes[0]

// aTag.id = "bibi"
// aTag.className = "best"

let text = document.createTextNode("New Header")
let newH1 = document.createElement("h1")
newH1.appendChild(text)
newH1.className = "bb"
newH1.id = "bibi"

let body = oldH1.parentNode
body.replaceChild(newH1,oldH1)
