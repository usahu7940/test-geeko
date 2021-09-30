import React from "react";


import rectangle from "./images/Rectangle 13.png";
import time from "./images/02_30.png";

import eye from "./images/eye (1).png";
import like from "./images/like.png";
import message from "./images/message.png";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion'

import "./App.css";
import Header from "./header";

function VideoStatus() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
        <Header/>
       <div className = "container-fluid px-0">
        <div className = "row ">
          <div className = "col-lg-2 p-0">
          <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header bsPrefix id = "category-head">Category</Accordion.Header>
    <Accordion.Body bsPrefix id = 'categor_body'>
            
            <div className =' form-check'>
                            <input type="checkbox" class="form-check-input" id="musicCheck disabled"></input>
                            <label for="musicCheck" class="form-check-label disabled">Physics</label>
              </div>  
              <div className =' form-check'>
                            <input type="checkbox" class="form-check-input" id="musicCheck disabled"></input>
                           
                            <label for="musicCheck" class="form-check-label disabled">Physics</label>
              </div>  
              <div className =' form-check'>
                            <input type="checkbox" class="form-check-input" id="musicCheck disabled"></input>
                            <label for="musicCheck" class="form-check-label disabled">Physics</label>
              </div>  
            
            </Accordion.Body>
  </Accordion.Item>
  </Accordion>
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header bsPrefix id = "category-head">Topic</Accordion.Header>
    <Accordion.Body bsPrefix id = 'categor_body'>
    <div className =' form-check '>
                             <input type="checkbox" class="form-check-input" id="Ohm’sCheck disabled"></input>
                            <label for="Ohm’sCheck" class="form-check-label disabled">Ohm’s Law</label> 
            </div>
            <div className ='form-check '>
                            <input type="checkbox" class="form-check-input" id="OrganicCheck"></input>
                          <label for="OrganicCheck" class="form-check-label">Organic Chemistry</label>                         
              </div>
              <div className =' form-check m-0'>
                            <input type="checkbox" class="form-check-input" id="BattleCheck"></input>
                            <label for="BattleCheck" class="form-check-label">Battle of 1984</label>               
              </div>  
              <div className =' form-check m-0'>
                            <input type="checkbox" class="form-check-input" id="BattleCheck"></input>
                            <label for="BattleCheck" class="form-check-label">Battle of 1984</label>               
              </div>  
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
 
            
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header  bsPrefix id = "category-head">Upload Date</Accordion.Header>
    <Accordion.Body bsPrefix id = 'categor_body'>
           
            <div className =' form-check '>
                             <input type="checkbox" class="form-check-input" id="CenterCheck disabled"></input>
                            <label for="CenterCheck" class="form-check-label disabled">23 August 2021</label> 
            </div>
            <div className ='form-check'>
                            <input type="checkbox" class="form-check-input" id="musicCheck"></input>
                          <label for="musicCheck" class="form-check-label">22 August 2021</label>                         
              </div>
              <div className =' form-check '>
                            <input type="checkbox" class="form-check-input" id="musicCheck"></input>
                            <label for="musicCheck" class="form-check-label">20 August 2021</label>               
              </div>  
              <div className =' form-check '>
                            <input type="checkbox" class="form-check-input" id="musicCheck"></input>
                            <label for="musicCheck" class="form-check-label">15 August 2021</label>               
              </div>  
              </Accordion.Body>
  </Accordion.Item>
  </Accordion>
             



             
            <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header bsPrefix id = "category-head">Video Tag</Accordion.Header>
    <Accordion.Body bsPrefix id = 'categor_body'>
    </Accordion.Body>
  </Accordion.Item>
  </Accordion>
          </div>
          <div className="col-md-10 videos_container ">
          <div className ="">
              <h6 className ="vdo_heading">My Videos</h6>
            </div>
           <div className="Learning_videos" onClick={handleShow}>
              <div className ="col-md-2">
              <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
              </div>
              <div className = 'col-md-8 para_heading'>
              <p className="python_class">Class 12, Commerce, Chapter 13</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                We provide you the best test series for Class XI,XII, JEE, NEET chapterwise, which will be scheduled for whole year.
