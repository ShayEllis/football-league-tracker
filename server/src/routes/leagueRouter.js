import express from 'express';
import { testEnvironmentVariable } from '../settings.js';

const leagueRouter = express.Router();

leagueRouter.get('/', (req, res, next) => {
  if (true) {
    res.status(200).json({ message: testEnvironmentVariable });
  } else {
    res.status(404).send();
    // res.sendStatus(404)
  }
});

export default leagueRouter;
