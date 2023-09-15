// Import the library
var asana = require('asana');

// Note: Replace this value with your own personal access token
var personalAccessToken = '0/123456789....';

// Construct an Asana client
var client = asana.Client.create().useAccessToken(personalAccessToken);

// Get your user info
client.users.getUser("me")
  .then(function(me) {
    // Print out your information
    console.log('Hello world! ' + 'My name is ' + me.name + '!');
});
