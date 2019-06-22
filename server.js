var http = require("http");

function say(word) {
    console.log(say);
    }
    
    function execute(someFunction, value) {
        someFunction(value);
    }
    
    execute(function(word){ console.log(word) }, "Hello");
    
http.createServer(function(request, response) { 
    response.writeHead(200, {"Content-Type": "text/plain"}); 
    response.write(function say(word) {
        consol.log(word);
    });
response.end();
}).listen(8888);
