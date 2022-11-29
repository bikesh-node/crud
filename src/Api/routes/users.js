import express from 'express';
const router = express.Router();
import {
  createUser,
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from '../controllers/users.js';

// *CRUD OPERATION
router.post('/', createUser);
router.get('/', getAllUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

export default router;
