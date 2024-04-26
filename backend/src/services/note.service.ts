import * as NotesRepository from "../repositories/note.repository";
import { NoteData } from "./types/note.types";

export const getAllNotes = async () => {
  return await NotesRepository.findAll();
};

export const getNoteById = async (id: string) => {
  return await NotesRepository.findById(id);
};

export const createNote = async (body: NoteData) => {
  return await NotesRepository.create(body);
};

export const updateNote = async (id: string, body: Partial<NoteData>) => {
  return await NotesRepository.update(id, body);
};

export const deleteNote = async (id: string) => {
  return await NotesRepository.remove(id);
};
