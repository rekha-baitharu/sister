import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Siso from './siso';
import Sisoo from './sisoo';
import Sisooo from './sisooo';
import MyLady from "./mylady";
export default class App extends React.Component{
  render(){
    return(
      <div>
        <Switch>
        <Route exact path="/"  component={MyLady} />
        <Route exact path="/siso"  component={Siso} />
        <Route exact path="/sisoo"  component={Sisoo} />
        <Route exact path="/sisooo"  component={Sisooo} />
        <Redirect to="/" />
        </Switch>
      </div>
    )
  }
}
