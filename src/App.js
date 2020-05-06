import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Tab, Tabs } from "@material-ui/core";
import { makeStyles, createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router basename="/">
      <div className="App">
        <ThemeProvider theme={theme}>
        <nav>
          <AppBar position="relative">
            <Toolbar component="nav" variant="dense" className={classes.toolbar}>
              <Typography variant="h5" style={{ flex: 1 }}>
                <Link style={{ textDecoration: "none", color: "white" }} to="/" >
                  Ian Baker // Software Engineer
                </Link>
              </Typography>
              <Tabs className={classes.toolbarLink}>
                <Tab label="Resume" to="/resume" component={Link} className={classes.toolbarLink} />
                <Tab label="About Me" to="/aboutme" component={Link} className={classes.toolbarLink} />
                <Tab label="Projects" to="/projects" component={Link} className={classes.toolbarLink} />
              </Tabs>
            </Toolbar>
          </AppBar>
        </nav>
        <Switch>
          <Route path="/projects" component={Projects} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/resume" component={Resume} />
          <Route path="/" component={LandingPage} />
        </Switch>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
