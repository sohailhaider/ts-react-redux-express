const express = require('express');
const request = require('request');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'my-app', 'build')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
// app.use('/search', 'https://itunes.apple.com/search');
app.get('/search', (req, res) => {
  request(
    { url: 'https://itunes.apple.com/search?limit=200&term='+req.query.term},
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'my-app', 'build', 'index.html'));
});

const listener = app.listen(process.env.PORT || 8080, () => {
    console.log(`serving at http://localhost:${listener.address().port}`)
});