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
      RETURNING id, ${columns}
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
      return data
    } else {
      return Promise.reject(new Error('ID no found'))
    }
  }
}

export default Model;
