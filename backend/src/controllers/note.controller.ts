import { Request, Response } from "express";
import * as notesService from "../services/note.service";
export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const notes = await notesService.getAllNotes();
    res.status(201).json(notes);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const createNote = async (req: Request, res: Response) => {
  try {
    const note = await notesService.createNote(req.body);
    res.status(201).json(note);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const getNoteById = async (req: Request, res: Response) => {
  try {
    const note = await notesService.getNoteById(req.params.id);
    if (note) {
      res.json(note);
    } else {
      res.status(404).send("Note not found");
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const updatedNote = await notesService.updateNote(req.params.id, req.body);
    if (updatedNote) {
      res.json(updatedNote);
    } else {
      res.status(404).send("Note not found");
    }
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const result = await notesService.deleteNote(req.params.id);
    if (result) {
      res.status(204).json(result);
    } else {
      res.status(404).send("Note not found");
    }
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
