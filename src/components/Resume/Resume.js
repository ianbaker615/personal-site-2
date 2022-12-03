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
    maxHeight: "90.65vh",
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
            "Learned how to architect and deploy secure, robust applications on on AWS technologies",
            "Studied architectural design principles to design solutions based on customer requirements",
            "Gained tools to provide implementation guidance based on best practices through entire lifecycle of project",
          ]}
        />

        <h2>Experience</h2>
        <Divider className={classes.divider} orientation="horizontal" />

        <Experience
          startYear={"Oct 2021"}
          endYear={"Present"}
          jobName="Fullstack Software Engineer II, Balto Software"
          bullets={[
            "Decreased integration time for new customers from weeks to minutes for the top 3 software phone systems",
            "Created several new microservices to improve integration quality using Python, Docker, SQLAlchmemy, and React",
            "Mentored an intern May - August 2022 and equipped them to make significant contributions to Balto’s codebase",
            "Implemented several audio-streaming integrations using websockets to consume and process byte-level audio data",
            "Built an embeddable version of the Balto desktop app to drive channel partnerships with several companies",
          ]}
        />

        <Experience
          startYear="2020"
          endYear="2021"
          jobName="Information Technology Engineer, JC Consulting"
          bullets={[
            "Leveraged Python, Javascript, SQL, to build effective automation tools for web browser and command line",
            "Launched private Rocket.Chat server in AWS cloud to act as backup communication channel",
            "Drove adoption of fundamental software development principles: version control with Git, error reporting, issue tracking",
            "Facilitated agreement for $60,000 contract aimed at improving JC Consulting’s flagship product",
            "Empowered employees to problem-solve through technical support, education",
          ]}
        />

        <Experience
          startYear="Sep. 2019"
          endYear="Dec. 2019"
          jobName="Software Engineer, Infinity Interactive"
          bullets={[
            "Programmed API endpoints in Node.js for Infinity Interactive’s proprietary Node API",
            "Utilized CLI tools ag, sed, and npm to streamline development workflows",
            "Refactored large Javascript codebase to conform to ES6 standards",
            "Engaged in productive dialogue with senior engineers in iterative code review process",
          ]}
        />

        <Experience
          startYear="2018"
          endYear="2019"
          jobName="Online Sales Specialist, Chicago Music Exchange"
          bullets={[
            "Generated musical instrument sales via online chat, email, Reverb.com, and social media",
            "Produced Python scripts with Selenium module to automate salesperson workflows",
            "Maintained and organized large client base of 100+ musicians",
          ]}
        />

        <Experience
          startYear="2016"
          endYear="2018"
          jobName="Teaching Artist, Chicago Institute for Music Education"
          bullets={[
            "Lead after school guitar program in underserved Chicago neighborhood, three student groups with 30+ students per class",
            "Taught private guitar lessons and group classes of 4-7 students aged 4-70",
            "Coached students of all ages to perform confidently, culminating in solo recitals",
          ]}
        />
      </Grid>
    </Grid>
  );
}

export default Resume;
