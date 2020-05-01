import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  paper: {
    padding: "2em",
    textAlign: "left",
    color: theme.palette.text.secondary,
    width: "60%",
    margin: "3em",
    maxHeight: "80vh",
    overflowY: "scroll"
  },
  textIndent: {
    textIndent: "1em",
  },
}));

function AboutMe(props) {
  const classes = useStyles();
  return (
      <Paper className={classes.paper}>
        <p>Hello!</p>
        <p className={classes.textIndent}>
          Thank you for visiting!
          I am a Passionate educator and self motivated learner dedicated to teaching and inspiring others. 
          My strong interpersonal skills augment my foundation in critical software engineering principles. 
          I am eager to leverage my technical experience and ability to learn quickly to further my career in tech!
        </p>
        <p className={classes.textIndent}>
          I am always looking to learn more about software development and further my craft. 
          My experiences in programming and engineering classes at Northwestern University enabled me 
          to continue to hone my abilities outside of class and work, as evidenced by my 
          independent studies and projects on my Github. 
          I have studied web design and have crafted my own fully functional website with many of the 
          elements required of modern sites, such as user authentication, a pleasant 
          Graphical User Interface, and data persistence. 
          My most recent developer work was an internship that I completed at Infinity Interactive. 
          In this position I was tasked with creating users, securing their data, 
          and crafting different app-experiences for users with varied authorizations for a 
          medium sized proprietary API.
        </p>

        <p className={classes.textIndent}>
          Working as a classical guitar teacher has also helped me develop excellent communication 
          skills and the ability to facilitate productive conversations between coworkers, 
          parents, and students. 
          In my time as a teacher, I was selected to be the lead educator for a new after school 
          guitar program at Rufino Tamayo elementary. Coordinating lesson plans, classroom procedures, 
          and group concerts with students from first to seventh grade granted me a lot of experience 
          with goal setting and persistence.        
        </p>

        <p className={classes.textIndent}>
          I can't wait to work with you etc.
        </p>
      </Paper>
  );
}

export default AboutMe;
