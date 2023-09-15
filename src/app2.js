// Import the library
var asana = require('asana');

//const API_KEY = '1/1205507933696308:2995f4a3f942b610bf8431a8ba26768b';
//const WORKSPACE_ID = '1205508065440795';
//const PROJECT_ID = '1205508197426998';
// Note: Replace this value with your own personal access token
var personalAccessToken = '1/1205507933696308:2995f4a3f942b610bf8431a8ba26768b';

// Construct an Asana client
var client = asana.Client.create().useAccessToken(personalAccessToken);

// Get your user info
client.users.getUser("me")
  .then(function(me) {
    // Print out your information
    console.log('Hello world! ' + 'My name is ' + me.name + '!');
});
