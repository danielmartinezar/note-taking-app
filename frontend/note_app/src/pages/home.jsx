import React, { useEffect, useState } from "react";
import Bar from "../components/Bar";
import Board from "../components/Board";
import ExpandableInputBar from "../components/ExpandableInputBar";
import { getAllNotes } from "../services/NoteTakingService";

export default function Home() {
  const [notesData, setNotesData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const fetchNotes = async () => {
    const fetchedNotes = (await getAllNotes()).data;
    setNotesData(fetchedNotes);
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    const filterNotes = async () => {
      if (!searchTerm) {
        fetchNotes();
      } else {
        const filteredNotes = notesData.filter((note) =>
          note.tags.some((tag) =>
            tag.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        setNotesData(filteredNotes);
      }
    };
    filterNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div>
      <Bar onSearch={setSearchTerm} />
      <div className="container flex w-full mt-20 lg:mt-14 justify-center">
        <ExpandableInputBar fetchNotes={fetchNotes} />
      </div>
      <Board notes={notesData} fetchNotes={fetchNotes} />
    </div>
  );
}
