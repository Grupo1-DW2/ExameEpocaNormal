import React from 'react';

const CreateGenre = ({
    handleCreateGenre, createNameGenre, setCreateGenre
}) => {
  return (
    <main>
      <h2>Create Genre</h2>
      <form class="form-group" onSubmit={handleCreateGenre}>
        <label class="form-label">Genre:</label>
        <input class="form-control" type="text" required value={createNameGenre} onChange={(e) => setCreateGenre(e.target.value)}/>
      </form>
    </main>
  );
};

export default CreateGenre;
