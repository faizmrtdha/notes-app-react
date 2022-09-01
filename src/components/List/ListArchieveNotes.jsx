import React from "react"
import CardNotes from "../Card/CardNotes"

const ListArchieveNotes = ({ notes, onDeleteNote, onMoveNote, query }) => {
  // const archiveNotes = notes.length && notes.filter((note) => note.archived === true)
  // console.log("Archive Notes: ")
  // console.log(archiveNotes);

  let archiveNotes = [];
  if(query.length > 0) {
    archiveNotes = query.filter((note) => note.archived === true);
  } else {
    if(notes.length > 0 && notes.filter((note) => note.archived === true)){
      archiveNotes = notes.filter((note) => note.archived === true);
    }
  }
 

  const NotesArchived = () => {
    if (!archiveNotes.length) return <p class="notes-list__empty-message">Tidak ada catatan</p>
    return (
      <div className="notes-list">
        {archiveNotes.length > 0 &&
          archiveNotes.map((note) => (
            <CardNotes {...note} key={note.id} onDelete={onDeleteNote} onMove={onMoveNote} />
          ))}
      </div>
    )
  }

  return (
    <>
      <h2>Arsip</h2>
      <NotesArchived />
    </>
  )
}

export default ListArchieveNotes
