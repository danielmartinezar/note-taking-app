import * as tagRepository from "../repositories/tag.repository";

export const createTag = async (title: string) => {
  return await tagRepository.createTag(title);
};

export const getTags = async () => {
  return await tagRepository.findAllTags();
};

export const getTagByTitle = async (title: string) => {
  return await tagRepository.findTagByTitle(title);
};
