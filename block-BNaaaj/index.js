console.log('Welcome to Nodejs');

let os = require("os");

const { unlink, readFile } = require('fs');

readFile("./index.md", (err, data)=> {
    console.log(err, data.toString())
})


unlink("./index.md", (err) => {
  if (err) throw err;
  console.log('successfully deleted /index.md');
});


let cpus = os.cpus().length;
let freeMemory = os.freemem();

console.log(os.version());
console.log(os.uptime());


let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);
console.log(buff1);
buff1.write("Hello Abhijeet mane, how are you?");
console.log(buff1);
console.log(buff2);
console.log(buff1.toString());
console.log(buff2.toString());