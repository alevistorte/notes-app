import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />

        <textarea
          className="notes__textarea"
          placeholder="What happened today"
        ></textarea>

        <div className="notes__image">
          <img
            src="https://cdn.pixabay.com/photo/2015/11/12/17/20/tea-1040653__340.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};
