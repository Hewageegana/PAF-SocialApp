import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Authentication from "./components/authentication/loginPage";
import Register from "./components/authentication/registerPage";
import header from "./components/common/header";
import PostWall from "./components/post/feed";
import CreatePost from "./components/post/createPost";
import AddComment from "./components/comment/addComment";
import CreateStatus from "./components/status/createStatus";

function App() {
  return (
    <Router>
      <div>
        <Route path="/head" exact component={header} />
        <Route path="/" exact component={Authentication} />
        <Route path="/register" exact component={Register} />
        <Route path="/post" exact component={CreatePost} />
        <Route path="/status" exact component={CreateStatus} />
        <Route path="/wall" exact component={PostWall} />
        <Route path="/comment" exact component={AddComment} />
        


      </div>
    </Router>
  );
}

export default App;
