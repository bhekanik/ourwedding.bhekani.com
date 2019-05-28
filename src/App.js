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
        linkColor: action.payload.linkColor,
        boxShadow: action.payload.boxShadow
      };
    case "name":
      return {
        ...state,
        name: action.payload.name
      };
    case "email":
      return {
        ...state,
        email: action.payload.email
      };
    case "number":
      return {
        ...state,
        number: action.payload.number
      };
    case "message":
      return {
        ...state,
        message: action.payload.message
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    navbackgroundColor: "rgba(0,0,0,0.3)",
    linkColor: "#e8e9eb",
    boxShadow: "none",
    page: "home", 
    name: "", 
    email: "", 
    number: "", 
    message: ""
  });

  return (
    <Context.Provider value={dispatch}>
      <div className="App">
        <Navbar
          navbackgroundColor={state.navBackgroundColor}
          linkColor={state.linkColor}
          boxShadow={state.boxShadow}
        />
        <Switch>
          <Route exact path="/" render={() => <Home page={state.page} />} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" render={() => <Contact name={state.name} email={state.email} number={state.number} message={state.message}/>} />
          <Route path="/success" component={Success} />
        </Switch>
        <div className="footer-spacer"></div>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
