var http = require("http");
database.query("SELECT * from hugetable", functions(rows) {
    var: result = rows
});

console.log("hello world");

function onRequest(request, response) { 
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.write("Hello world");
response.end();
}

http,createServer(onRequest).listen(8888);
