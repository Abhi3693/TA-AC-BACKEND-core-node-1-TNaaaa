let http = require("http");

let server = http.createServer(handleServer);

function handleServer(req,res){
    res.end("Welcome in Node Js");
}

server.listen(4000, ()=> {
    console.log("server is listing on port 4000");
})