import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import  { indexRouter } from './router/main.router.js';

const app = express();
const jsonParser = express.json();

const myLogger = (req, res, next) => {
   console.log('Time:', Date.now());
   next();
}

const errorHandler = (err, req, res, next) => {
   console.log('We have an error');
   res.status(500).send('Idy nahuy!')
}

app.use(express.static('public'));
app.use(helmet());
app.use(myLogger);
app.use(compression());
app.use(cookieParser());
app.use('/', indexRouter);
app.use(jsonParser);
app.use(errorHandler);
 
app.listen(3000, () => {
   console.log('Server Started');
});