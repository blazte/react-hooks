import React from "react"
import Button from "@material-ui/core/Button"
// import { Link } from "react-router-dom"

const ButtonCard = ({ color, name, id }) => {
  return (
    <Button variant="contained" color={color} href={`/note/${id}`}>
      {name}
    </Button>
  )
}

export default ButtonCard
