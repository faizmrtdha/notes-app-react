import FormAddNotes from "../Form/FormAddNotes"
import ListActiveNotes from "../List/ListActiveNotes"

const Container = () => {
  return (
    <div className="note-app__body">
      <FormAddNotes />
      <ListActiveNotes />
    </div>
  )
}

export default Container
