import { Router } from "express";
import * as notesController from "../controllers/note.controller";

const noteRouter: Router = Router();
noteRouter.get("/", notesController.getAllNotes);
noteRouter.post("/", notesController.createNote);
noteRouter.get("/:id", notesController.getNoteById);
noteRouter.put("/:id", notesController.updateNote);
noteRouter.delete("/:id", notesController.deleteNote);

export default noteRouter;
