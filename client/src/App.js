import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyles from "./globalStyles";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/profile" component={Profile} />
        <Route path="/signup" component={Signup} />
        <Route path="/post/create" component={CreatePost} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
