var exec = require("child_process").exec;

function start() {
    console.log("Request handler 'start' was called");

    exec("find /", 
        { timeout: 10000, macBuffer: 20000*1024 },
        function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
}

function upload() {
    console.log("Request handler 'upload' was called");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hellow Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;