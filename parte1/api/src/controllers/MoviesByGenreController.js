var sql = require("../utils/db");

const retrieveMoviesOnGenre = (req, res) => {
  sql.query("SELECT * FROM movie_genre WHERE genre_id = ?", [req.params.id], function (err, result) {
    if (err) throw err;
    res.send(result);
  });
};

module.exports = {retrieveMoviesOnGenre};