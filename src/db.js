// eslint-disable-next-line import/extensions
import conn from './conn.js'

export async function getAllPosts() {
  const [rows] = await conn.query('SELECT * FROM blog_posts')
  return rows
}

export async function createPost(title, content) {
  // eslint-disable-next-line no-undef
  const [result] = await db.query('INSERT INTO blog_posts (title, content) VALUES (?, ?)', [title, content])
  return result
}

export async function getOnePost(postId) {
  const [result] = await conn.query('SELECT * FROM blog_posts WHERE id = ?', [postId])
  return result
}
