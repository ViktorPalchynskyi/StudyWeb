import { UserModel } from "../index.js";

export class UserRepository {
   static async findOrCreate(params, defauls = null) {
      return await UserModel.findOrCreate({
         where: {
            ...params,
         },
         defaul: defauls || params,
      });
   }
}