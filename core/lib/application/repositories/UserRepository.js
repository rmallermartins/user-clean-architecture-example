export class UserRepository {
  constructor(repository) {
    this.repository = repository;
  }

  create(user) {
    return this.repository.create(user);
  }

  get(id) {
    return this.repository.get(id);
  }
}
