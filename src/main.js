import express from 'express'
// eslint-disable-next-line import/extensions
import { getAllPosts, getOnePost } from './db.js'
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/posts', async (req, res) => {
  const posts = await getAllPosts()
  res.status(200).json(posts)
})
app.get('/posts/:postId', async (req, res) => {
  const { postId } = req.params
  // eslint-disable-next-line no-undef
  const post = await getOnePost(postId)
  res.status(200).json(post)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {

})

app.get('/', (req, res) => {
  res.send('Hello from API BLOG')
})
