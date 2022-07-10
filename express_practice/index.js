const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
   console.log('Rout started');
   res.send('<h1>Hello there)</h1>')
});

app.listen(port, () => {
   console.log('Server Started');
});