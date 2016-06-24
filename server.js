
var app = require('express')();
var requestProxy = require('express-request-proxy');
​
app.post('/api/webhooks/:channel', requestProxy({
  url: 'http://google.mvargeson.ultrahook.com/api/webhooks/:channel'
}));
​
app.listen(process.env.PORT || 9000);
​
