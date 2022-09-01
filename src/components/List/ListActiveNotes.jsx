import CardNotes from "../Card/CardNotes"

const ListActiveNotes = ({ notes, onDeleteNote, onArchieveNote, query }) => {
  // const activeNotes = notes.length && notes.filter((note) => note.archived === false)

  let activeNotes = notes;
  if(query.length > 0) {
    console.log("Search masuk")
    activeNotes = query.filter((note) => note.archived === false);
  } else {
    if(notes.length > 0 && notes.filter((note) => note.archived === false)){
      console.log("tidak ada search")
      activeNotes = notes.filter((note) => note.archived === false);
    }
  }
  console.log("Notes")
  console.log(notes)
  console.log("activeNotes")
  console.log(activeNotes)

  const NotesActive = () => {
    if (!activeNotes.length) return <p class="notes-list__empty-message">Tidak ada catatan</p>
    return (
      <div className="notes-list">
        {activeNotes.length > 0 &&
          activeNotes.map((note) => (
            <CardNotes
              {...note}
              key={note.id}
              onDelete={onDeleteNote}
              onArchieve={onArchieveNote}
            />
          ))}
      </div>
    )
  }

  return (
    <>
      <h2>Catatan Aktif</h2>
      <NotesActive />
    </>
  )
}

export default ListActiveNotes
