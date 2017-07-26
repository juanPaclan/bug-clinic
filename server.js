var createServer = require("http").createServer;
 var server = createServer(function (req, res) {
   if (req.method == 'GET') {
     res.writeHead(200, {"ok" : true});
     res.end('code of 200'+{ "ok" :true });
   }
   res.writeHead(404, {"error" : "notfound"});
   res.end('code of 404'+{ "error" :"notfound" });

 });
 server.listen(9999, function () {
   console.error("listening");
 });


 // var http = require('http')
 // var map = require('through2-map')
 // var server = http.createServer(function (req, res) {
 //   if (req.method !== 'POST') {
 //     return res.end('send me a POST\n')
 //   }
 //   req.pipe(map(function (chunk) {
 //     return chunk.toString().toUpperCase()
 //   })).pipe(res)
 // })
 // server.listen(Number(process.argv[2]))
