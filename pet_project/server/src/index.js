import express from 'express';
import  { indexRouter } from './router/main.router.js';

const app = express();

const myLogger = (req, res, next) => {
   console.log('Time:', Date.now());
   next();
}

const errorHandler = (err, req, res, next) => {
   console.log('We have an error');
   res.status(500).send('Idy nahuy!')
}

app.use(myLogger);
app.use(express.static('public'));
app.use('/', indexRouter);
app.use(errorHandler);
 
app.listen(3000, () => {
   console.log('Server Started');
});