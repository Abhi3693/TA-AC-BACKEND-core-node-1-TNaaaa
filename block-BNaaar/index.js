let http = require("http");
let url = require("url");

let server = http.createServer(handleServer);

function handleServer(req,res){
    let parsedURL = url.parse(req.url);

    if(req.method === "GET" && parsedURL.pathname === "/"){
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end("Welcome to homepage");
    } else if(req.method === "GET" && parsedURL.pathname === "/about"){
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end("<h2>this is all about NodeJS</h2>");
    } else if(req.method === "POST" && parsedURL.pathname === "/about"){
        res.writeHead(200, {"Content-Type" : "text/plain"});
        res.end(`{message: this is a post request}`);
    } else {
        res.writeHead(404, {"Content-Type" : "text/html"});
        res.end("<h2>Page not found</h2>");
    }
}

server.listen(2000, ()=> {
    console.log("Listning on localhoast 3k");
})