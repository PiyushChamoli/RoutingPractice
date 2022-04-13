import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Articles from "./Articles";
import People from "./People";
import Books from "./Books";
import Help from "./Help";
import Article from "./Article";
import NoMatch from "./NoMatch";

function Main() {
  return (
    <div className="flex-70 main">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/articles" exact>
          <Articles />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
        <Route path="/articles/:slug" component={Article}></Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default Main;
