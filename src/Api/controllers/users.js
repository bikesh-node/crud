import { v4 as uuidv4 } from "uuid";

const users = [];

export const getAllUser = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  const _id = uuidv4();
  const userWithId = { ...user, _id };

  users.push(userWithId);
  res.send(userWithId);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user._id === id);
  if (!foundUser) {
    res.status(404).send({ success: false, message: "User Not found" });
  }
  res.send(foundUser);
};
export const deleteUser = (req, res) => {
  const { id } = req.params;
  const newUser = users.filter((user) => user._id !== id);
  res.send(newUser);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  const user = users.find((user) => user._id === id);
  if (name) user.name = name;
  if (age) user.age = age;

  res.send(user);
};
