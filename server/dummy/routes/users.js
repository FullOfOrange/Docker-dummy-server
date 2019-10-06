var express = require('express');
var router = express.Router();

const mysql = require('mysql2/promise');
const uuid = require('uuid');

const pool = mysql.createPool({
  host: 'mariadb',
  port: 3306,
  user: 'root',
  password: 'test',
})

const setUser = async () => {
  await pool.query(`INSERT INTO users.userinfo
  (username,password)
  VALUES (?, ?);`,
  [uuid(),'password'])
}

const getUser = async () => {
  let [rows] = await pool.query(`SELECT * FROM users.userinfo`)
  return rows;
}

/* GET users listing. */
router.get('/', async (req, res, next) => {
  await setUser();
  res.send(await getUser());
});

module.exports = router;
