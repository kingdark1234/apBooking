import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

const switchRouter = () => (
  <Switch>
    <Route path="/A101">
      {/* <About /> */}
    </Route>
    <Route path="/A102">
      {/* <Users /> */}
    </Route>
    <Route path="/Auditorium">
      {/* <Users /> */}
    </Route>
    <Route path="/">
      {/* <Home /> */}
    </Route>
  </Switch>
)

export default switchRouter