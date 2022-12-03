import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "2em",
    textAlign: "left",
    color: theme.palette.text.primary,
    margin: "3em 0 3em 0",
  },
  textIndent: {
    textIndent: "1em",
  },
  divider: {
    margin: "0 25%",
    width: "50%",
  },
  h1: {
    textAlign: "center",
  },
}));

function AboutMe(props) {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={11} sm={10} md={9} lg={8}>
        <Paper className={classes.paper}>
          <h1 className={classes.h1}>About Me</h1>
          <Divider className={classes.divider} />
          <p>
            Thank you for visiting! I am Fullstack Software Engineer that is
            passionate about technology and self-motivated learning. My strong
            interpersonal skills augment foundations in core software
            engineering principles. I am eager to leverage my technical
            expertise and ability to learn quickly to thrive at a growing
            organization!
          </p>
          <Divider className={classes.divider} />
          <p>
            I am always looking to learn more about software development and
            further my craft. During my internship with Infinity Interactive, I
            was tasked with creating users, securing their data, and crafting
            different app-experiences for users with varied authorizations for a
            medium sized proprietary API. My role at JC Consulting had me
            playing to role of technologist, with a focus on automation for the
            browser using Python and Javascript. My current role at Balto
            Software is the culmination of a lot of hard work and learning. On
            the integrations team at Balto I built out a custom integration
            framework that cut customer implementation time from months down to
            only a few clicks. I was promoted from Fullstack Software Engineer I
            to II in less than a year and have been thrilled to be using
            technologies like Python, FastAPI, Javascript, Node, React,
            PostgreSQL, Redis, Docker, and a litany of others to help the
            company create rock solid integrations so Balto "just works".
          </p>
          <Divider className={classes.divider} />
          <p>
            My previous work as a classical guitar teacher has taught me
            excellent communication skills and the ability to facilitate
            productive conversations between coworkers, parents, and students.
            In my time as a teacher, I was selected to be the lead educator for
            a new after school guitar program at Rufino Tamayo elementary.
            Coordinating lesson plans, classroom procedures, and group concerts
            with students from first to seventh grade granted me a lot of
            experience with goal setting and persistence.
          </p>
          <Divider className={classes.divider} />
          <p>
            I appreciate you taking the time to learn a little about me! Please
            feel free to reach out to me at my{" "}
            <a href="mailto:ianbaker615@gmail.com">Email</a> or on{" "}
            <a
              href="https://www.linkedin.com/in/ianpbaker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
          <p>Best,</p>
          <p>Ian</p>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
