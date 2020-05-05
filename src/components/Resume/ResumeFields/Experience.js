import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  dateRange: {
    textAlign: "right",
    [theme.breakpoints.down('sm')]: {
      textAlign: "left"
    },
  }
}));

function Experience(props) {
  const classes = useStyles();

  return (
    <Grid item container xs={12}>

      <Grid item xs={12} md={9}>
        <h4>{props.jobName}</h4>
      </Grid>

      <Grid item xs={12} md={3} className={classes.dateRange}>
        {props.startYear && props.endYear && (
            <h5>
              {props.startYear} - {props.endYear}
            </h5>
          )}
      </Grid>

      <Grid item xs={12}>
        <ul>
          {props.bullets.map(bullet => {
            return <li>{bullet}</li>;
          })}
        </ul>
      </Grid>
    </Grid>
  );
}

export default Experience;
