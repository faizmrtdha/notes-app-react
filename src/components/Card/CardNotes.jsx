import React from "react"
import { showFormattedDate } from "../../utils"

const CardNotes = ({ id, title, body, createdAt, onDelete, onArchieve, onMove }) => {
  const conditionalBtn = onArchieve ? (
    <button className="note-item__archive-button" onClick={() => onArchieve(id)}>
      Arsipkan
    </button>
  ) : (
    <button className="note-item__archive-button" onClick={() => onMove(id)}>
      Pindahkan
    </button>
  )
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button" onClick={() => onDelete(id)}>
          Delete
        </button>
        {conditionalBtn}
      </div>
    </div>
  )
}

export default CardNotes
