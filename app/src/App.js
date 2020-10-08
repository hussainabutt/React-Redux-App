import React, { useEffect } from "react";
import { fetchmatch } from "./store/actions/actions";
import "./App.css";
import { Searchform } from "./components/searchform.js";
import { connect } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App(props) {
  useEffect(() => {
    fetchmatch();
  }, []);
  return (
    <div className="App">
      <h1>Who lost us the match?</h1>
      <Searchform />
    </div>
  );
}

export default connect(null, { fetchmatch })(App);
