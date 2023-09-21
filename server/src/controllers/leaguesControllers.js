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
  const columns = Object.keys(req.body).map((val) =>
    val.replace(/[A-Z][A-Za-z]+|[\d]+/g, (match) => {
      // Convert proerty names from camelCase to snake_case before sending to database
      return `_${match.charAt(0).toLowerCase() + match.slice(1)}`;
    })
  );
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

export const deleteLeague = async (req, res) => {
  console.log(req.params.id)
}