import { DataTypes } from 'sequelize';

export const UserFactory = (sequelize) => {
   const UserModel = sequelize.define('user', {
      userId: {
         type: DataTypes.UUID,
         primaryKey: true,
         allowNull: false,
      },
      firstName: {
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