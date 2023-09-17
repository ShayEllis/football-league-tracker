import { expect, server, BASE_URL } from './setup.js';

describe('Leagues', () => {
  it('get leagues page', (done) => {
    server
      .get(`${BASE_URL}/leagues`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach((message) => {
          expect(message).to.have.property('id');
          expect(message).to.have.property('league_name');
          expect(message).to.have.property('team_name');
          expect(message).to.have.property('team_count');
          expect(message).to.have.property('platform');
          expect(message).to.have.property('draft_date');
          expect(message).to.have.property('buy_in');
          expect(message).to.have.property('draft_rank');
          expect(message).to.have.property('team_rank');
          expect(message).to.have.property('playoff_teams');
          expect(message).to.have.property('payout_1');
          expect(message).to.have.property('payout_2');
          expect(message).to.have.property('payout_3');
        });
        done();
      });
  });
});
