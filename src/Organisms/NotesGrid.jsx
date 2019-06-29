import React from "react"
import CardNote from "../Moleculs/CardNote"
import Grid from "@material-ui/core/Grid"
import withLoader from "../components/HOC/withLoader"

const NotesGrid = ({ notes }) => {
  return (
    <Grid container spacing={3}>
      {notes.map(n => (
        <CardNote
          key={n.id}
          id={n.id}
          name={n.name}
          description={n.description}
        />
      ))}
    </Grid>
  )
}

export default withLoader("notes", NotesGrid)
