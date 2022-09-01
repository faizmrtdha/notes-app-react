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
      query: [],
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
    // const filterNote = this.state.notes.filter((note) => note.id === id)
    // filterNote.map((element) => (element.archived = !element.archived))
    // const notes = [...this.state.notes, filterNote]
    // this.setState({ notes })


    this.state.notes.filter((note) => note.id === id).map((element) => (element.archived = !element.archived))
    this.setState({ notes: this.state.notes })
    console.log("Notes di Archive")
    console.log(this.state.notes)
  }

  unArchiveNoteHandler(id) {
    // const filterNote = this.state.notes.filter((note) => note.id === id)
    // filterNote.forEach((element) => (element.archived = !element.archived))
    // const notes = [...this.state.notes, ...filterNote]
    // this.setState({ notes })


    this.state.notes.filter((note) => note.id === id).forEach((element) => (element.archived = !element.archived))
    this.setState({ notes: this.state.notes })
  }

  searchNoteHandler({ target: { value } }) {
    console.log("search length")
    console.log(value.length)
    if (value) {
      // console.log("Search : ")
      // console.log(value);
      // console.log("Notes State : ")
      // console.log(this.state.notes);
      // const notes = this.state.notes.filter((note) => note.title.includes(value))
      // this.setState({ notes })
      
      const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(value.toLowerCase()))
      this.setState({query: notes});
      console.log("Query State")
      console.log(this.state.query)
    } 
    else {
      // console.log("value : ",value)
      // this.setState({ notes: this.state.notes })

      this.setState({query: []});
    }
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
            query={this.state.query}
          />
          <ListArchieveNotes 
          notes={this.state.notes} 
          onDeleteNote={this.deleteNoteHandler} 
          onMoveNote={this.unArchiveNoteHandler} 
          query={this.state.query}/>
        </div>
      </>
    )
  }
}

export default Container
