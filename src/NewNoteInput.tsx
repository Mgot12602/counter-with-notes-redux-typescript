import React, { ChangeEvent, ChangeEventHandler } from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");
  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };
  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };

  return (
    <div>
      <input onChange={updateNote} type="text" name="note" placeholder="Note" />
      <button onClick={onAddNoteClick}>Add note</button>
      <hr />
    </div>
  );
};
