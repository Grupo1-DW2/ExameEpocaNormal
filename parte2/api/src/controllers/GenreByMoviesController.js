var sql = require("../utils/db");

const retrieveGenreOnMovies = (req, res) => {
  sql.query("SELECT * FROM movie_genre WHERE movie_id = ?", [req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

module.exports = {retrieveGenreOnMovies};