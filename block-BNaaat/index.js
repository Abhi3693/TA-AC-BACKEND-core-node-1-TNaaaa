let http = require("http");
let fs = require("fs");

let server = http.createServer(handleServer);

function handleServer(req,res){
    if(req.method === "GET" && req.url === "/file"){
        res.writeHead(200, {"Content-type" : "text/html"})
        fs.readFile("./node.html", (err, content)=>{
            if(err) console.log(err);
            res.end(content);
        })
    }
    if(req.method === "GET" && req.url === "/home"){
        res.writeHead(200, {"Content-type" : "text/html"})
        fs.createReadStream("./index.html").pipe(res);
    }
}

server.listen(5555, ()=> {
    console.log("server is listening on 5555");
})