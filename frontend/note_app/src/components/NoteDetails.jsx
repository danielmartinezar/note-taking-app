import React, { useState, useEffect } from "react";
import { updateNote } from "../services/NoteTakingService";
import { extractTags } from "../shared/utils/functions";

export default function NoteDetails({
  title,
  description,
  onClose,
  id,
  tags,
  fetchUpdatedNotes,
}) {
  const [titleUpdate, setTitleUpdate] = useState(title);
  const [descriptionUpdate, setDescriptionUpdate] = useState(description);
  const [currentTags, setCurrentTags] = useState(tags);

  useEffect(() => {
    const extractedTags = extractTags(descriptionUpdate);
    setCurrentTags(
      extractedTags.map((tag) => ({
        title:
          tag.title.substring(1) === "#" ? tag.title.substring(1) : tag.title,
      }))
    );
  }, [descriptionUpdate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentTags = extractTags(descriptionUpdate);
    if (
      (titleUpdate?.trim() && titleUpdate !== title) ||
      (descriptionUpdate?.trim() && descriptionUpdate !== description)
    ) {
      await updateNote(id, {
        title: titleUpdate || title,
        description: descriptionUpdate || description,
        tags: currentTags,
      });
      await fetchUpdatedNotes();
    }

    onClose();
  };

  return (
    <div className="fixed top-0 pt-28 right-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="mx-5 lg:mx-0 flex flex-col items-center p-2 my-4 h-fit self-center border rounded-lg shadow-lg w-full sm:w-96 md:w-[546px] lg:w-[546px] bg-white"
      >
        <div className="w-full flex flex-row items-center">
          <input
            type="text"
            value={titleUpdate}
            onChange={(e) => setTitleUpdate(e.target.value)}
            className="w-full h-10 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
          />
        </div>
        <textarea
          value={descriptionUpdate}
          onChange={(e) => setDescriptionUpdate(e.target.value)}
          className="mt-4 w-full px-4 py-2 h-36 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ease-in-out"
        />

        <div className="w-full mt-4">
          <h6 className="text-md font-semibold mb-2 text-gray-800">Tags:</h6>
          <div className="flex flex-wrap">
            {currentTags?.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 mt-2"
              >
                {tag.title}
              </span>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="self-end mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg transition duration-150 ease-in-out"
        >
          Cerrar
        </button>
      </form>
    </div>
  );
}
