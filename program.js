var domain = require("domain");
var strackUp = require("stackup");
var readFile = require("fs").readFile;

module.exports = scenario;
function scenario(jsonPath, cb) {

function doSomethingDangerousAndAsync(cb) {
     // create a new domain
     var d = domain.create();

     // "handle" the error (OMG DON'T DO THIS IN PRODUCTION CODE)
     d.on("error", function(err){
       console.log("domain1 handled this error ("+err.message+")");
     });

     // use the domain
     d.run(function () {

         readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
           cb(error, JSON.parse(contents));
         });
       doDangerousAsyncThing(cb);
     });
   }
   }
