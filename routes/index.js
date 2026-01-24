import express from 'express';
import { getIndex, getHealth } from '../controllers/indexController.js';

const router = express.Router();

router.get('/', getIndex);
router.get('/api/health', getHealth);

export default router;
