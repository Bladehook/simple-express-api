import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [];

// Routes starting with /users
router.get("/", (req, res) => {
  res.send(users);
});

// Handle post request
router.post("/", (req, res) => {
  const user = req.body;
  // Creates new user and assigns UUID
  users.push({ ...user, id: uuidv4() });

  res.send(`User ${user.userName} added.`);
});

// Get specific user by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);

  res.send(foundUser);
});

// Delete specific user by id
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id != id);

  res.send(`User with id ${id} was removed from the database.`)
})

// Change specific data of user by id
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  const { userName, password, age } = req.body;

  if(userName) user.userName = userName;
  if(password) user.password = password;
  if(age) user.age = age;

  res.send(`User with the ID ${id} has been patched.`)
})

export default router;
