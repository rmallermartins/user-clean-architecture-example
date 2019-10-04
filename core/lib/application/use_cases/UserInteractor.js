import { User } from "../../domain/entities/User";

export class UserInteractor {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  createUser(name, email, password) {
    const user = new User(name, email, password);
    return userRepository.create(user);
  }

  getUser(id) {
    return userRepository.get(id);
  }
}
