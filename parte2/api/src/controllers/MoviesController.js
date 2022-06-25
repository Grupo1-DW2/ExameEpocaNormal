var sql = require("../utils/db");

const countMovies = (req, res) => {
    sql.query("SELECT COUNT(id) FROM movie", function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

const retrieveMovies = (req, res) => {
  sql.query("SELECT * FROM movie", function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

const createMovie = (req, res) => {
  sql.query(
    "INSERT INTO movie (language, original_title, release_date, runtime, actor_id, director_id) VALUES (?,?,?,?,?,?)",
    [
      req.body.language,
      req.body.original_title,
      req.body.release_date,
      req.body.runtime, 
      req.body.actor_id, 
      req.body.director_id
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

const retrieveMovie = (req, res) => {
    sql.query(
    "SELECT * FROM movie WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send(result);
    }
  );
};

const deleteMovie = (req, res) => {
    sql.query(
    "DELETE FROM movie WHERE id = ?",
    [req.params.id],
    function (err, result) {
      if (err) throw err;
      res.send("Movie " + req.params.id + " successfully deleted");
    }
  );
};

const updateMovie = (req, res) => {
  sql.query(
    "UPDATE movie SET language = ?,  original_title = ?, release_date = ?, runtime=?, actor_id=?, director_id=? WHERE id = ?",
    [
      req.body.language,
      req.body.original_title,
      req.body.release_date,
      req.body.runtime,
      req.params.id, 
      req.body.actor_id, 
      rec.body.director_id
    ],
    function (err, result) {
      if (err) throw err;
      res.send(req.body);
    }
  );
};

module.exports = {countMovies, retrieveMovies, retrieveMovie, deleteMovie, updateMovie, createMovie};