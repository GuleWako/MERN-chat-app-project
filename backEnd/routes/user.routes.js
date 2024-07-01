import express from 'express'
import protectRouter from '../middleware/protectRoute.js';
import { getUsersForSideBar } from '../controllers/user.controller.js';
const router = express.Router();
router.get('/', protectRouter, getUsersForSideBar)

export default router