import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

function Project(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={props.imageUrl}
        title={props.imageTitle}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {props.title}
        </Typography>
        <Typography>{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          href={props.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Button>
        <Button
          size="small"
          color="primary"
          href={props.liveDemo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}

export default Project;
