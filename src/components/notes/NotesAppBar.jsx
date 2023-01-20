import React from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import { startSaveNote, startUploading } from "../../actions/notes";

export const NotesAppBar = () => {
  const note = useSelector((state) => state.notes.active);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  const handleAddPicture = () => {
    document.querySelector("#fileSelector").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="notes__app-bar">
      <span>{moment(note.date).format("lll")}</span>

      <input
        id="fileSelector"
        type="file"
        name="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <div>
        <button className="btn" onClick={handleAddPicture}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};
