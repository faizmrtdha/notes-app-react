import React from "react"

const Navbar = () => {
  const onSearchNotes = ({ target: { value } }) => {
    console.log(value)
  }

  return (
    <header className="note-app__header">
      <h1>NOTES</h1>
      <div className="note-search">
        <input type="text" placeholder="Cari Catatan" onChange={onSearchNotes} />
      </div>
    </header>
  )
}

export default Navbar
