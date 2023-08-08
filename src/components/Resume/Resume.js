import React from "react";
import { Grid, Paper, Divider } from "@material-ui/core";
import Experience from "./ResumeFields/Experience";
import Skills from "./ResumeFields/Skills";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  leftColumn: {
    textAlign: "center",
    paddingTop: "2em",
  },
  avatar: {
    maxWidth: "150px",
    height: "auto",
    borderRadius: "50%",
    marginTop: "1em",
    boxShadow: `-webkit-box-shadow: 0px 0px 25px 1px rgba(0,0,0,0.49);
    -moz-box-shadow: 0px 0px 25px 1px rgba(0,0,0,0.49);
    box-shadow: 0px 0px 25px 1px rgba(0,0,0,0.49);`,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "80%",
    margin: "auto",
    marginBottom: "2em",
  },
  rightColumn: {
    background: "#27221f",
    color: "white",
    padding: "0 2em",
    maxHeight: "100vh",
    overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      overflowY: "visible",
      maxHeight: "100%",
    },
  },
  contactLinks: {
    padding: "0 0 0.5em 1em",
    textAlign: "left",
  },
  divider: {
    width: "50%",
    backgroundColor: "white",
    opacity: "0.3",
  },
}));

function Resume() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={4} className={classes.leftColumn}>
        <Paper className={classes.paper}>
          <img
            src="https://i.imgur.com/1TqgWa6l.jpg?1"
            alt="avatar"
            className={classes.avatar}
          />
          <h2>Ian Baker</h2>
          <h4 style={{ color: "grey" }}>Software Engineer</h4>

          <div className={classes.contactLinks}>
            {/* Phone */}
            <a href="tel:1-615-957-4407">
              <i className="fa fa-phone-square" />
            </a>
            <a href="tel:1-615-957-4407" className="resume-links">
              (615)-957-4407
            </a>
            <br />

            {/* Email */}
            <a href="mailto:ianbaker615@gmail.com">
              <i className="fa fa-envelope-square" />
            </a>
            <a href="mailto:ianbaker615@gmail.com" className="resume-links">
              ianbaker615@gmail.com
            </a>
            <br />

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/ianpbaker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-linkedin-square" />
            </a>
            <a
              href="https://www.linkedin.com/in/ianpbaker/"
              className="resume-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/ianpbaker
            </a>
            <br />

            {/* Github */}
            <a
              href="https://github.com/ianbaker615/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-github-square" />
            </a>
            <a
              href="https://github.com/ianbaker615/"
              className="resume-links"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ianbaker615
            </a>
            <br />
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} md={8} className={classes.rightColumn}>
        <h2>Experience</h2>
        <Divider className={classes.divider} orientation="horizontal" />

        <Experience
          startYear={"Feb 2022"}
          endYear={"Current"}
          jobName="Backend Software Engineer, Acrisure"
          bullets={[
            "Transformed monolithic application into microservices and SDKs, resulting in 75% faster carrier onboarding times and improved code maintainability",
            "Utilized Python, FastAPI, MongoDB, Docker, and Kubernetes to compose and deploy APIs for complex insurance-quoting processes",
            "Achieved full ownership of business-critical services within 3 months, enhancing monitoring capabilities and increasing test coverage by 25% to ensure optimal uptime",
          ]}
        />

        <Experience
          startYear={"Oct 2021"}
          endYear={"Dec 2022"}
          jobName="Fullstack Software Engineer II, Balto Software"
          bullets={[
            "Revolutionized integration process by developing a cutting-edge framework, reducing integration time by over 1000% for top 3 software phone systems",
            "Increased integration reliability by 70% through development of microservices using Python, FastAPI, Redis, and SQLAlchemy",
            "Designed user-friendly UI with React, Redux, and Formik, enabling seamless creation and editing of integration configurations",
            "Implemented state-of-the-art audio-streaming integrations via websockets, optimizing byte-level audio data processing",
          ]}
        />

        <Experience
          startYear="2020"
          endYear="2021"
          jobName="Information Technology Engineer, JC Consulting"
          bullets={[
            "Developed efficient automation tools using Python and Javascript, resulting in a 60% reduction in manual workloads",
            "Implemented an AWS-based Rocket.Chat server as an effective alternative communication channel",
          ]}
        />

        <Experience
          startYear="Sep. 2019"
          endYear="Dec. 2019"
          jobName="Software Engineer, Infinity Interactive"
          bullets={[
            "Developed secure API endpoints using Node.js, Passport.js, and MongoDB for user creation and authentication",
            "Utilized CLI tools like ag, sed, and npm to optimize development workflow",
          ]}
        />

        <h2>Education</h2>
        <Divider className={classes.divider} orientation="horizontal" />
        <Experience
          startYear={2012}
          endYear={2016}
          jobName="Northwestern University - Evanston, IL"
          bullets={[
            "Bachelor of Music in Guitar Performance, June 2016",
            "Minor in Music Technology",
          ]}
        />

        <Experience
          startYear={"Dec."}
          endYear={"2020"}
          jobName="Amazon Web Services Certified Solutions Architect - Associate Certification"
          bullets={[
            "Learned how to architect and deploy secure, robust applications using AWS",
            "Gained knowledge to provide implementation guidance through the entire lifecycle of a project",
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default Resume;