The test series follows very  logical sequence of Basic to Advance
                </p>
                <div className = "disapproved_div">
                  <span className = "disapproved">Disapproved</span>
                </div>   
              </div>
            </div>
           
            <div className="Learning_videos">
            <div className ="col-md-2">
              <img src={rectangle} className="rectangle w-100" />
              <div className ="time">
                  <img src={time} className="time" />
                  </div>
              </div>
              <div className = 'col-md-8 para_heading'>
              <p className="python_class">Class 12, Commerce, Chapter 13</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                We provide you the best test series for Class XI,XII, JEE, NEET chapterwise, which will be scheduled for whole year.
The test series follows very  logical sequence of Basic to Advance
                </p>
                <div className = "disapproved_div">
                  <span className = "disapproved">Disapproved</span>
                </div>  
              </div>
            </div>
           
            <div className="Learning_videos">
              <div className ="col-md-2">
              <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
              </div>
              <div className = 'col-md-8 para_heading'>
              <p className="python_class">Class 12, Commerce, Chapter 13</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                We provide you the best test series for Class XI,XII, JEE, NEET chapterwise, which will be scheduled for whole year.
The test series follows very  logical sequence of Basic to Advance
                </p>
                <div className = "approved_div">
                  <span className = "approved">Approved</span>
                </div>  
              </div>
            </div>
            
            <div className="Learning_videos">
              <div className ="col-md-2">
              <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
              </div>
              <div className = 'col-md-8 para_heading'>
              <p className="python_class">Class 12, Commerce, Chapter 13</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                We provide you the best test series for Class XI,XII, JEE, NEET chapterwise, which will be scheduled for whole year.
The test series follows very  logical sequence of Basic to Advance
                </p>
                <div className = "Pending_div">
                  <span className = "Pending">Pending</span>
                </div>  
              </div>
            </div>
           
            <div className="Learning_videos">
              <div className ="col-md-2">
              <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
              </div>
              <div className = 'col-md-8 para_heading'>
              <p className="python_class">Class 12, Commerce, Chapter 13</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                We provide you the best test series for Class XI,XII, JEE, NEET chapterwise, which will be scheduled for whole year.
The test series follows very  logical sequence of Basic to Advance
                </p>
                <div className = "Pending_div">
                  <span className = "Pending">Pending</span>
                </div>  
              </div>
            </div>
            
            <div className="Learning_videos">
              <div className ="col-md-2">
              <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
              </div>
              <div className = 'col-md-8 para_heading'>
              <p className="python_class">Class 12, Commerce, Chapter 13</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                We provide you the best test series for Class XI,XII, JEE, NEET chapterwise, which will be scheduled for whole year.
The test series follows very  logical sequence of Basic to Advance
                </p>
                <div className = "disapproved_div">
                  <span className = "disapproved">Disapproved</span>
                </div>    
              </div>
            </div>
            
            <div className="Learning_videos">
              <div className ="col-md-2">
              <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
              </div>
              <div className = 'col-md-8 para_heading'>
              <p className="python_class">Class 12, Commerce, Chapter 13</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                We provide you the best test series for Class XI,XII, JEE, NEET chapterwise, which will be scheduled for whole year.
The test series follows very  logical sequence of Basic to Advance
                </p>
                <div className = "Pending_div">
                  <span className = "Pending">Pending</span>
                </div>    
              </div>
            </div>
            
            <div className="Learning_videos">
              <div className ="col-md-2">
              <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
              </div>
              <div className = 'col-md-8 para_heading'>
              <p className="python_class">Class 12, Commerce, Chapter 13</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                We provide you the best test series for Class XI,XII, JEE, NEET chapterwise, which will be scheduled for whole year.
The test series follows very  logical sequence of Basic to Advance
                </p>
                <div className = "disapproved_div">
                  <span className = "disapproved">Disapproved</span>
                </div>   
              </div>
            </div>
          </div>
        </div>
        
       </div>


       
    </>
  );
}
export default VideoStatus;





