// tag.controller.ts
import { Request, Response } from "express";
import * as tagService from "../services/tag.service";

export const createTag = async (req: Request, res: Response) => {
  const { title } = req.body;
  const tag = await tagService.createTag(title);
  res.status(201).json(tag);
};

export const getAllTags = async (req: Request, res: Response) => {
  const tags = await tagService.getTags();
  res.json(tags);
};

export const getTagByTitle = async (req: Request, res: Response) => {
  const { title } = req.params;
  const tag = await tagService.getTagByTitle(title);
  if (!tag) {
    return res.status(404).json({ message: "Tag not found" });
  }
  res.json(tag);
};
