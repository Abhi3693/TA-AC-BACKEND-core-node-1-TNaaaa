let http = require("http");

let server = http.createServer(handleServer);

function handleServer(req,res){

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("<h1>Welcome at nodeJS</h1>");
    res.write("<h2>Node is JavaScript run time envirnment</h2>");
    res.write("<h3>It contains core node modules and external library</h3>");
    res.write("<p>Node is ued to create data server applications</p>");
    res.end();
}

server.listen(4222, ()=> {
    console.log("Server is running on 4444");
})
