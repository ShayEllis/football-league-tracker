import express from 'express';
import { leaguePage, addLeague } from '../controllers/index.js';
import { modifyLeagueName, performAsyncActions } from '../middleware/index.js';

const leagueRouter = express.Router();

leagueRouter.get('/', leaguePage);

leagueRouter.post('/', addLeague);

export default leagueRouter;
