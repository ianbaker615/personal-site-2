import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  socialLinks: {
    display: "flex",
    justifyContent: "space-between",
    width: "50%",
    margin: "auto",
    "& i": {
      color: "#454545",
      fontSize: "3em",
      padding: "8px"
    }
  }
}));

function LandingPage(props) {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={12} align="center">
        <img
          src="https://i.imgur.com/1TqgWa6l.jpg?1"
          alt="avatar"
          className={classes.img}
        />
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <h1>Full Stack Web Developer</h1>
          <p>Javascript | React | Node | Mocha | HMTL | CSS | CLI</p>
          <div className={classes.socialLinks}>
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

            {/* AngelList */}
            <a
              href="https://angel.co/u/ian-baker-10"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-angellist" />
            </a>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default LandingPage;
