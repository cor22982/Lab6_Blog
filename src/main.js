import express from 'express'
import { getAllPosts, getOnePost, createPost } from './db'

const app = express()
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get('/posts', async (req, res) => {
  const posts = await getAllPosts()
  res.status(200).json(posts)
})
app.get('/posts/:postId', async (req, res) => {
  const { postId } = req.params
  const post = await getOnePost(postId)
  res.status(200).json(post)
})

app.post('/posts', async (req, res) => {
  const {
    Pearson,
    Fewdescription,
    History,
    Crucialevents,
    Curiosities,
    AlternativeText,
    AlternativeDescription,
    Textreferences,
    images,
  } = req.body
  const result = await createPost(
    Pearson,
    Fewdescription,
    History,
    Crucialevents,
    Curiosities,
    AlternativeText,
    AlternativeDescription,
    Textreferences,
    images,
  )
  res.status(201).json(result)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {

})

app.get('/', (req, res) => {
  res.send('Hello from API BLOG')
})
