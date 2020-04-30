import React from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import AboutMe from "./components/AboutMe/AboutMe";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Tab, Tabs } from "@material-ui/core";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <AppBar position="relative">
            <Toolbar className="toolbar">
              <Typography variant="h5" style={{ flex: 1 }}>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  Ian Baker // Software Engineer
                </Link>
              </Typography>
              <Tabs>
                <Tab label="Resume" to="/resume" component={Link} />
                <Tab label="About Me" to="/aboutme" component={Link} />
                <Tab label="Projects" to="/projects" component={Link} />
                <Tab label="Contact" to="/contact" component={Link} />
              </Tabs>
            </Toolbar>
          </AppBar>
        </nav>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/projects" component={Projects} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/resume" component={Resume} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
