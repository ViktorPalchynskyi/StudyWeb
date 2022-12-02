import express from 'express';

export const adminRouter = express.Router();

adminRouter
   .get('/', (req, res) => {
      console.log('Cookies: ', req.cookies)
      console.log('Signed Cookies: ', req.signedCookies)
   })
   .get('/panel', (req, res) => {
      res.send(`
         <h1>Admin panel</h1>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est hic officia eligendi possimus nihil officiis repellendus ab natus sequi quo esse accusantium nostrum quis, quae aut fugit, delectus quod omnis!</p>
      `)
   });