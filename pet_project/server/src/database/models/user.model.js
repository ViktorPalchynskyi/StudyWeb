import { DataTypes } from 'sequelize';

export const UserFactory = (sequelize) => {
   const UserModel = sequelize.define('user', {
      firsName: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      lastName: {
         type: DataTypes.STRING,
         allowNull: true,
      },
      age: {
         type: DataTypes.INTEGER,
         allowNull: true,
      },
   });
   return UserModel;
};