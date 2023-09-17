import { pool } from '../models/pool.js';
import {
  insertMessages,
  dropMessagesTable,
  createMessageTable,
} from './queries.js';

export const executeQueryArray = async (arr) => {
  return new Promise((resolve) => {
    const stop = arr.length;
    arr.forEach(async (query, index) => {
      await pool.query(query);
      if (index + 1 === stop) resolve();
    });
  });
};

export const dropTables = () => executeQueryArray([dropMessagesTable]);
export const createTables = () => executeQueryArray([createMessageTable]);
export const insertIntoTables = () => executeQueryArray([insertMessages]);
