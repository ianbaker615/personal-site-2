import React from "react";
import { Grid, Container } from "@material-ui/core";
import Project from "./Project/Project";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

function Projects() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {/* YelpCamp */}
        <Grid item key={1} xs={12} sm={6} md={4}>
          <Project
            imageUrl="https://i.imgur.com/0KG0iyz.png"
            imageTitle="YelpCamp landing page"
            title="YelpCamp"
            description="Website with multiple pages, user authentication, and CRUD capabilities"
            github="https://github.com/ianbaker615/YelpCamp"
            liveDemo="https://tranquil-harbor-51785.herokuapp.com/"
          />
        </Grid>

        {/* Patatap Clone */}
        <Grid item key={1} xs={12} sm={6} md={4}>
          <Project
            imageUrl="https://i.imgur.com/p8lPXhe.png"
            imageTitle="Patatap visuals"
            title="Patatap Clone"
            description="Use the keyboard to play distinct samples and watch the screen make fun colors!"
            github="https://github.com/ianbaker615/Patatap-Clone"
            liveDemo="https://ianbaker615.github.io/Patatap-Clone/"
          />
        </Grid>

        <Grid item key={1} xs={12} sm={6} md={4}>
          {/* Meteorite Tracker */}
          <Project
            imageUrl="https://i.imgur.com/96vBrTJ.png"
            imageTitle="List of meteorites"
            title="Meteorite Tracker"
            description="Searchable and Sortable Meteorite Tracker using NASA API"
            github="https://github.com/ianbaker615/meteorite_tracker"
            liveDemo="https://ianbaker615.github.io/meteorite_tracker/"
          />
        </Grid>

        <Grid item key={1} xs={12} sm={6} md={4}>
          {/* RGB Guess Game */}
          <Project
            imageUrl="https://i.imgur.com/3HW2w8u.png"
            imageTitle="Game Homscreen"
            title="RGB Guess Game"
            description="Try to guess the color based on the rgb value displayed at the top of the page!"
            github="https://github.com/ianbaker615/RGB-Guess-Game"
            liveDemo="https://ianbaker615.github.io/RGB-Guess-Game/"
          />
        </Grid>

        <Grid item key={1} xs={12} sm={6} md={4}>
          {/* Etch-A-Sketch */}
          <Project
            imageUrl="https://i.imgur.com/LMo3wpd.png"
            imageTitle="Etch A Sketch Homescreen"
            title="Etch-A-Sketch"
            description="Etch-a-Sketch project for The Odin Project"
            github="https://github.com/ianbaker615/etch-a-sketch"
            liveDemo="https://ianbaker615.github.io/etch-a-sketch/"
          />
        </Grid>

        <Grid item key={1} xs={12} sm={6} md={4}>
          {/* Lights Out */}
          <Project
            imageUrl="https://i.imgur.com/uJNfUXv.png"
            imageTitle="Lights Out"
            title="Lights Out"
            description="The classic game Lights Out built with React"
            github="https://github.com/ianbaker615/Lights-Out"
            liveDemo="https://ianbaker615.github.io/Lights-Out/"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;
