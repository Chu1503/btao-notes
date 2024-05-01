import React from 'react';

function Note({ note, onDelete }) {
  return (
    <div className="bg-white p-4 my-2 shadow-md rounded">
      <p>{note.content}</p>
      <button onClick={onDelete} className="text-red-500">Delete</button>
    </div>
  );
}

export default Note;