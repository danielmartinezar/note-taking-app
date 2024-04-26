import { Router } from "express";
import * as tagController from "../controllers/tag.controller";

const router = Router();

router.get("/tags", tagController.getAllTags);
router.get("/tags/title/:title", tagController.getTagByTitle);
router.post("/tags", tagController.createTag);

export default router;
