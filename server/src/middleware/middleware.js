import axios from 'axios';

export const modifyLeagueName = (req, res, next) => {
  req.body.league_name = `LEAGUE: ${req.body.league_name}`;
  next();
};

export const performAsyncActions = async (req, res, next) => {
  try {
    await axios.get('https://picsum.photos/id/0/info');
    next();
  } catch (err) {
    next(err);
  }
};
