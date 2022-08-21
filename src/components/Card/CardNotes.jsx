import React from "react"

const CardNotes = ({ title, body, createdAt }) => {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <div className="note-item__title">{title}</div>
      </div>
    </div>
  )
}

export default CardNotes
