import path from 'path';
import dotenv from 'dotenv';
import { __dirname } from '../helpers/environmentValues.js';
 
dotenv.config({
   path: path.join(__dirname, '../../.env')
})

export const config = {
   server: {
      port: process.env.SERVER_PORT || 3000
   },
   db: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      name: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      dialect: process.env.DB_DIALECT
   }
};