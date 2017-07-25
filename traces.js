var domain = require("domain");
var strackUp = require("stackup");
var readFile = require("fs").readFile;
module.exports = scenario;
function scenario(jsonPath, cb) {
     // create a new domain
     var d = domain.create();
     // "handle" the error (OMG DON'T DO THIS IN PRODUCTION CODE)
     d.on("error", cb);
     // use the domain
     d.run(function () {
         readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
           cb(error, JSON.parse(contents));
         });
     });
   }
// solucion 
// require("stackup");
//
//   var domain = require("domain");
//   var readFile = require("fs").readFile;
//
//   module.exports = scenario;
//
//   function scenario(jsonPath, cb) {
//     var d = domain.create();
//
//     d.on("error", cb);
//
//     d.run(function () {
//       readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
//         cb(error, JSON.parse(contents));
//       });
//     });
//   }
//
