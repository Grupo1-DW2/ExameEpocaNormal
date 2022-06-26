const CreateGenre = ({
    handleCreateGenre, createGenreMan, setCreateGenreMan, createFounded, setCreateFounded, createDescriptionMan, setCreateDescriptionMan
}) => {
  return (
    <main>
      <h2>Create Genre</h2>
      <form class="form-group" onSubmit={handleCreateGenre}>
        <label class="form-label">Genre:</label>
        <input class="form-control" type="text" required value={createGenreMan} onChange={(e) => setCreateGenreMan(e.target.value)}/>
      </form>
    </main>
  );
};

export default CreateGenre;
