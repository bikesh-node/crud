import mysql from 'mysql2';
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'my-database',
  password: 'asdf123',
});
export default pool.promise();
