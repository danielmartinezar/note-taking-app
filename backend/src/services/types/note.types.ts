import { TagData } from "./tag.types";
export type NoteData = {
  title: string;
  description: string;
  tags: TagData[] | null;
  isArchived: boolean;
};
