import express from 'express'
import { getAllPosts } from './db.js'
import { createPost } from './db.js'

const app = express()
app.use(express.json())

app.get('/posts', async (req, res) => {
    const posts = await getAllPosts()
    res.json(posts)
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
