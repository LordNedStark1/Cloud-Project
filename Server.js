var http = require("http")
var moment = require("moment")
var date = moment().format('LL')

console.log("Useing moment ...", date);
console.log("Building cloud projec x ...");


function onRquest(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.write("Hello Cloud project")
    response.end();
    console.log("Running on port 8000");
    
}
http.createServer(onRquest).listen(8000)