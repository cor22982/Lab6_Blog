import mysql from 'mysql2/promise'

const pool = mysql.createPool({
  host: 'localhost',
  user: 'mysql',
  database: 'Guatepedia',
  password: '36L8W7Nm',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export default pool
