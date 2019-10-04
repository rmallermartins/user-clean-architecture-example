import { UserSerializer } from "../serializers/UserSerializer";
import { UserInteractor } from "../../application/use_cases/UserInteractor";
import { UserRepository } from "../../application/repositories/UserRepository";

import { InMemoryUserRepository } from "../data_access/InMemoryUserRepository";
const userRepository = UserRepository(new InMemoryUserRepository());

// import { SQLiteUserRepository } from "../data_access/SQLiteUserRepository";
// import sequelize from "../../frameworks_drivers/database/sequelize";
// const userRepository = UserRepository(new SQLiteUserRepository(sequelize));

const userInteractor = UserInteractor(userRepository);

export class UserController {
  async createUser(request) {
    const { name, email, password } = request.payload;

    const user = await userInteractor.createUser(name, email, password);

    const userSerializer = new UserSerializer();
    return userSerializer.serialize(user);
  }

  async getUser(request) {
    const id = request.params.id;

    const user = await userInteractor.getUser(id);

    if (!user) {
      // Pode ser substituido chamando um método de 404NotFound do framework injetado
      return {
        success: false,
        msg: 'User Not Found',
        cod: 404,
      }
    }

    const userSerializer = new UserSerializer();
    return userSerializer.serialize(user);
  }
}
