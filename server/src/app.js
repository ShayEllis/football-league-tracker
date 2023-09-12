import express from 'express'
import dotenv from 'dotenv'
// Import routes
import leagueRouter from './routes/league'

// Import environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use('/league', leagueRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

/**
 * app.get()
 * app.put() - updating exsisting resources
 * app.post() - create new resources
 * app.delete()
 */