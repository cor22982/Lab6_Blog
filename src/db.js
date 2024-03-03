// eslint-disable-next-line import/extensions
import conn from './conn.js'

export async function getAllPosts() {
  const [rows] = await conn.query('SELECT * FROM Guatepedia')
  return rows
}

// eslint-disable-next-line camelcase, max-len
export async function createPost(Pearson, Few_Description, History, Crucial_Events, Curiosities, AlternativeText, AlternativeDescription, Text_References, images) {
  // eslint-disable-next-line no-undef, camelcase
  const [result] = await db.query('INSERT INTO Guatepedia (Pearson, Few_Description, History, Crucial_Events, Curiosities, AlternativeText, AlternativeDescription, Text_References, images VALUES (?, ?)', [Pearson, Few_Description, History, Crucial_Events, Curiosities, AlternativeText, AlternativeDescription, Text_References, images])
  return result
}

export async function getOnePost(postId) {
  const [result] = await conn.query('SELECT * FROM Guatepedia WHERE id = ?', [postId])
  return result
}
