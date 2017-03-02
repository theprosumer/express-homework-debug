var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app);




  app.get('/', function(request, response){
    // request object is from the client,
    // the response is what were sending back
    response.send('Hey the server finally works')
  });

  app.get('/teletubby', function(request, response){
  	response.send({color:"red", name:"Po"})
  });

  app.get('/teletubby2', function(request, response){
  	response.send({color:"purple", name:"Tinky-Winky"})
  });
  
  app.get('/textpage', function(request, response){
  	response.send('This page does nothing')
  });

  app.use(express.static(path.join(__dirname, 'public')));

  app.set('views', path.join(__dirname, 'views'))

  app.set('view engine', hbs);



// first argument is the port number
server.listen(3000, function(){
  console.log('server is listening, but on what port, are you reading the code?')
})
