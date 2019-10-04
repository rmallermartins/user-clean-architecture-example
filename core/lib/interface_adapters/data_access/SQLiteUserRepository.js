import { User } from "../../domain/entities/User";

export class SQLiteUserRepository {
  constructor(sequelize) {
    this.db = sequelize;
    this.model = this.db.model('user');
  }

  async create(user) {
    const { name, email, password } = user;
    const seqUser = await this.model.create({ name, email, password });
    await seqUser.save();

    return new User(seqUser.id, seqUser.name, seqUser.email, seqUser.password);
  }

  async get(id) {
    const seqUser = await this.model.findByPk(id);
    return new User(seqUser.id, seqUser.name, seqUser.email, seqUser.password);
  }
}
