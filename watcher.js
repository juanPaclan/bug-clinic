module.exports = {
    local : function (traces) {
      //console.error('up');
      traces.on("request:start", function (trace) {
        console.log(trace.url);
      });

      traces.on("request:end", function (trace) {
        console.error(trace.statusCode);
      });
    }
  };
