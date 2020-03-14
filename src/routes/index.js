import React from "react";
import { Switch, Route } from "react-router-dom";

import Opening from "../pages/Opening";
import Main from "../pages/Main";
import Game from "../pages/Game";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Opening}></Route>
      <Route path="/main" component={Main}></Route>
      <Route path="/game" component={Game}></Route>
    </Switch>
  );
}
