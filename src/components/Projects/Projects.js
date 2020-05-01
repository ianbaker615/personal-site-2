import React from "react";
import { Grid } from "@material-ui/core";
import Project from "./Project/Project";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  projectsGrid: {
    padding: "8em 0 2em 5em",
  },
}));

function Projects() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      spacing={10}
      xs={12}
      className={classes.projectsGrid}
    >
      {/* YelpCamp */}
      <Grid item>
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
      <Grid item>
        <Project
          imageUrl="https://i.imgur.com/p8lPXhe.png"
          imageTitle="Patatap visuals"
          title="Patatap Clone"
          description="Use the keyboard to play distinct samples and watch the screen make fun colors!"
          github="https://github.com/ianbaker615/Patatap-Clone"
          liveDemo="https://ianbaker615.github.io/Patatap-Clone/"
        />
      </Grid>

      {/* Meteorite Tracker */}
      <Grid item>
        <Project
          imageUrl="https://i.imgur.com/96vBrTJ.png"
          imageTitle="List of meteorites"
          title="Meteorite Tracker"
          description="Searchable and Sortable Meteorite Tracker using NASA API"
          github="https://github.com/ianbaker615/meteorite_tracker"
          liveDemo="https://ianbaker615.github.io/meteorite_tracker/"
        />
      </Grid>
      <Grid item>
        <Project
          imageUrl="https://i.imgur.com/96vBrTJ.png"
          imageTitle="List of meteorites"
          title="Meteorite Tracker"
          description="Searchable and Sortable Meteorite Tracker using NASA API"
          github="https://github.com/ianbaker615/meteorite_tracker"
          liveDemo="https://ianbaker615.github.io/meteorite_tracker/"
        />
      </Grid>
      <Grid item>
        <Project
          imageUrl="https://i.imgur.com/96vBrTJ.png"
          imageTitle="List of meteorites"
          title="Meteorite Tracker"
          description="Searchable and Sortable Meteorite Tracker using NASA API"
          github="https://github.com/ianbaker615/meteorite_tracker"
          liveDemo="https://ianbaker615.github.io/meteorite_tracker/"
        />
      </Grid>
      <Grid item>
        <Project
          imageUrl="https://i.imgur.com/96vBrTJ.png"
          imageTitle="List of meteorites"
          title="Meteorite Tracker"
          description="Searchable and Sortable Meteorite Tracker using NASA API"
          github="https://github.com/ianbaker615/meteorite_tracker"
          liveDemo="https://ianbaker615.github.io/meteorite_tracker/"
        />
      </Grid>
    </Grid>
  );
}

export default Projects;
