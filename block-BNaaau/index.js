let http = require("http");
let url = require("url");

let server = http.createServer(handleServer);

function handleServer(req,res){
    // console.log(req);
    // console.log(req);
}

server.listen(5001, ()=> {
    // console.log("Server is listening on server 5k")
})

let nodeServer = http.createServer(handleNode);

function handleNode(req,res){
    res.writeHead(200, {"Content-type" : "text/plain"})
    res.end("My first server in Node js");
}
nodeServer.listen(5100, ()=> {
    // console.log("Server is listening on 5100")
})


let nodeServer2 = http.createServer(handleNode2);

function handleNode2(req,res){
    res.writeHead(200, {"Content-type" : "text/plain"})
    let val = req.headers["user-agent"];
    res.end(val);
}
nodeServer2.listen(5555, ()=> {
    // console.log("Server is listening on 5555");
})


let nodeServer3 = http.createServer(handleNode3);

function handleNode3(req,res){
    res.writeHead(200, {"Content-type" : "text/plain"})
    res.write(req.url);
    res.write(req.method);
    res.end();
}
nodeServer3.listen(5566, ()=> {
    // console.log("Server is listening on 5555");
})


let nodeServer4 = http.createServer(handleNode4);

function handleNode4(req,res){
    res.writeHead(200, {"Content-type" : "application/json"})
    let str = JSON.stringify(req.headers);
    res.write(str);
    res.end();
}
nodeServer4.listen(7001, ()=> {
    // console.log("Server is listening on 7000");
})


let nodeServer5 = http.createServer(handleNode5);

function handleNode5(req,res){
    res.statusCode = 202;
    res.end();
}
nodeServer5.listen(3333, ()=> {
    // console.log("Server is listening on 3333");
})


let nodeServer6 = http.createServer(handleNode6);

function handleNode6(req,res){
    // res.setHeader("Content-Type", "text/html");
    res.writeHead(200, {"Content-Type": "text/html"})
    res.end(`<h3>Welcome to altcampus</h3>`);
}
nodeServer6.listen(8000, ()=> {
    // console.log("Server is listening on 8000");
})

let nodeServer7 = http.createServer(handleNode7);

function handleNode7(req,res){
    res.setHeader('Content-Type', 'application/json');
    // res.writeHead(200, {"Content-type": "application/json"})
    res.end(JSON.stringify({success: true, message: 'Welcome to Nodejs'}));
}
nodeServer7.listen(8888, ()=> {
    // console.log("Server is listening on 8888");
})


let nodeServer8 = http.createServer(handleNode8);

function handleNode8(req,res){
    // console.log(req.method);
    res.writeHead(200, {"Content-type": "text/html"})
    res.end(`<h2>posted for first time</h2>`)
}
nodeServer8.listen(5050, ()=> {
    // console.log("Server is listening on 5050");
})


let nodeServer9 = http.createServer(handleNode9);

function handleNode9(req,res){
    let str= url.parse(req.url);
    if(req.method === "GET" && str.pathname === "/"){
        res.writeHead(200, {"Content-type": "text/plain"})
        res.end("Abijeet")
    } else if(req.method === "GET" && str.pathname === "/about"){
        res.writeHead(200, {"Content-type": "text/html"})
        res.end("<h2>Abhijeet</h2>")
    } else {
        res.writeHead(404, {"Content-type": "text/html"})
        res.end("<h2>Page Not Found</h2>")
    }
}
nodeServer9.listen(2345, ()=> {
    // console.log("Server is listening on 2345");
})


let nodeServer10 = http.createServer(handleNode10);

function handleNode10(req,res){
    let str= url.parse(req.url);
    if(req.method === "GET" && str.pathname === "/"){
        res.writeHead(200, {"Content-type": "text/html"})
    
    res.write(`<input type="text" placeholder="Add Your Name">`)
    res.write(`<input type="email" placeholder="Add Your Name">`)
    res.end();
    } else if(req.method === "POST" && str.pathname === "/"){
        res.writeHead(200, {"Content-type": "text/html"})
        res.end("<h2>Posted for the second time</h2>")
    } else {
        res.writeHead(400, {"Content-type": "text/html"})
        res.end("<h2>Page Not Found</h2>")
    }
}
nodeServer10.listen(2346, ()=> {
    // console.log("Server is listening on 2346");
})




let nodeServer11 = http.createServer(handleNode11);

function handleNode11(req,res){
    let str= url.parse(req.url, true);
    res.writeHead(200, {"Content-type": "application/json"})
    res.end(JSON.stringify(str.query));
}
nodeServer11.listen(1234, ()=> {
    console.log("Server is listening on 1234");
})


