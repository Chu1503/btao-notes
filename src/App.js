import React, { useState, useEffect } from 'react';
import { db } from './firebase-config';
import Note from './Note';
import { ref, onValue, push, remove, set } from 'firebase/database';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    const notesRef = ref(db, 'notes/');
    const unsubscribe = onValue(notesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedNotes = data ? Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      })) : [];
      setNotes(loadedNotes);
    });
    return () => unsubscribe();
  }, []);

  const addNote = () => {
    if (newNote.trim() !== "") {
      const newNoteRef = push(ref(db, 'notes'));
      set(newNoteRef, { content: newNote.trim() });
      setNewNote("");
    }
  };

  const deleteNote = (id) => {
    const noteRef = ref(db, `notes/${id}`);
    remove(noteRef);
  };

  return (
    <div className="min-h-screen bg-off-white flex justify-center items-center p-10">
      <div className="w-full max-w-3xl">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="p-2 border-2 border-gray-300 w-full mb-4"
          placeholder="help me..."
        />
        <button onClick={addNote} className="p-2 bg-white border-2 border-gray-300 text-xl">+</button>
        <div>
          {notes.map(note => (
            <Note key={note.id} note={note} onDelete={() => deleteNote(note.id)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;