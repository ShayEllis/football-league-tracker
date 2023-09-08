const testData = {}

testData.cards = [...Array(25)].map((val, idx) => {
  return {
    leagueName: `League Number ${idx + 1}`,
    teamName: `Team Number ${idx + 1}`,
    ranking: idx + 1,
    buyIn: `$${(idx + 1) * 10}`,
    payout: `$${(idx + 1) * 10.0 * 2.4}`,
    platform: `Platform ${idx + 1}`,
  }
})

export default testData
