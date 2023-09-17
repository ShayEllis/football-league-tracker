import express from 'express';
import { leaguePage, addLeague } from '../controllers/index.js';

const leagueRouter = express.Router();

leagueRouter.get('/', leaguePage);

leagueRouter.post('/', addLeague);

// leagueRouter.get('/', (req, res, next) => {
//   if (true) {
//     res.status(200).json({ message: "hi" });
//   } else {
//     res.status(404).send();
//     // res.sendStatus(404)
//   }
// });

export default leagueRouter;
