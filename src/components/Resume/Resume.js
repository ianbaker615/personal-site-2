import React from "react";
import { Grid, Paper, Divider } from "@material-ui/core";
import Experience from "./ResumeFields/Experience";
import Skills from "./ResumeFields/Skills";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
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
    marginBottom:"2em",
  },
  rightColumn: {
    background: "#27221f",
    color: "white",
    padding: "2em",
    maxHeight: "90.65vh",
    overflowY: "scroll",
    [theme.breakpoints.down('sm')]: {
      overflowY: "visible",
      maxHeight: "100%"
    },
  },
  contactLinks: {
    padding: "0 0 0.5em 1em",
    textAlign: "left"
  },
  divider: {
    margin: "0 25%",
    width: "50%",
    backgroundColor: "white",
    opacity: "0.3"
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
          <h4 style={{ color: "grey" }}>Software Developer</h4>

          <div className={classes.contactLinks}>
            {/* Phone */}
            <a href="tel:1-615-957-4407">
              <i class="fa fa-phone-square" />
            </a>
            <a href="tel:1-615-957-4407" className="resume-links">
              (615)-957-4407
            </a>
            <br />

            {/* Email */}
            <a href="mailto:ianbaker615@gmail.com">
              <i class="fa fa-envelope-square" />
            </a>
            <a href="mailto:ianbaker615@gmail.com" className="resume-links">
              ianbaker615@gmail.com
            </a>
            <br />

            {/* Website */}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-globe" />
            </a>
            <a href="google.com" className="resume-links">
              IansSiteNeedsURL.com
            </a>
            <br/>

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

        <h2>Education</h2>

        <Experience
          startYear={2012}
          endYear={2016}
          jobName="Northwestern University - Evanston, IL"
          bullets={[
            "Bachelor of Music in Guitar Performance, June 2016",
            "Minor in Music Technology"
          ]}
        />

        <Divider className={classes.divider} orientation="horizontal"/>

        <h2>Experience</h2>
        <Experience
          startYear="Sept"
          endYear="Dec 2019"
          jobName="Software Engineer, Infinity Interactive"
          bullets={[
            "Created API endpoints for user creation and implemented unit tests using Mocha.js",
            "Refactored a large code base to conform to ES6 standards",
            "Utilized CLI tools ag, sed, npm, etc to streamline workflow",
            "Anticipated and responded to feedback in iterative code review process"
          ]}
        />

        <Experience
          startYear="2018"
          endYear="2019"
          jobName="Online Sales Specialist, Chicago Music Exchange"
          bullets={[
            "Conducted musical instrument web sales via online chat, email, Reverb.com, and social media with hundreds of weekly customers",
            "Built Python scripts to automate and streamline salesperson workflows to improve efficiency and speed of service"
          ]}
        />

        <Experience
          startYear="2016"
          endYear="2018"
          jobName="Teaching Artist, Chicago Institute for Music Education"
          bullets={[
            "Lead an after school guitar program with 30+ students per class",
            "Taught private guitar lessons and group classes of 4-7 students aged 4-70"
          ]}
        />

        <Divider className={classes.divider} orientation="horizontal"/>

        <h2>Programming Experience</h2>
        <Experience
          jobName="Colt Steele’s “Web Developer Bootcamp”"
          bullets={[
            "YelpCamp project featuring: RESTful routing, Data persistence, Database management, User authentication, Version control, Deployed with Heroku",
            "Final Project Link: https://tranquil-harbor-51785.herokuapp.com/"
          ]}
        />
        <Experience
          jobName="Al Sweigart’s “Automate the Boring Stuff with Python”"
          bullets={[
            "Key Concepts: Data structures, Control Flow, Functions, Regular expressions, GUI automation",
            "Automated online chat program and internal emails using Python to increase sales and response speed at Chicago Music Exchange"
          ]}
        />
        <Divider className={classes.divider} orientation="horizontal"/>
        <h2>Technologies</h2>
        <Skills
          skills={[
            "Javascript - ES6",
            "React",
            "Node.js",
            "Mocha.js",
            "Python",
            "Git",
            "Command Line",
            "HTML",
            "CSS",
            "SQL"
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default Resume;
