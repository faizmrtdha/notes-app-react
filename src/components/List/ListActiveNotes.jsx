import CardNotes from "../Card/CardNotes"

const ListActiveNotes = ({ notes, onDeleteNote, onArchieveNote, filteredNotes, onSearch }) => {
  let activeNotes = notes

  if (filteredNotes.length > 0) {
    activeNotes = filteredNotes
  } else if (!filteredNotes.length && onSearch) activeNotes = []
  else activeNotes = notes

  if (activeNotes && activeNotes.length > 0)
    activeNotes = activeNotes.filter((note) => note.archived === false)

  const NotesActive = () => {
    if (!activeNotes.length) return <p className="notes-list__empty-message">Tidak ada catatan</p>
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
