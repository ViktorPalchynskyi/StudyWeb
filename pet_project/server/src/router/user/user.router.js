import express from 'express';

export const userRouter = express.Router();

const userLogger = (req, res, next) => {
   console.log('User route');
   next();
}

userRouter.use(userLogger);

userRouter
   .get('/name', (req, res) => res.send('<h1>User Name</h1>'))
   .get('/login', (req, res) => res.send(`
   <form action="/user/settings" method="post">
         <label for="POST-name">Name:</label>
         <input id="POST-name" type="text" name="name">
         <input type="submit" value="Save">
      </form>`
   ))
   .post('/settings', (req, res) => res.send('<h1>Loged in</h1>'));

