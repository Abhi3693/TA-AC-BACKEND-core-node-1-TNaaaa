let http = require("http");
let fs = require("fs");
let url = require("url");
// let htttp = require("http");
let server = http.createServer(handleServer);

function handleServer(req,res){
    let parsedURL = url.parse(req.url);
// console.log(req.url);
let x= req.url.split("/")[1];
// console.log(x);
    if(req.method === "GET" && parsedURL.pathname === "/"){
        res.writeHead(200, {'Content-type':'text/html'});
        fs.createReadStream("./index.html").pipe(res);
    } else if(req.method === "GET" && parsedURL.pathname === "/about"){
        res.writeHead(200, {'Content-type':'text/html'});
        fs.createReadStream("./about.html").pipe(res);
    } else if(req.url.split(".").pop() === "css"){
        console.log(req.url.split(".").pop())
        res.end("css Page")
        res.writeHead(200, {'Content-type':'text/css'});
        // fs.readFile("./Assets/styleSheet"+req.url, (err, content)=>{
        //     if(err) console.log(err);
        //     res.end(JSON.stringify(content));
        // })
    } else if(x === "/images"){
        console.log(req.url);
        console.log(req.url.split("/").shift())
        res.end("image Page")

        // res.writeHead(200, {'Content-type':'image/png'});
        // fs.readFile("./Assets/" + req.url, (err,content)=>{
        //     if(err) console.log(err);
        //     res.end(content);
        // });
    } else if(x === "js"){
        // console.log(req.url);
        // console.log(req.url.split("/").shift())
        // res.end("js Page")

        res.writeHead(200, {'Content-type':'text/css'});
        fs.readFile("./Assets/" + req.url, (err,content)=>{
                if(err) console.log(err);
                res.end(JSON.stringify(content));
            });
        // fs.createReadStream("./Assets/"+req.url).pipe(res);
    }  else {
        res.writeHead(404, {'Content-type':'text/html'});
        res.end("<h1>Page not Found</h1>");
    }
}
server.listen(3000, ()=> {
    console.log("Server is listening on 3k");
})