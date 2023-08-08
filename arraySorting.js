let numbers = [12,1,15,2,3,56,23,12,56]


numbers.sort((x,y) => x-y);
console.log(numbers)


function under13(num){
    return num < 13;
}

let result = numbers.find(x => x <13)

console.log(result)