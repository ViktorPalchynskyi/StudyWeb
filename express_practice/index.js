const UserRouter = require('./user');

const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));

app.all('/', (req, res, next) => { 
   console.log('Test all');
   next();
});

app.use('/lox', UserRouter);

app.get('/', (req, res) => {
   console.log('Rout started');
   res.send(`
   <form action="" method="post">
      <label for="POST-name">Name:</label>
      <input id="POST-name" type="text" name="name">
      <input type="submit" value="Save">
      <img src='img/infinity.jpg'>
   </form>
   `)
});

app.post('/', (req, res) => {
   // console.log(req);
   res.send('<h1>Hello there)</h1>')
});


app.listen(port, () => {
   console.log('Server Started');
});