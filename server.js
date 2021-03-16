const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'my-app', 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'my-app', 'build', 'index.html'));
});

const listener = app.listen(process.env.PORT || 8080, () => {
    console.log(`serving at http://localhost:${listener.address().port}`)
});