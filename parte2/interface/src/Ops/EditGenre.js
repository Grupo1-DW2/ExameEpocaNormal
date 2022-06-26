import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const EditGenre = ({
    genres, handleEditGenre, editGenre, setEditGenre
}) => {
    const { id } = useParams();
    const genre = genres.find(genre => (genre.id).toString() === id);

    useEffect(() => {
        if (genre) {
            setEditGenre(genre.genre);
        }
    }, [genre, setEditGenre])

    return (
        <div>
            {genre && <>
                <h2>Edit Genre #{id}</h2>
                <form class="form-group" onSubmit={(e) => e.preventDefault()}>
                    <label class="form-label">Genre:</label>
                    <input class="form-control" type="text" required value={editGenre} onChange={(e) => setEditGenre(e.target.value)} />
                    <br/>
                    <button class="btn btn-primary" type="submit" onClick={() => handleEditGenre(id)}>Submit</button>
                </form>
            </>}
            {!genre && <>
                <p>Missing Genre #{id}</p>
                <p>Check other <Link to='/Genres'>Genres</Link>!</p>
            </>}
        </div>
    )
}

export default EditGenre;