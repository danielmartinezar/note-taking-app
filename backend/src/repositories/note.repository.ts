import { PrismaClient, Note } from "@prisma/client";
import { NoteData } from "../services/types/note.types";

const prisma = new PrismaClient();

export const findAll = async () => {
  return await prisma.note.findMany({
    include: {
      tags: true,
    },
    orderBy: {
      createdAt: "desc", // Asume que el campo se llama 'createdAt'
    },
  });
};

export const findById = async (id: string) => {
  return await prisma.note.findUnique({
    where: { id },
    include: {
      tags: true,
    },
  });
};

export const create = async (body: NoteData): Promise<Note> => {
  const { title, description, tags } = body;
  return await prisma.note.create({
    data: {
      title,
      description,
      tags: {
        connectOrCreate: tags?.map((tag) => ({
          where: { title: tag.title },
          create: { title: tag.title },
        })),
      },
    },
    include: {
      tags: true,
    },
  });
};

export const update = async (id: string, body: Partial<NoteData>) => {
  const { title, description, tags, isArchived } = body;
  console.log(body);

  return await prisma.note.update({
    where: { id },
    data: {
      ...(title && { title }),
      ...(description && { description }),
      isArchived,
      ...(tags && {
        tags: {
          set: [],
          connectOrCreate: tags.map((tag) => ({
            where: { title: tag.title },
            create: { title: tag.title },
          })),
        },
      }),
    },
    include: {
      tags: true,
    },
  });
};

export const remove = async (id: string) => {
  return await prisma.note.delete({
    where: { id },
  });
};
