import express from 'express';

import { userRouter } from './user/user.router.js';
import { adminRouter } from './admin/admin.router.js';

export const indexRouter = express.Router();

indexRouter
   .get('/', (req, res) => {
      res.send(`
      <h1>Hello there!</h1>
      <img src="img/sirius.jpg">
      `);
   })
   .use('/user', userRouter)
   .use('/admin', adminRouter);
