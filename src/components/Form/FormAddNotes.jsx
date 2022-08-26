import { useState } from "react"

const FormAddNotes = () => {
  const [limitCharacter, setLimitCharacter] = useState(50)

  const onInputTitle = ({ target: { value } }) => {
    const lengthChar = value.length
    console.log(lengthChar)
    if (value.length > 0) {
      setLimitCharacter(50 - lengthChar)
    } else setLimitCharacter(50)
  }

  return (
    <div className="note-input">
      <h2>Buat catatan</h2>
      <form action="">
        <p className="note-input__title__char-limit">Sisa karakter: {limitCharacter}</p>
        <input
          className="note-input__title"
          type="text"
          maxLength={50}
          placeholder="Ini adalah judul ..."
          onChange={onInputTitle}
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
        />
        <button>Buat</button>
      </form>
    </div>
  )
}

export default FormAddNotes
