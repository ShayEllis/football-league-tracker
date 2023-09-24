import { pool } from './pool.js';

class Model {
  constructor(table) {
    this.pool = pool;
    this.table = table;
    this.pool.on(
      'error',
      (err, client) => `Error, ${err}, on idle client ${client}`
    );
  }

  async select(columns, clause) {
    let query = `SELECT ${columns} FROM ${this.table}`;
    if (clause) query += clause;
    return this.pool.query(query);
  }

  async insertWithReturn(columns, values) {
    const query = `
      INSERT INTO ${this.table} (${columns})
      VALUES (${values})
      RETURNING id, league_name AS "leagueName", team_name AS "teamName", team_count as "teamCount", platform, draft_date as "draftDate", buy_in as "buyIn", draft_rank as "draftRank", team_rank AS "teamRank", playoff_teams AS "playoffTeams", payout_1 AS payout1, payout_2 AS payout2, payout_3 AS payout3

    `;
    return this.pool.query(query);
  }

  async removeByIdWithReturn(id) {
    const query = `
      DELETE FROM ${this.table}
      WHERE id = ${id} 
      RETURNING *
    `;
    const data = await this.pool.query(query);
    if (data.rows.length > 0) {
      return data;
    } else {
      return Promise.reject(new Error('ID no found'));
    }
  }
}

export default Model;
