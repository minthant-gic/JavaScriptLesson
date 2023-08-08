function doIt(name = "Mg Mg",age =20){
    console.log(name + age);
}

doIt("aye aye" , 16)

let dd = function(){
    console.log("dd fun")
}

dd();

(function(){
    console.log("IIFES")
})

let obj = {
    name : "Aung Aung",
    ob : function(){
        console.log("inside obj")
    }
}
obj.ob()