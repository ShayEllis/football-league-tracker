import express from 'express';
import {
  getLeagues,
  addLeague,
  updateLeague,
  deleteLeague,
} from '../controllers/index.js';
import { modifyLeagueName, performAsyncActions } from '../middleware/index.js';

const leagueRouter = express.Router();

// Return leagues from database
leagueRouter.get('/', getLeagues);
// Add new leagues
leagueRouter.post('/', addLeague);
// Update a league in the database
leagueRouter.put('/', updateLeague);
// Delete a league from the database
leagueRouter.delete('/:id', deleteLeague);

/**
 * app.get()
 * app.put() - updating exsisting resources
 * app.post() - create new resources
 * app.delete()
 */

export default leagueRouter;
