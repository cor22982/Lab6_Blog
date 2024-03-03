// eslint-disable-next-line import/extensions
import conn from './conn.js'

export async function getAllPosts() {
  const [rows] = await conn.query('SELECT * FROM Guatepedia')
  return rows
}

export async function createPost(
  Pearson,
  Fewdescription,
  History,
  Crucialevents,
  Curiosities,
  AlternativeText,
  AlternativeDescription,
  Textreferences,
  images,
) {
  const [result] = await conn.query(
    'INSERT INTO Guatepedia (Pearson, Few_Description, History, Crucial_Events, Curiosities, AlternativeText, AlternativeDescription, Text_References, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      Pearson,
      Fewdescription,
      History,
      Crucialevents,
      Curiosities,
      AlternativeText,
      AlternativeDescription,
      Textreferences,
      images],
  )
  return result
}

export async function getOnePost(postId) {
  const [result] = await conn.query('SELECT * FROM Guatepedia WHERE id = ?', [postId])
  return result
}

export async function editOnePost(postId, columna, valor) {
  const [result] = await conn.query('UPDATE Guatepedia SET ? = ? WHERE id = ?', [columna, valor, postId])
  return result
}

export async function deletePost(postId) {
  const postIdnumb = Number(postId)
  const [result] = await conn.query('DELETE FROM Guatepedia WHERE id = ?', [postIdnumb])
  return result
}
