const server = {
  async fetchLeagues() {
    try {
      const response = await fetch('http://shays-macbook-pro.local:3000/league')
      if (!response.ok) throw new Error('failed to fetch')
      const jsonResponse = await response.json()
      return jsonResponse.leagues
    } catch (err) {
      console.error(err.message)
    }
  },

  async addLeague(data) {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }

    try {
      const response = await fetch(
        'http://shays-macbook-pro.local:3000/league',
        init
      )
      const jsonResponse = await response.json()
      if (!response.ok) throw new Error(await jsonResponse.message)
      console.log(jsonResponse)
      return jsonResponse
    } catch (err) {
      console.error(err)
    }
  },

  async deleteLeague(id) {
    try {
      const response = await fetch(
        `http://shays-macbook-pro.local:3000/league/${id}`,
        { method: 'DELETE' }
      )
      const jsonResponse = await response.json()
      if (!response.ok) throw new Error(await jsonResponse.message)
      return jsonResponse
    } catch (err) {
      console.error(err)
    }
  },
}

export default server
