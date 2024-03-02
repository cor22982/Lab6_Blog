import express from 'express'
// eslint-disable-next-line import/extensions
import { getAllPosts } from './db.js'

const app = express()
app.use(express.json())

app.get('/posts', async (req, res) => {
  const posts = await getAllPosts()
  res.json(posts)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {

})

app.get('/', (req, res) => {
  res.send('Hello from API BLOG')
})
