export const createMessageTable = `
DROP TABLE IF EXISTS league_info_test;

CREATE TABLE IF NOT EXISTS league_info_test (
	id SERIAL PRIMARY KEY,
	league_name VARCHAR(25) NOT NULL UNIQUE,
	team_name VARCHAR(25) NOT NULL,
	team_count VARCHAR(25) NOT NULL,
	platform VARCHAR(25),
	draft_date DATE,
	buy_in MONEY NOT NULL,
	draft_rank INT,
	team_rank INT,
	playoff_teams INT,
	payout_1 MONEY,
	payout_2 MONEY,
	payout_3 MONEY
);
`;

export const insertMessages = `
INSERT INTO league_info_test (league_name, team_name, team_count, platform, draft_date, buy_in, draft_rank, team_rank, playoff_teams, payout_1, payout_2, payout_3)
VALUES
  ( 'League 1', 'Team 1', '10-Team', 'ESPN', '09/28/2023', '15.00', '1', '1', '3', '50.00', '20.00', '5.00'),
  ( 'League 1', 'Team 1', '10-Team', 'ESPN', '09/28/2023', '15.00', '1', '1', '3', '50.00', '20.00', '5.00'),
  ( 'League 1', 'Team 1', '10-Team', 'ESPN', '09/28/2023', '15.00', '1', '1', '3', '50.00', '20.00', '5.00');
`;

export const dropMessagesTable = 'DROP TABLE league_info_test;';
