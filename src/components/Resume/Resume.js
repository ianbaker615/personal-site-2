import React from "react";
import { Grid } from "@material-ui/core";
import Experience from "./ResumeFields/Experience";
import Skills from "./ResumeFields/Skills";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  leftColumn: {
  },
  rightColumn: {
    background: "#27221f",
    color: "white",
    padding: "2em",
    maxHeight: "100vh",
    overflowY: "scroll",
  }
}));

function Resume() {
  const classes = useStyles();
	return (
			<Grid container>
				<Grid item xs={4} className={classes.leftColumn}>
          <Grid container>
            <Grid item xs={12}>
              <img
              src="https://i.imgur.com/1TqgWa6l.jpg?1"
              alt="avatar"
              className={classes.img}
              />
            </Grid>
            <Grid item xs={12}>
            <h2 style={{ paddingTop: "20px" }}>Ian Baker</h2>
						<h4 style={{ color: "grey" }}>Software Developer</h4>
						<h5>Phone</h5>
						<p>(615) 957-4407</p>
						<h5>Email</h5>
						<p>ianbaker615@gmail.com</p>
						<h5>Web</h5>
						<a href="google.com">IansSiteNeedsURL.com</a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ianpbaker/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" />
                </a>
						
							{/* Github */}
              <a
                  href="https://github.com/ianbaker615/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" />
                </a>
            </Grid>
          </Grid>			
				</Grid>

				<Grid item xs={8} className={classes.rightColumn}>
					<h4>Education</h4>
					<Experience
						startYear={2012}
						endYear={2016}
						jobName="Northwestern University - Evanston, IL"
						bullets={[
							"Bachelor of Music in Guitar Performance, June 2016",
							"Minor in Music Technology",
						]}
					/>
					<hr style={{ borderTop: "3px solid #e22947" }} />
					<h4>Experience</h4>
					<Experience
						startYear="Sept"
						endYear="Dec 2019"
						jobName="Software Engineer, Infinity Interactive"
						bullets={[
							"Created API endpoints for user creation and implemented unit tests using Mocha.js",
							"Refactored a large code base to conform to ES6 standards",
							"Utilized CLI tools ag, sed, npm, etc to streamline workflow",
							"Anticipated and responded to feedback in iterative code review process",
						]}
					/>
					<Experience
						startYear="2018"
						endYear="2019"
						jobName="Online Sales Specialist, Chicago Music Exchange"
						bullets={[
							"Conducted musical instrument web sales via online chat, email, Reverb.com, and social media with hundreds of weekly customers",
							"Built Python scripts to automate and streamline salesperson workflows to improve efficiency and speed of service",
						]}
					/>
					<Experience
						startYear="2016"
						endYear="2018"
						jobName="Teaching Artist, Chicago Institute for Music Education"
						bullets={[
							"Lead an after school guitar program with 30+ students per class",
							"Taught private guitar lessons and group classes of 4-7 students aged 4-70",
						]}
					/>

					<h4>Programming Experience</h4>
					<Experience
						jobName="Colt Steele’s “Web Developer Bootcamp”"
						bullets={[
							"YelpCamp project featuring: RESTful routing, Data persistence, Database management, User authentication, Version control, Deployed with Heroku",
							"Final Project Link: https://tranquil-harbor-51785.herokuapp.com/",
						]}
					/>
					<Experience
						jobName="Al Sweigart’s “Automate the Boring Stuff with Python”"
						bullets={[
							"Key Concepts: Data structures, Control Flow, Functions, Regular expressions, GUI automation",
							"Automated online chat program and internal emails using Python to increase sales and response speed at Chicago Music Exchange",
						]}
					/>
					<h4>Technologies</h4>
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
							"SQL",
						]}
					/>
				</Grid>
			</Grid>
	);
}

export default Resume;
