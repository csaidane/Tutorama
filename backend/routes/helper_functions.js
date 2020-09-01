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
    name, email, password, street, city, province, post_code
  ) VALUES ($1, $2, $3 , $4, $5, $6, $7)
  RETURNING *
  `, [user.name, user.email, user.password, user.street, user.city, user.province, user.post_code])
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


const getUserWithId = function(id) {
  return pool.query(`
  SELECT * FROM users
  WHERE id = $1;
  `, [id])
  .then(res => res.rows);
}
exports.getUserWithId = getUserWithId;



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


const addTutor =  function(user) {
  return addUser(user)
  .then( (back_user) => {
    return pool.query(`
    INSERT INTO tutors (id, education, bio, rate_per_hour)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [back_user.id , user.education, user.bio, user.rate_per_hour])
  })
  .then(res => res.rows[0]);

}
exports.addTutor = addTutor;



const getTutorWithEmail = function(email) {
  return getUserWithEmail(email)
  .then((user)=> {
    return pool.query(`
    SELECT * FROM tutors
    WHERE id = $1;
    `, [user.id])
  })
  .then(res => res.rows);
}
exports.getTutorWithEmail = getTutorWithEmail;


const getTutorWithId = function(id) {
  return pool.query(`
  SELECT * FROM tutors
  WHERE id = $1;
  `, [id])
  .then(res => res.rows);
}
exports.getTutorWithId = getTutorWithId;

const searchTutors = function(keyword) {
  return pool.query(`
  SELECT tutor_id, u.name, t.education, s.name FROM subjects as s
  JOIN tutors as t on t.id = s.tutor_id
  JOIN users as u on u.id = t.id
  WHERE s.name LIKE '%$1%';
  `, [keyword])
}
exports.searchTutors = searchTutors;

const addTutorSubject =  function(object) {
  return pool.query(`
  INSERT INTO subjects (tutor_id, name)
  VALUES ($1, $2)
  RETURNING *
  `, [object.id, object.subject])
  .then(res => res.rows[0]);
}
exports.addTutorSubject = addTutorSubject;

