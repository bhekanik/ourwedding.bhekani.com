import React, { useReducer, createContext } from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Success from "./components/Contact/Success/Success";
import Footer from "./components/Footer/Footer";

import './App.css';

export const Context = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case "page":
      return {
        ...state,
        page: action.payload
      };
    case "nav":
      return {
        ...state,
        navBackgroundColor: action.payload.navBackgroundColor,
        homeLinkColor: action.payload.homeLinkColor,
        detailsLinkColor: action.payload.detailsLinkColor,
        contactLinkColor: action.payload.contactLinkColor,
        boxShadow: action.payload.boxShadow
      };
    case "homeLink":
      return {
        ...state,
        homeLinkColor: action.payload.linkColor
      };
    case "detailsLink":
      return {
        ...state,
        detailsLinkColor: action.payload.linkColor
      };
    case "contactLink":
      return {
        ...state,
        contactLinkColor: action.payload.linkColor
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    navbackgroundColor: "rgba(0,0,0,0.3)",
    homeLinkColor: "#e8e9eb",
    detailsLinkColor: "#e8e9eb",
    contactLinkColor: "#e8e9eb",
    boxShadow: "none",
    page: "home",
  });

  return (
    <Context.Provider value={dispatch}>
      <div className="App">
        <Navbar
          navbackgroundColor={state.navBackgroundColor}
          homeLinkColor={state.homeLinkColor}
          detailsLinkColor={state.detailsLinkColor}
          contactLinkColor={state.contactLinkColor}
          boxShadow={state.boxShadow}
          page={state.page}
        />
        <Switch>
          <Route exact path="/" render={() => <Home page={state.page} />} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/success" component={Success} />
        </Switch>
        <div className="footer-spacer"></div>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
