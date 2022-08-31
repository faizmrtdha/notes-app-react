import React from "react"

const Navbar = ({ onSearchNotes }) => {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari catatan..." onChange={onSearchNotes} />
      </div>
    </header>
  )
}

export default Navbar
