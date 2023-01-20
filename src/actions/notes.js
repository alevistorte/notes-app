import Swal from "sweetalert2";

import {
  addDoc,
  collection,
  db,
  doc,
  updateDoc,
  deleteDoc,
} from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { uploadFile } from "../helpers/uploadFile";
import { types } from "../types/types";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      url: "",
    };

    const docRef = await addDoc(
      collection(db, `${uid}/journal/notes`),
      newNote
    );
    dispatch(activeNote(docRef.id, newNote));
    dispatch(addNewNote(docRef.id, newNote));
  };
};

export const addNewNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
});

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: [...notes],
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const noteRef = doc(db, `${uid}/journal/notes/${note.id}`);
    await updateDoc(noteRef, noteToFirestore);
    dispatch(refreshNote(note.id, noteToFirestore));
    Swal.fire("Saved", note.title, "success");
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdated,
  payload: {
    id,
    note: { id, ...note },
  },
});

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const activeNote = getState().notes.active;

    Swal.fire({
      title: "Uploading...",
      text: "Please wait",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    const fileUrl = await uploadFile(file);

    dispatch(startSaveNote({ ...activeNote, url: fileUrl }));

    Swal.close();
  };
};

export const startDeleting = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    await deleteDoc(doc(db, `${uid}/journal/notes/${id}`));
    dispatch(deleteNote(id));
  };
};

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

export const noteLogout = () => ({
  type: types.noteClean,
});
