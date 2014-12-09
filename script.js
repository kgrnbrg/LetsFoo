var http = require('http');
var fs = require('fs'); // Using the filesystem module
var path = require('path');
var httpServer = http.createServer(requestHandler);
httpServer.listen(8080);
var url = require('url');
var currentState =[false,false,false,false];

function writeToFile(str){
  var textString = str.toString(); // only needed if yunData is not a string
   fs.writeFile('lights.txt', textString, function (err) {
    if (err) throw err;
    console.log('Text file is updated!')
  })
};

function requestHandler(req, res) {
    var parsedUrl = url.parse(req.url);
console.log("The Request is: " + parsedUrl.pathname);
// Read index.html
fs.readFile(__dirname + parsedUrl.pathname, 
// Callback function for reading
function (err, data) {
// if there is an error
if (err) {
res.writeHead(500);
return res.end('Error loading ' + parsedUrl.pathname);
}
// Otherwise, send the data, the contents of the file
res.writeHead(200);
res.end(data);
  }
  );
}

var accountSid = 'AC9491a635840fa2e6def162dcce5a8489'; 
var authToken = '1efe746f97aa342c6188d2cfabd4b564'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
var numbers = ['19177044106','14846787440'];

function tMessage(){
for (var i = 0; i < numbers.length;i++){
    client.sendMessage({

        to: numbers[i], // Any number Twilio can deliver to
        from: '15168304399', // A number you bought from Twilio and can use for outbound communication
        body: 'One player is down!' // body of the SMS message

     }, function(err, responseData) { //this function is executed when a response is received from Twilio

        if (!err) { // "err" is an error received during the request, if any

            // "responseData" is a JavaScript object containing data received from Twilio.
            // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
            // http://www.twilio.com/docs/api/rest/sending-sms#example-1

            console.log(responseData.from); // outputs "+14506667788"
            console.log(responseData.body); // outputs "word to your mother."

        }

    });
  }
}


function tMessage2(){
for (var i = 0; i < numbers.length;i++){
    client.sendMessage({

        to: numbers[i], // Any number Twilio can deliver to
    from: '15168304399', // A number you bought from Twilio and can use for outbound communication
    body: 'Two players are down!' // body of the SMS message

 }, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }

});
}
}
function tMessage3(){
for (var i = 0; i < numbers.length;i++){
    client.sendMessage({

        to: numbers[i],// Any number Twilio can deliver to
    from: '15168304399', // A number you bought from Twilio and can use for outbound communication
    body: 'Three players are down!' // body of the SMS message

 }, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }

});
}
}
function tMessage4(){
for (var i = 0; i < numbers.length;i++){
    client.sendMessage({

        to: numbers[i], // Any number Twilio can deliver to
    from: '15168304399', // A number you bought from Twilio and can use for outbound communication
    body: 'Four players are down, LET THE FOOS BEGIN' // body of the SMS message

 }, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }

});
}
}
function tMessageEr(){
for (var i = 0; i < numbers.length;i++){
    client.sendMessage({

    to: numbers[i], // Any number Twilio can deliver to
    from: '15168304399', // A number you bought from Twilio and can use for outbound communication
    body: 'Wait nevermind, someone is not down anymore!' // body of the SMS message

 }, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+14506667788"
        console.log(responseData.body); // outputs "word to your mother."

    }

});
}
}


// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io').listen(httpServer);

// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection', 
    // We are given a websocket object in our function
    function (socket) {
    
      console.log("We have a new client: " + socket.id);
      var initData = {'currentState': currentState};
      socket.emit('init',initData);      
        
       socket.on('lights', function(){
        socket.emit('someonesDown', lightArray);
        //console.log("lights");
        led1 = data.P1,
        led2 = data.P2,
        led3 = data.P3,
        led4 = data.P4;
    })
    
    socket.on('someonesDown', function(data) {
      // Data comes in as whatever was sent, including objects
      console.log("Received: " + JSON.stringify(data));
      // Send it to all of the clients


        if (data.P1 == true) {
          currentState[0] = true;
          writeToFile('1');
          console.log("P1 want's to play");
          tMessage();
          console.log(tMessage);
        }
        else if (data.P1 == false){
          currentState[0] = false;
          writeToFile('5');
          console.log("P1 doesn't want to play");
          tMessageEr()
        }
        
        if (data.P2 == true) {
          currentState[1] = true;
          writeToFile('2');
          console.log("P2 want's to play");
          tMessage2();
        }
        else if (data.P2 == false){
           currentState[1] = false;
          writeToFile('6');
          console.log("P2 doesn't want to play");
          tMessageEr()
                    
        }
        if (data.P3 == true) {
           currentState[2] = true;
          writeToFile('3');
          console.log("P3 want's to play");
          tMessage3();

        }
        else if (data.P3 == false){
           currentState[2] = false;
           writeToFile('7');  
           console.log("P3 doesn't want to play");     
           tMessageEr() 
        }
        if (data.P4 == true) {
          currentState[3] = true;
          writeToFile('4');
          console.log("P4 want's to play");
          tMessage4();
        }
        else if (data.P4 == false){
          currentState[3] = false;
          writeToFile('8'); 
          console.log("P4 doesn't want to play"); 
          tMessageEr()      
        } 

        data['currentState']= currentState;
        socket.broadcast.emit('someonesDownServer', data);

      });
        
        // When this user emits, client side: socket.emit('otherevent',some data);
        socket.on('peer_id', function(data) {
            // Data comes in as whatever was sent, including objects
            console.log("Received: 'peer_id' " + data);
            
            // Send it to all of the clients
            socket.broadcast.emit('peer_id', data);
        });
                
        socket.on('disconnect', function() {
            console.log("Client has disconnected " + socket.id);
        });
    }
);
