import { expect, server, BASE_URL } from './setup.js';

describe('Leagues', () => {
  it('get leagues page', (done) => {
    server
      .get(`${BASE_URL}`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.leagues).to.be.instanceOf(Array);
        res.body.leagues.forEach((league) => {
          expect(league).to.have.property('id');
          expect(league).to.have.property('league_name');
          expect(league).to.have.property('team_name');
          expect(league).to.have.property('team_count');
          expect(league).to.have.property('platform');
          expect(league).to.have.property('draft_date');
          expect(league).to.have.property('buy_in');
          expect(league).to.have.property('draft_rank');
          expect(league).to.have.property('team_rank');
          expect(league).to.have.property('playoff_teams');
          expect(league).to.have.property('payout_1');
          expect(league).to.have.property('payout_2');
          expect(league).to.have.property('payout_3');
        });
        done();
      });
  });
  it('posts leagues', (done) => {
    const data = {
      league_name: 'League 1',
      team_name: 'Team 1',
      team_count: '10-Team',
      platform: 'ESPN',
      draft_date: '2023-09-28T07:00:00.000Z',
      buy_in: '$15.00',
      draft_rank: 1,
      team_rank: 1,
      playoff_teams: 3,
      payout_1: '$50.00',
      payout_2: '$20.00',
      payout_3: '$5.00',
    };
    server
      .post(`${BASE_URL}`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.leagues).to.be.instanceOf(Array);
        res.body.leagues.forEach((league) => {
          expect(league).to.have.property('id');
          expect(league).to.have.property('league_name');
          expect(league).to.have.property('team_name');
          expect(league).to.have.property('team_count');
          expect(league).to.have.property('platform');
          expect(league).to.have.property('draft_date');
          expect(league).to.have.property('buy_in');
          expect(league).to.have.property('draft_rank');
          expect(league).to.have.property('team_rank');
          expect(league).to.have.property('playoff_teams');
          expect(league).to.have.property('payout_1');
          expect(league).to.have.property('payout_2');
          expect(league).to.have.property('payout_3');
          expect(league).to.have.property('league_name', `LEAGUE: ${data.league_name}`)
        });
        done()
      });
  });
});
