import { Users } from '../models/users.js';

export const getAllUser = (req, res) => {
  Users.fetchAll()
    .then((data) => {
      res.send(data[0]);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createUser = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const users = new Users(null, name, age);
  users
    .save()
    .then(() => {
      res.send('created User');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  Users.findUser(id)
    .then(([user]) => {
      res.send(user[0]);
      console.log(user);
    })
    .catch((err) => {
      res.send(err);
    });
};
export const deleteUser = (req, res) => {
  const { id } = req.params;
  Users.deleteUser(id)
    .then(([user]) => {
      res.send('User deleted successfully');
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const name = req.body.name;
  const age = req.body.age;

  Users.updateUser(name, age, id)
    .then((result) => {
      res.send('updated');
    })
    .catch((err) => {
      res.send('error');
      console.log(err);
    });
};
