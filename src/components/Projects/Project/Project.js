import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";

function Project(props) {
  return (
    <div>
      <Grid item xs={4}>
        <Card
          shadow={5}
          style={{
            width: "300px"
          }}
        >
          <CardActionArea>
            <CardMedia
              square
              image={props.imageUrl}
              title={props.imageTitle}
              style={{
                height: "0px",
                paddingTop: "56.25%"
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.title}
              </Typography>
              <Typography variant="body2" component="p">
                {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button size="small" color="primary">
              <a
                href={props.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                Github
              </a>
            </Button>
            <Button size="small" color="primary">
              <a
                href={props.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                Live Demo
              </a>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </div>
  );
}

export default Project;
