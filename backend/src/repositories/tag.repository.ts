import { PrismaClient, Tag } from "@prisma/client";
import { TagData } from "../services/types/tag.types";

const prisma = new PrismaClient();

export const createTag = async (title: string) => {
  return await prisma.tag.create({
    data: { title },
  });
};

export const findAllTags = async () => {
  return await prisma.tag.findMany();
};

export const findTagByTitle = async (title: string) => {
  return await prisma.tag.findUnique({
    where: { title },
  });
};
