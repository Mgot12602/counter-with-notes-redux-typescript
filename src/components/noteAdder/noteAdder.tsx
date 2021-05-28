import React from "react";
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "../../reducers/notes.reducer";
import { addNote } from "../../actions/notes.actions";
import { RootState } from "../../store";

function NoteAdder() {
  const notes = useSelector<RootState, NotesState["notes"]>(
    (state) => state.noteAdder.notes
  );
  const dispatch = useDispatch();
  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };
  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default NoteAdder;
