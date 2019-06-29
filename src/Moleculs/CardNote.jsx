import React from "react"
import ButtonCard from "../Atoms/ButtonCard"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import CardActionArea from "@material-ui/core/CardActionArea"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

const CardNote = ({ id, name, description }) => {
  const classes = useStyles()
  return (
    <Grid item xs={6} sm={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent>
            <Typography component="h2" variant="h5">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ButtonCard color="secondary" name="Editar" id={id} />
          <ButtonCard color="primary" name="Eliminar" />
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CardNote
