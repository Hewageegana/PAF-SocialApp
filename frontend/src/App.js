import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Authentication from "./components/authentication/loginPage";
import Register from "./components/authentication/registerPage";
import createPost from "./components/post/createPost";
import createStatus from "./components/status/createStatus";
import header from "./components/common/header";
import PostWall from "./components/post/feed";
import addComment from "./components/comment/addComment";

function App() {
  return (
    <Router>
      <div>
        <Route path="/head" exact component={header} />
        <Route path="/" exact component={Authentication} />
        <Route path="/register" exact component={Register} />
        <Route path="/post" exact component={createPost} />
        <Route path="/status" exact component={createStatus} />
        <Route path="/wall" exact component={PostWall} />
        <Route path="/comment" exact component={addComment} />
        


      </div>
    </Router>
  );
}

export default App;
