const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// app.use((req, res, next) =>{
//   res.render('maintainence.hbs');
// })

hbs.registerHelper('getCurrentYear', ()=>{
  return new Date().getFullYear();
});

hbs.registerHelper('scareIt', (text) => {
  return text.toUpperCase();
})

app.get('/', (req, res)=>{
  res.render('home.hbs', {
    pageTitle: 'Tanav\'s Blog',
    pageBody: 'It\'s Tanav Blog',
    welcomeHome: 'Welcome to my Blog'
  });
});


app.get('/about', (req, res)=>{
  res.render('about.hbs', {
    pageTitle: 'About Us',
    pageBody: 'About Us'

  });
});

app.get('/bad', (req, res)=>{
  res.send({
    Name: 'Gayathri Yenuginti',
    Age: 31,
    Interests:['Cooking', 'Watching TV']
  });
})

app.listen(3000, ()=> {
  console.log('Server is up on port 3000');
});
