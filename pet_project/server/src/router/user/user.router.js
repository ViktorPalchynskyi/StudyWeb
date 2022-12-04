import express from 'express';
import { UserRepository } from '../../database/repositories/user.repository.js';
// import { func } from "@pet";


export const userRouter = express.Router();

userRouter
   .get('/name', (req, res) => res.send('<h1>User Name</h1>'))
   .get('/login', (req, res) => res.send(`
   <form action="/user/settings" method="post">
         <label for="POST-name">Name:</label>
         <input id="POST-name" type="text" name="firsName">
         <label for="POST-name">Last Name:</label>
         <input id="POST-name" type="text" name="lastName">
         <label for="POST-age">Age:</label>
         <input id="POST-age" type="text" name="age">
         <input type="submit" value="Save">
      </form>`
   ))
   .post('/settings', async (req, res) => {
      const { firsName, lastName, age } = req.body;
      const response = await UserRepository.findOrCreate({
         firsName,
         lastName,
         age,
      });
      res.send(`
         <h1>Loggen in</h1>
         <p>Youre name ${firsName}</p>
         <p>Youre last name ${lastName}</p>
         <p>Youre age is ${age}</p>
      `);
   });

