var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
  fs.readFile('index.html',function(err,data){
    if (err) throw err;
    console.log(data);

    var buf = new Buffer(data);
    response.send(buf.toString('utf8',0,buf.length));
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
