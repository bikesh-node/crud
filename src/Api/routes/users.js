import express from "express";
const router = express.Router();

const users = [
  {
    name: "John",
    age: 20,
  },
  {
    name: "Harry",
    age: 21,
  },
];

router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send(user);
});

export default router;
