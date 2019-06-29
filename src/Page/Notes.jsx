import React, { Component } from "react"
import NotesGrid from "../Organisms/NotesGrid"
class Notes extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    fetch("http://my-json-server.typicode.com/blazte/json-db/notas")
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          notes: resp
        })
      })
  }

  render() {
    const { notes } = this.state

    return <NotesGrid notes={notes} />
  }
}

export default Notes
