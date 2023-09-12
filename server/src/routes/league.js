import express from "express";

const leagueRouter = express.Router()

leagueRouter.get('/:id', (req, res, next) => {
  if (true) {
    res.send("success")
  } else {
    res.status(404).send()
    //res.sendStatus(404)
  }
})


export default leagueRouter