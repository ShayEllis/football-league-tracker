const server = {
  async fetchLeagues() {
    try {
      const response = await fetch('http://localhost:3000/league')
      if (!response.ok) throw new Error('failed to fetch')
      const jsonResponse = await response.json()
      return jsonResponse.leagues
    } catch (err) {
      console.error(err.message)
    }
  },
  async addLeague(data) {
    console.log(data)

    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }

    try {
      const response = await fetch('http://localhost:3000/league', init)
      if (!response.ok) throw new Error('failed to add league')
      const jsonResponse = await response.json()
      console.log(jsonResponse)
      return jsonResponse
    } catch (err) {
      console.err(err.message)
    }
  },
}

export default server
