import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

const users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  const _id = uuidv4();
  const userWithId = { ...user, _id };

  users.push(userWithId);
  res.send(userWithId);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user._id === id);
  if (!foundUser) {
    res.status(404).send({ success: false, message: "User Not found" });
  }
  res.send(foundUser);
});
export default router;
