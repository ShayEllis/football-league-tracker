import Model from '../models/model.js';

const leagueModel = new Model('league_info');

export const leaguePage = async (req, res) => {
  try {
    const data = await leagueModel.select(
      'league_name, team_name, team_count, platform, draft_date, buy_in, draft_rank, team_rank, playoff_teams, payout_1, payout_2, payout_3'
    );
    res.status(200).json({ message: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
