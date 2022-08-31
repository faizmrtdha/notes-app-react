import { getInitialData } from "../../utils"
import FormAddNotes from "../Form/FormAddNotes"
import ListActiveNotes from "../List/ListActiveNotes"

import React, { Component } from "react"
import ListArchieveNotes from "../List/ListArchieveNotes"
import Navbar from "./Navbar"

class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData(),
    }

    this.addNotesHandler = this.addNotesHandler.bind(this)
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this)
    this.archieveNoteHandler = this.archieveNoteHandler.bind(this)
    this.searchNoteHandler = this.searchNoteHandler.bind(this)
    this.unArchiveNoteHandler = this.unArchiveNoteHandler.bind(this)
  }

  addNotesHandler(values) {
    const notes = [...this.state.notes, values]
    this.setState({ notes })
  }

  deleteNoteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id)
    this.setState({ notes })
  }

  archieveNoteHandler(id) {
    const filterNote = this.state.notes.filter((note) => note.id === id)
    filterNote.forEach((element) => (element.archived = !element.archived))
    const notes = [...this.state.notes, filterNote]
    this.setState({ notes })
  }

  unArchiveNoteHandler(id) {
    const filterNote = this.state.notes.filter((note) => note.id === id)
    filterNote.forEach((element) => (element.archived = !element.archived))
    const notes = [...this.state.notes, filterNote]
    this.setState({ notes })
  }

  searchNoteHandler({ target: { value } }) {
    if (value) {
      const notes = this.state.notes.filter((note) => note.title.includes(value))
      console.log(notes)
      this.setState({ notes })
    } else this.setState({ notes: this.state.notes })
  }

  render() {
    return (
      <>
        <Navbar onSearchNotes={this.searchNoteHandler} />
        <div className="note-app__body">
          <FormAddNotes notes={this.state.notes} onAddNotes={this.addNotesHandler} />
          <ListActiveNotes
            notes={this.state.notes}
            onDeleteNote={this.deleteNoteHandler}
            onArchieveNote={this.archieveNoteHandler}
          />
          <ListArchieveNotes notes={this.state.notes} onDeleteNote={this.deleteNoteHandler} />
        </div>
      </>
    )
  }
}

export default Container
