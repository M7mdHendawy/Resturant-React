import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";

//lauout of pages
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";

//pages of the site
import Home from "./components/pages/Home/Home";
import News from "./components/pages/News/News";
import Contacts from "./components/pages/Contacts/Contacts";
import Details from "./components/pages/Details/Details";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/details" component={Details} />
          <Route component={NotFoundPage} />
        </Switch>

      <Footer />
    </div>
  );
}

export default App;
