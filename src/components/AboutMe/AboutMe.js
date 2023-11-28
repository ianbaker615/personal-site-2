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
            Welcome! I'm Ian Baker, a dedicated Fullstack Software Engineer
            driven by a passion for technology and lifelong learning. My
            professional journey embodies a blend of technical acumen and a
            knack for mastering the art of software development.
          </p>
          <Divider className={classes.divider} />
          <p>
            My experience includes pivotal roles where I've made significant
            contributions. At The Connected Pet Company, I spearheaded the
            reconstruction of a mission-critical insurance quoting API.
            Leveraging Python and FastAPI, I engineered an agile, scalable, and
            efficient RESTful API. Moreover, my proficiency in MongoDB and
            Beanie ODM ensured optimal data management, elevating data integrity
            and retrieval speed.
          </p>
          <Divider className={classes.divider} />
          <p>
            During my tenure at Acrisure, I led a transformative project that
            evolved a monolithic system into microservices and SDKs. This
            strategic shift led to a remarkable 75% reduction in carrier
            onboarding times and bolstered code maintainability. My skills with
            Python, FastAPI, MongoDB, Docker, and Kubernetes played a pivotal
            role in crafting and deploying the intricate APIs required for
            streamlined insurance-quoting processes.
          </p>
          <Divider className={classes.divider} />
          <p>
            At Balto, I helped develop a revolutionary integration framework,
            slashing implementation time by over 1000% for major software phone
            systems. Using Python, FastAPI, Redis, and SQLAlchemy, I improved
            integration reliability by 70% with the deployment of robust
            microservices. Simultaneously, I engineered a user-centric UI using
            React, Redux, and Formik, facilitating seamless configuration
            creation and editing for integrations.
          </p>
          <Divider className={classes.divider} />
          <p>
            My journey into software engineering was complemented by earlier
            experiences as well. As an Information Technology Engineer at JC
            Consulting, I orchestrated automation tools that significantly
            reduced manual workloads. Additionally, my role as a Software
            Engineer Intern at Infinity Interactive honed my skills in crafting
            secure API endpoints using Node.js, Passport.js, and MongoDB for
            user authentication.
          </p>
          <Divider className={classes.divider} />
          <p>
            Beyond technical expertise, my background as a classical guitar
            teacher taught me exceptional communication skills and how to foster
            constructive dialogues among diverse stakeholders. Leading an after
            school guitar program at Rufino Tamayo elementary taught me valuable
            lessons in goal setting and perseverance.
          </p>
          <Divider className={classes.divider} />
          <p>
            I'm deeply passionate about continual growth and am committed to
            leveraging my skills and experiences to contribute to innovative
            projects. Feel free to reach out via{" "}
            <a href="mailto:ianbaker615@gmail.com">email</a> or connect with me
            on{" "}
            <a
              href="https://www.linkedin.com/in/ianpbaker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            to explore collaboration opportunities.
          </p>
          <p>Ian</p>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default AboutMe;
