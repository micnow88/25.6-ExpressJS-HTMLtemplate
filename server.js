var express = require('express');
var app = express();
app.use(express.static('assets'));

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/auth/google', function(req, res, next){
  console.log('Jestem pośrednikiem przy żądaniu do /auth/google');
  next();
});

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/log', function (req, res) {
  res.render('content1');
});

app.get('/auth/google', function (req, res) {
  res.render('content2', {
    user:{
      first_name: req.query.first_name,
      last_name: req.query.last_name
    }
  });
});

app.listen(3000);
app.use(function (req, res, next) {
  res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
