function sayHello(){
    console.log("This is Async time out")
}

setTimeout(sayHello, 3000);

var fs = require("fs");
fs.readFile("./content.md", (err, content)=> {
    let val = ( content.toString());
    console.log(val);
});

function addNum(val) {

    let sum = 0;
    for(let i = 0; i <= val; i++){
        sum += i;
    }
    
    return sum
}

let final = addNum(10);
console.log(final);

const buff1 = Buffer.alloc(10);

buff1.write("welcome to node.js");

console.log(buff1);
console.log(buff1.toString());