import React, { useState, useEffect } from "react";
import NoteCard from "./NoteCard";
import { deleteNote } from "../services/NoteTakingService";
import NoteDetails from "./NoteDetails";

export default function BoardPage({ notes, fetchNotes }) {
  const [notesData, setNotesData] = useState(null);
  const [isArchivedTab, setIsArchivedTab] = useState(false);

  useEffect(() => {
    setNotesData(
      notes?.filter((note) =>
        isArchivedTab ? note.isArchived : !note.isArchived
      )
    );
  }, [isArchivedTab, notes]);

  const [selectedNote, setSelectedNote] = useState(null);

  const deleteCard = async (id) => {
    await deleteNote(id);
    await fetchNotes();
  };
  const onSelectedCard = (note) => {
    setSelectedNote(note);
  };
  const onCloseSelectedCard = () => {
    setSelectedNote(null);
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          className={`px-4 py-2 ${
            !isArchivedTab ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setIsArchivedTab(false)}
        >
          Notas
        </button>
        <button
          className={`px-4 py-2 ${
            isArchivedTab ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => setIsArchivedTab(true)}
        >
          Archivadas
        </button>
      </div>
      <div className="mt-5 mb-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-5 sm:px-10 md:px-20 lg:px-28 xl:px-72 lg:gap-4 lg:gap-y-8 gap-x-72 gap-4">
        {notesData?.length > 0 ? (
          notesData?.map((note) => (
            <NoteCard
              key={note.id}
              title={note.title}
              description={note.description}
              tags={note.tags}
              id={note.id}
              onSelectedCard={() => onSelectedCard(note)}
              onDeleteCard={deleteCard}
              isArchived={note.isArchived}
              fetchNotes={fetchNotes}
            />
          ))
        ) : (
          <h2 className="text-2xl">Sin notas</h2>
        )}
        {selectedNote && (
          <NoteDetails
            id={selectedNote?.id}
            title={selectedNote?.title}
            description={selectedNote?.description}
            tags={selectedNote.tags}
            key={selectedNote?.id}
            fetchUpdatedNotes={fetchNotes}
            onClose={onCloseSelectedCard}
          />
        )}
      </div>
    </div>
  );
}
