import express from 'express';

const leagueRouter = express.Router();

leagueRouter.get('/', (req, res, next) => {
  if (true) {
    res
      .status(200)
      .json({ message: 'Successful response from the league Route!' });
  } else {
    res.status(404).send();
    // res.sendStatus(404)
  }
});

export default leagueRouter;
