import express from 'express';
import { getLeagues, addLeague } from '../controllers/index.js';
import { modifyLeagueName, performAsyncActions } from '../middleware/index.js';

const leagueRouter = express.Router();

leagueRouter.get('/', getLeagues);

leagueRouter.post('/', addLeague);

export default leagueRouter;
