import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
   path: path.join(__dirname, '../../.env')
})

export const config = {
   server: {
      port: process.env.SERVER_PORT || 3000
   }
};