var accountSid = 'AC52fdd1526ec931a474cd8db11cf3c561'; // Your Account SID from www.twilio.com/console
var authToken = '12df5a8159aa6bb36816330400529d6a';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node again',
    to: '+15197226672',  // Text this number
    from: '+12264003754' // From a valid Twilio number
})
.then((message) => console.log(message));
