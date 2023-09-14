import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
// Import routes
import leagueRouter from './routes/leagueRouter.js'
// Setup environment variables
dotenv.config()
// Initialize the express app
const app = express()
const PORT = process.env.PORT || 4000
// Initialize morgan for logging
app.use(morgan('short'))
// Use experess.json() to parse the incomming HTTP request body - available under the req.body property
app.use(express.json())
// Use express.urlencoded() to parse incomming requests with url encoded payloads - available under the req.body property
app.use(express.urlencoded({ extended: true }))
// Initialize cors
const corsOptions = {
  origin: '*', // Only the origins listed here will be allowed
  methods: ['get', 'put', 'post', 'delete'],
  credentials: true,
  maxAge: 1440, // One day in seconds
  optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))
// Initialize cookie-parser to parse the cookie header, available under req.cookies
app.use(cookieParser())

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
