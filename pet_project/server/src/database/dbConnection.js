import { config } from '../config/index.js';
import { Sequelize } from 'sequelize';
import { UserFactory } from './models/user.model.js';

// require('dotenv').config();

export const createModels = () => {
   try {
      const DB = new Sequelize(config.db.name, config.db.user, config.db.password, {
         dialect: config.db.dialect,
         host: config.db.host,
         define: {
            timestamps: false,
         },
         logging: false,
      });
      const db = {
         DB,
         UserModel: UserFactory(DB),
         // AdminModel: AmdinModel(DB),
      };

      DB.sync({ alter: true }).catch((err) => {
         console.log('createModels DB.sync - caught exception: ', err);
         throw new Error(err);
      });

      return db;
   } catch (e) {
      console.log('createModels - caught exception:', e);
      throw new Error(e.message);
   }
};