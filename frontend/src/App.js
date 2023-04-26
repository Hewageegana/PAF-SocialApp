import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Authentication from "./components/authentication/loginPage";
import Register from "./components/authentication/registerPage";
import createPost from "./components/post/createPost";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Authentication} />
        <Route path="/register" exact component={Register} />
        <Route path="/post" exact component={createPost} />
        

      </div>
    </Router>
  );
}

export default App;
