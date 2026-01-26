import express from 'express';
import * as controller from '../controllers/mapsController.js';

const router = express.Router();

router.get('/', controller.getAllMaps);
router.get('/:mapId/onClick', controller.checkCoordinates);
router.get('/:mapId', controller.getSingleMap);

export default router;
