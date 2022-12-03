import express from 'express';
import { UserRepository } from '../../database/repositories/user.repository.js';
// import { func } from "@pet";


export const userRouter = express.Router();

userRouter
   .get('/name', (req, res) => res.send('<h1>User Name</h1>'))
   .get('/login', (req, res) => res.send(`
   <form action="/user/settings" method="post">
         <label for="POST-name">Name:</label>
         <input id="POST-name" type="text" name="userName">
         <label for="POST-name">Name:</label>
         <input id="POST-name" type="text" name="userLastName">
         <label for="POST-age">userLastName:</label>
         <input id="POST-age" type="text" name="userAge">
         <input type="submit" value="Save">
      </form>`
   ))
   .post('/settings', async (req, res) => {
      const { userName, userLastName, userAge } = req.body;
      func();
      res.send(`
         <h1>Loggen in</h1>
         <p>Youre name ${userName}</p>
         <p>Youre last name ${userLastName}</p>
         <p>Youre age is ${userAge}</p>
      `);
   });

