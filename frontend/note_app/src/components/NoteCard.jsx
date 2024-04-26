import React from "react";
import { updateNote } from "../services/NoteTakingService";

export default function NoteCard({
  title,
  description,
  tags,
  id,
  onDeleteCard,
  onSelectedCard,
  isArchived,
  fetchNotes, 
}) {
  const deleteIcon = `${process.env.PUBLIC_URL}/assets/deleteIcon.svg`;
  const archiveIcon = `${process.env.PUBLIC_URL}/assets/archivedIcon.svg`;
  const unArchivedIcon = `${process.env.PUBLIC_URL}/assets/unArchivedIcon.svg`; 
  const handleDeleteClick = (e) => {
    e.stopPropagation(); 
    onDeleteCard(id);
  };

  const handleArchiveClick = async (e) => {
    console.log(isArchived);
    e.stopPropagation(); 
    await updateNote(id, { isArchived: !isArchived });
    await fetchNotes(); 
  };

  return (
    <div
      className="mx-auto h-fit bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-96 md:w-80 lg:w-72 cursor-pointer"
      onClick={onSelectedCard}
    >
      <div className="p-5">
        <h2 className="text-lg text-gray-900 font-bold">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
      <div className="p-5 pt-0 flex flex-row w-full justify-between items-center">
        <div className="flex flex-wrap">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 mt-2"
            >
              {tag.title}
            </span>
          ))}
        </div>
        <div className="flex items-center">
          <button onClick={handleArchiveClick} className="mr-2">
            <img
              src={isArchived ? unArchivedIcon : archiveIcon}
              alt="Archive icon"
              className="w-7 h-7"
            />
          </button>
          <button onClick={handleDeleteClick}>
            <img src={deleteIcon} alt="Delete icon" className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  );
}
