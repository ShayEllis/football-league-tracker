import Model from '../models/model.js';

const leagueModel = new Model('league_info');

export const leaguePage = async (req, res) => {
  try {
    const data = await leagueModel.select(
      'id, league_name, team_name, team_count, platform, draft_date, buy_in, draft_rank, team_rank, playoff_teams, payout_1, payout_2, payout_3'
    );
    res.status(200).json({ leagues: data.rows });
  } catch (err) {
    res.status(200).json({ leagues: err.stack });
  }
};

export const addLeague = async (req, res) => {
  const { league_name, team_name, team_count, platform, draft_date, buy_in, draft_rank, team_rank, playoff_teams, payout_1, payout_2, payout_3 } = req.body;
  const columns = 'league_name, team_name, team_count, platform, draft_date, buy_in, draft_rank, team_rank, playoff_teams, payout_1, payout_2, payout_3';
  const values = `'${league_name}', '${team_name}', '${team_count}', '${platform}', '${draft_date}', '${buy_in}', '${draft_rank}', '${team_rank}', '${playoff_teams}', '${payout_1}', '${payout_2}', '${payout_3}'`;
  try {
    const data = await leagueModel.insertWithReturn(columns, values);
    res.status(200).json({ leagues: data.rows });
  } catch (err) {
    res.status(200).json({ leagues: err.stack });
  }
};
