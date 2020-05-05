import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Divider } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  paper: {
    padding: "2em",
    textAlign: "left",
    color: theme.palette.text.primary,
    margin: "3em 0 3em 0"
  },
  textIndent: {
    textIndent: "1em",
  },
  divider: {
    margin: "0 25%",
    width: "50%"
  },
}));

function AboutMe(props) {
  const classes = useStyles();
  return (
      <Grid container justify="center">
        <Grid item xs={11} sm={10} md={9} lg={8}>
        <Paper className={classes.paper}>
        <p className={classes.textIndent}>
          Thank you for visiting!
          I am a Passionate educator and self motivated learner dedicated to teaching and inspiring others. 
          My strong interpersonal skills augment a foundation in critical software engineering principles. 
          I am eager to leverage my technical experience and ability to learn quickly to further my career in tech!
        </p>
        <Divider className={classes.divider}/>
        <p className={classes.textIndent}>
          I am always looking to learn more about software development and further my craft. 
          My experiences in programming and engineering classes at Northwestern University enabled me 
          to continue to hone my abilities outside of class and work, as evidenced by my 
          independent studies and projects on my Github. 
          I have studied web design and have crafted my own fully functional website with many of the 
          elements required of modern sites, such as user authentication, a pleasant 
          Graphical User Interface, and data persistence. 
          My most recent developer work was an internship with Infinity Interactive. 
          In this position I was tasked with creating users, securing their data, 
          and crafting different app-experiences for users with varied authorizations for a 
          medium sized proprietary API.
        </p>
        <Divider className={classes.divider}/>
        <p className={classes.textIndent}>
          My previous work as a classical guitar teacher has taught me excellent communication 
          skills and the ability to facilitate productive conversations between coworkers, 
          parents, and students. 
          In my time as a teacher, I was selected to be the lead educator for a new after school 
          guitar program at Rufino Tamayo elementary. Coordinating lesson plans, classroom procedures, 
          and group concerts with students from first to seventh grade granted me a lot of experience 
          with goal setting and persistence.        
        </p>
        <Divider className={classes.divider}/>
        <p className={classes.textIndent}>
          I appreciate you taking the time to learn a little about me! Please feel free to reach out to
          me at my email or on LinkedIn. I am currently looking for a full time position and am open to
          contract work as well.
        </p>
        <p>Best,</p>
        <p>Ian</p>
      </Paper>
        </Grid>
      </Grid>
  );
}

export default AboutMe;
