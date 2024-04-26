import React, { useState, useEffect, useRef } from "react";
import { createNote } from "../services/NoteTakingService";
import { extractTags } from "../shared/utils/functions";

export default function ExpandableInputBar({ fetchNotes }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);
  const containerRef = useRef(null);
  const descriptionRef = useRef(null);
  const editIcon = process.env.PUBLIC_URL + "/assets/editIcon.svg";

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTags(extractTags(description));
  }, [description]);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    await createNote({ title: title, description: description, tags: tags });
    await fetchNotes();
    setTitle("");
    setDescription("");
    setTags([]);
    setIsExpanded(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      ref={containerRef}
      className="mx-5 lg:mx-0 flex flex-col items-center p-2 my-4 h-fit self-center border rounded-lg shadow-lg w-full sm:w-96 md:w-[546px] lg:w-[546px]"
    >
      <div className="w-full flex flex-row items-center">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onClick={() => setIsExpanded(true)}
          placeholder="Título para la nueva nota..."
          className="w-full h-7 focus:outline-0 transition-all duration-300 ease-in-out"
        />
        <img src={editIcon} alt="Ícono" className="w-6 h-fit ml-2" />
      </div>
      {isExpanded && (
        <>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            ref={descriptionRef}
            placeholder="Añadir descripción y #tags"
            className="mt-4 w-full min-h-36 focus:outline-0 transition-all duration-300 ease-in-out"
          />
          <div className="w-full flex flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-100 text-blue-800 mt-2"
              >
                {tag.title}
              </span>
            ))}
          </div>
        </>
      )}
      {isExpanded && (
        <button
          type="submit"
          className="self-end mt-2 px-4 py-2 rounded-lg hover:bg-gray-50 focus:outline-none"
        >
          Añadir Nota
        </button>
      )}
    </form>
  );
}
