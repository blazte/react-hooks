import React, { useState, useEffect } from "react"

const Note = ({ match }) => {
  const [state, setState] = useState({})
  const [comment, setComment] = useState("Sine comentarios")

  useEffect(() => {
    let url = `http://my-json-server.typicode.com/blazte/json-db/notas/${
      match.params.id
    }`
    fetch(url)
      .then(resp => resp.json())
      .then(resp => {
        setState(resp)
      }, [])
  })

  const myComment = e => {
    setComment(e.target.value)
  }

  return (
    <div className="container">
      <h1>{state.name}</h1>
      <p>{state.description}</p>

      <input type="text" onChange={myComment.bind(this)} />
      <p>{comment}</p>
    </div>
  )
}

export default Note
