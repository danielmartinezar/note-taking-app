import notesAPI from "./axios";

const getAllNotes = async () => {
  return await notesAPI.get("/notes");
};
const updateNote = async (id, body) => {
  await notesAPI.put(`/notes/${id}`, body);
};
const createNote = async (body) => {
  await notesAPI.post("/notes", body);
};
const deleteNote = async (id) => {
  await notesAPI.delete(`/notes/${id}`);
};

export { getAllNotes, updateNote, createNote, deleteNote };
