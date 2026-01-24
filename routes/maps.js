import express from 'express';
import { getMaps } from '../controllers/mapsController.js';

const router = express.Router();

router.get('/', getMaps);

export default router;
