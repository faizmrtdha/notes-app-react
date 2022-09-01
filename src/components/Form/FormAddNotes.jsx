import React, { useState } from "react"

const FormAddNotes = ({ notes, onAddNotes }) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [limitChar, setLimitChar] = useState(50)

  const onInputTitle = ({ target: { value } }) => {
    const lengthChar = value.length
    setTitle(value)
    if (value.length > 0) {
      setLimitChar(50 - lengthChar)
    } else setLimitChar(50)
  }

  const onInputBody = ({ target: { value } }) => setBody(value)

  const coba = (e) => {
    e.preventDefault()
    const newNotes = {
      id: notes.length + 1,
      title: title,
      body: body,
      archived: false,
      createdAt: new Date().toISOString(),
    }
    onAddNotes(newNotes)
    setBody("")
    setTitle("")
  }
  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form onSubmit={coba}>
        <p className="note-input__title__char-limit">Sisa karakter: {limitChar}</p>
        <input
          className="note-input__title"
          type="text"
          maxLength={50}
          value={title}
          placeholder="Ini adalah judul ..."
          onChange={onInputTitle}
          required
        />
        <textarea
          className="note-input__body"
          type="text"
          value={body}
          onChange={onInputBody}
          placeholder="Tuliskan catatanmu di sini ..."
          required
        />
        <button type="submit">Buat</button>
      </form>
    </div>
  )
}

export default FormAddNotes
