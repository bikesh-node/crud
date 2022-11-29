import db from '../database/database.js';
export class Users {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  save() {
    return db.execute('INSERT INTO users (name,age) VALUES(?,?)', [
      this.name,
      this.age,
    ]);
  }

  static deleteUser(id) {
    return db.execute('DELETE FROM users WHERE users.id =?', [id]);
  }

  static fetchAll() {
    return db.execute('SELECT* FROM users');
  }

  static findUser(id) {
    return db.execute('SELECT* FROM users WHERE users.id =?', [id]);
  }

  static updateUser(name, age, id) {
    const data = [name, age, id];
    return db.execute('UPDATE users SET name=?,age=? WHERE id=?', [
      name,
      age,
      id,
    ]);
  }
}
