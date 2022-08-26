import { getInitialData } from "../../utils"
import CardNotes from "../Card/CardNotes"

const ListActiveNotes = () => {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <div className="notes-list">
        {getInitialData().map((data) => (
          <CardNotes {...data} />
        ))}
      </div>
    </>
  )
}

export default ListActiveNotes
