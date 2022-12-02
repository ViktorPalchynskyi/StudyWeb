import express from 'express';

import { userRouter } from './user/user.router.js';
import { adminRouter } from './admin/admin.router.js';

export const indexRouter = express.Router();

indexRouter
   .get('/', (req, res) => {
      res.send(`
      <form action="/user/login" method="get">
         <label for="POST-name">Name:</label>
         <input id="POST-name" type="text" name="name">
         <input type="submit" value="Save">
      </form>
      <img src="img/sirius.jpg">
      `);
   })
   .use('/user', userRouter)
   .use('/admin', adminRouter);
