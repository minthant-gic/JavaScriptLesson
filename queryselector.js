let scripts = document.scripts
let scriptsAry = Array.from(scripts)

scriptsAry.forEach((script) =>{
    console.log(script)
})

let btn = document.querySelector("img")

console.log(btn)


let list = document.querySelector("ul li")

for(let i = 0;i < list.length; i++){
let aTag = list[i].querySelector("a")
aTag.style.color = "red"
}

