import express from 'express';
import * as controller from '../controllers/mapsController.js';

const router = express.Router();

router.get('/', controller.getAllMaps);
router.get('/:mapId/onClick', controller.checkCoordinates);
router.get('/:mapId/leaderboard', controller.getLeaderboard);
router.get('/:mapId', controller.getSingleMap);

// ⏱️ stopwatch
router.post('/:mapId/start', controller.startMapTimer);
router.post('/:mapId/finish', controller.finishMapTimer);

router.post('/:mapId/post-time', controller.postTimeToLeaderBoard);

export default router;
