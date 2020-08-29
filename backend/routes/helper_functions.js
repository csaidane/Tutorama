const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'final'
});


const addUser =  function(user) {
  return pool.query(`
  INSERT INTO users (
    name, email, password, street, city, province, post_code, profile_picture_url
  ) VALUES ($1, $2, $3 , $4, $5, $6, $7, $8, $9)
  RETURNING *
  `, [user.name, user.email, user.password, user.street, user.city, user.province, user.post_code, user.profile_picture_url])
  .then(res => res.rows[0]);
}
exports.addUser = addUser;


const getUserWithEmail = function(email) {
  return pool.query(`
  SELECT * FROM users
  WHERE email = $1;
  `, [email])
  .then(res => res.rows);
}
exports.getUserWithEmail = getUserWithEmail;

const login =  function(email, password) {
  return getUserWithEmail(email)
  .then(user => {
    if (password) {
      return user;
    }
    return null;
  });
}
exports.login = login;
