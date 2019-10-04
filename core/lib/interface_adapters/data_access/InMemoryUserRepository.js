export class InMemoryUserRepository {
  constructor() {
    this.index = 1;
    this.data = {};
  }

  create(user) {
    const row = Object.assign({}, user);
    const rowId = this.index++;
    row.id = rowId;
    this.data[rowId] = row;
    return Promise.resolve(row);
  }

  get(id) {
    return Promise.resolve(this.data[id]);
  }
}
