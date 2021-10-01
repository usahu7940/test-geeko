import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import ModelOne from './model1';
import PageFive from './pagefive';
import Dashboard from "./dashboard"
import PageSix from "./sixpage";
import VideoStatus from "./videostatus";
import SevenPage from "./seven";




import {
  HashRouter as Router, Switch, Route
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/videos" component={PageFive}></Route>
        <Route path="/leaderboard" component={PageSix}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path = '/videostatus'component = {VideoStatus}></Route>
        <Route path="**" component={SevenPage}></Route>
      </Switch>
    </Router>
    {/* <VideoStatus/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
