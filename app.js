var express = require('express');
var app = express();
var http = require('http').Server(app);

app.get("/", function(req, res) {
  res.sendfile("client.html");
});

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("> Server on!");
});
