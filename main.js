var express = require("express");
var app = express();
app.use(express.static("static"));
app.get("/", function(req, res) {
  res.redirect("/index.html");
})
var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  if( host === "::" ) {
    host = "localhost";
  }
  console.log("Listening at http://%s:%s", host, port);
});
