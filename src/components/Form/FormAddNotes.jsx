import React, { useState } from "react"

// class FormAddNotes extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       limitChar: 50,
//       title: "",
//       body: "",
//     }
//     this.coba = this.coba.bind(this)
//     this.onInputTitle = this.onInputTitle.bind(this)
//     this.onInputBody = this.onInputBody.bind(this)
//   }

//   onInputTitle({ target: { value } }) {
//     const lengthChar = value.length
//     this.setState({ title: value })
//     if (value.length > 0) {
//       this.setState({ limitChar: 50 - lengthChar })
//     } else this.state({ limitChar: 50 })
//   }

//   onInputBody({ target: { value } }) {
//     this.setState({ body: value })
//   }

//   coba(e) {
//     e.preventDefault()
//     const data = getInitialData()
//     const newNotes = {
//       id: data.length + 1,
//       title: this.state.title,
//       body: this.state.body,
//       archived: false,
//       createdAt: new Date().toISOString(),
//     }
//     data.push(newNotes)
//     console.log(data)
//   }
// }

// export default FormAddNotes

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
