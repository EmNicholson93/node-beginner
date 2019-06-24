function route(handle, pathname, response, postData) {
    console.log("about to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response, postData);
    } else {
        console.log("No rquest handler found for " + pathname);
        response.writeHead(404, {"content.Type": "text/plain"});
        reponse.write("404 Not found");
        response.end();
    }
}

exports.route = route;