export class UserInteractor {
  createUser(name, email, password) {
    const user = new User(name, email, password);
    return userRepository.create(user);
  }

  getUser(id) {
    return userRepository.get(id);
  }
}
