import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Authentication from "./components/authentication/loginPage";
import Register from "./components/authentication/registerPage";
import header from "./components/common/header";
import PostWall from "./components/post/feed";
import CreatePost from "./components/post/createPost";
import AddComment from "./components/comment/addComment";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { useState } from "react";
import { client_id } from "./constants";
import UpdatePost from "./components/post/updatePost";
import Status from "./components/status/Status";
import CreateStatus from "./components/status/createStatus";
import UpdateStatus from "./components/status/updateStatus";

function App() {

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null
  );

  useEffect(() => {
    window.addEventListener("storage", handleLocalStorageChange);
    return () => {
      window.removeEventListener("storage", handleLocalStorageChange);
    };
  }, []);

  const handleLocalStorageChange = () => {
    setLoginData(localStorage.getItem("loginData") ? JSON.parse(localStorage.getItem("loginData")) : null);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "391312029550-eqbfuurb8q1nrdo5edp4oheck37eabud.apps.googleusercontent.com",
        scope: "",
        client_id: "391312029550-eqbfuurb8q1nrdo5edp4oheck37eabud.apps.googleusercontent.com",
      })
    }

    gapi.load('client:auth2', start)
  })

  function PageNotFound() {
  	return (
    	<div>
      		<p>404 Page not found</p>
    	</div>
  	);
}

  return (
    <Router>
      {loginData ?(<div>
        <Route path="/" component={header} />
        <Route path="/post" exact component={CreatePost} />
        <Route path="/status" exact component={Status} />
        <Route path="/create-status" exact component={CreateStatus} />
        <Route path="/" exact component={PostWall} />
        <Route path="/comment/:id" exact component={AddComment} />
        <Route path="/update-post/:id" exact component={UpdatePost} />
        <Route path="/update-status/:id" exact component={UpdateStatus} />
      </div>) :(<div>
        <Route path="/" exact component={Authentication} />
        <Route path="/register" exact component={Register} />
      </div>)}
      {/* <div>
        <Route path="/head" exact component={header} />
        <Route path="/post" exact component={CreatePost} />
        <Route path="/status" exact component={CreateStatus} />
        <Route path="/wall" exact component={PostWall} />
        <Route path="/comment" exact component={AddComment} />
        <Route path="/" exact component={Authentication} />
        <Route path="/register" exact component={Register} />
      </div> */}

    </Router>
  );
}

export default App;
