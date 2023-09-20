import Model from '../models/model.js';

const leagueModel = new Model('league_info');

export const getLeagues = async (req, res) => {
  try {
    const data = await leagueModel.select(
      'id, league_name AS "leagueName", team_name AS "teamName", team_count as "teamCount", platform, draft_date as "draftDate", buy_in as "buyIn", draft_rank as "draftRank", team_rank AS "teamRank", playoff_teams AS "playoffTeams", payout_1 AS payout1, payout_2 AS payout2, payout_3 AS payout3'
    );
    res.status(200).json({ leagues: data.rows });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const addLeague = async (req, res) => {
  // Create columns string - 'league_name, team_name, team_count, platform, draft_date, buy_in, draft_rank, team_rank, playoff_teams, payout_1, payout_2, payout_3'
  const columns = Object.keys(req.body).join(', ');
  // Create values string - `'${league_name}', '${team_name}', '${team_count}', '${platform}', '${draft_date}', '${buy_in}', '${draft_rank}', '${team_rank}', '${playoff_teams}', '${payout_1}', '${payout_2}', '${payout_3}'`
  const values = Object.values(req.body)
    .map((val) => `'${val}'`)
    .join(', ');

  try {
    const data = await leagueModel.insertWithReturn(columns, values);
    res.status(200).json({ leagues: data.rows });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
