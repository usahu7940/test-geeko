import React from "react";
import TeleSkope from "./images/teleskope.png"
import Python from "./images/python.png";
import Html5 from "./images/html5.png"
import Css from "./images/css.png"
import JavaScript from "./images/javascript.png"
import BlueBcg from "./images/bluecolor.png"
import BlueBg from "./images/image 4.png"
import Mathematical from "./images/two-three.png"
import Map from "./images/map.png"
import PlayButton from "./images/playbutton.png"
import Percantage from "./images/percantage.png"
import HalfCut from "./images/halfcut.png"
import Group from "./images/Group 391.png"
import Groupt from "./images/Group 390.png"
import "./App.css";
import Headerr from "./headerr";
import { NavLink ,Link } from "react-router-dom";
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'


function Dashboard() {
  
  return (
    <>
        <Headerr/>
      <div className = "container-fluid px-lg-5 main_container ">
          <div className ="row py-4">
            <div className ="col-lg-6 vdo_btn">
              <img src = {TeleSkope} className = " w-100" />
              <div className ="paly_btn">
              <img src = {PlayButton}  className = "Play_Button" />
              </div>
              <div className ="percantage">
                <img src = {Percantage}  className ="percantage_seven"/>
              </div>
              <div className = "learn_quantaum">
              <h6 className ="quantaum"> Quantum Physics: Chapter 3, Class: 56, Duration: 35mins</h6>
              <h5 className = "learning">Learn how to set up the Machine</h5>
              <p className = "leanning_para">Learn from top universities and leading global voices. Accelerate your career transformation today.</p>
              </div>
            </div>
            <div className = " col-lg-6">
             <div className = "one">
            <div className = "a">
            <img src = {Mathematical} className = "w-100" />
            </div>
            <div className = "b">
            <img src = {Map} className = "w-100" />
            </div></div>
            <div className ='two'>
            <div className = "c">
            <img src = {Group} className = "w-100" />
            </div>
            <div className = "d">
            <img src = {Groupt} className = "w-100" />
            </div></div>
            </div>
          </div>
          <div>
          <h6>Category</h6>
          </div>
          <div className = "language_items">
              {/* <h6>Category</h6> */}
              <div className = "Python">
                {/* <img src = {Python} className = ""/> */}
              </div>
              <div className = "Html5">
              {/* <img src = {Html5} className = ""/> */}
              </div>
              <div className = "Css">
              {/* <img src = {Css} className = ""/> */}
              </div>
              <div className = "JavaScript">
              {/* <img src = {JavaScript} className = ""/> */}
              </div>
              <div className = "Csss">
              {/* <img src = {Css} className = ""/> */}
              </div>
              <div className = "Python">
                {/* <img src = {Python} className = ""/> */}
              </div>
          </div>
          
      </div>
      <div className = "blue_bcg ">
          <div >
            {/* <img src = {TeleSkope}className = "w-50 " /> */}
          </div>
          <div  className = " blue_bg">
          {/* <img src = {BlueBg} className = "w-100  blue_bg_blue"/> */}
          </div>
        
          </div>
        
    </>
  );
}
export default Dashboard;


