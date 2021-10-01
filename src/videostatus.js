import React from "react";


import rectangle from "./images/Rectangle 13.png";
import time from "./images/02_30.png";

import eye from "./images/eye (1).png";
import like from "./images/like.png";
import message from "./images/message.png";
import Cross from "./images/cross.png"
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion'
import Modal from "react-bootstrap/Modal";


import "./App.css";
import Header from "./header";

function VideoStatus() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showNext, setShowNext] = useState(false);
  const handleCloseNext = () => setShowNext(false);
  const handleShowNext = () => {setShowNext(true);setShow(false);};
  return (
    <>
        <Header/>
       <div className = "container-fluid ">
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
                            <input type="checkbox" class="form-check-input" id="musicCheck " disabled></input>
                           
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
          <div className="col-lg-10 videos_container " >
          <div className ="">
              <h6 className ="vdo_heading">My Videos</h6>
            </div>
           <div className="Learning_videos " onClick={handleShow}>
           <div className ="col-lg-2">
              <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
              </div>
              <div className = 'col-md-10 para_heading'>
              <p className="python_para1">Python, Inheritance</p>
                <h2 id="python_heading">
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
              <h2 id="python_heading">
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
              <h2 id="python_heading">
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
              <h2 id="python_heading">
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
              <h2 id="python_heading">
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
              <h2 id="python_heading">
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
              <h2 id="python_heading">
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
                <h2 id="python_heading">
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


       <Modal contentClassName = "vdo"  dialogClassName = "vd" show={show} onHide={handleClose} >
        <Modal.Header  className = "selecet_video" closeButton>
        <h6 className ='Rhs_heading'>What is the difference between RHS and LHS?</h6>
            <div className ='upload_percantage'>
              <h6 className = "Uploading">Approved</h6>
             
            </div>
        </Modal.Header>
        <Modal.Body id ="drag_video">
          <div className = 'row my-3'>
              <div className = "col-4 detail_Qa">
                <div className = "">
                </div>
                <div className = "Qa">
                </div>
                <span className = "Details_heading ">Details</span> 
                <span className = "Qa_heading">Q&A</span>
              </div>         
              <div>
              <div className = "row " id = "title_empty">
                <div className ='col-md-8 '>
                  <div className = "title_div w-100">
               <h6 className = "Title_required ">Title (required)</h6>
               <textarea placeholder = " What is the difference between RHS and LHS? " className = "video_title" rows="1" cols="50"></textarea>
               </div>
               <div className = ' ' id ='Description_div'>
                  <h6 className = "description_class">Description (required)</h6>
                  <textarea id="Description_textarea"rows="7" cols="50" placeholder ="What will you get in the Lakshya Batch?

1) Complete Class 12th + JEE Mains/ NEET syllabus - Targeting 95% in Board Exams and Selection in JEE MAINS / NEET  with a Strong Score under Direct Guidance of Alakh Pandey.

2)Live Classes and recorded Video Lectures (New, different from those on YouTube)

3)PDF Notes of each class.">
                  </textarea>
                </div>
                <div className = "Select_inheritance_classes d-flex">
                <select  id="Select_category">
                <option value="volvo">Physics</option>
                </select>
                </div>
                <div className = "Video_tags_div w-100">
               <h6 className = "Video_tags ">Video tags</h6>
               <textarea className = "Video_tags_title" rows="1" cols="50">
               </textarea>
               <div className = "ohms_law_button w-100">
                 <button className = 'ohms_button'>ohms law <img src = {Cross} className = "cross_image"/>  </button>
                 <button className = 'ohms_button'>ohms law  <img src = {Cross} className = "cross_image"/> </button>
                 <button className = 'ohms_button'>ohms law <img src = {Cross} className = "cross_image"/> </button>
                 <button className = 'ohms_button'>ohms law<img src = {Cross} className = "cross_image"/> </button>
               </div>
               </div>
                </div>
                <div className = "col-md-4 " id = "second_part_col">
                  <div className = "empty_box w-100 order-1">
                  </div>

                   <div className = "java_tutorial_box  w-100">
                     <h6 className = "java_tutorial_heading">Thumbnail</h6>
                     <div className = "d-flex w-100">
                    <div className = "java_tutorial ">
                      {/* <img src = {JavaTutorial} className ="w-100"/> */}
                    </div>
                    <div className = "intoduction_java">
                      {/* <img src = {IntroductionJava} className = " IntroductionJava_image w-100"/> */}
                      {/* <img src = {Right} className = 'right_image'/> */}
                    </div>
                    <div className = "upload_custom">
                    {/* <img src = {UploadCustom} className = " UploadCustom _image w-100"/> */}
                    </div>
                    </div>
                   </div>
                 
              
                  
                  <div className = 'video_marks'>
                      <div id = "mark">
                      </div>
                      <h6 className = "mark_heading">Mark this as video paid</h6>
                    </div>
             </div>
              </div>
             <div className = "border_bottom_div">

             </div>
             
              </div>
          </div>
          <div className =" next__btn">
            <button className = "btn btn-primary">Delete Video</button>
             <button className = "btn btn-primary" id = 'next_btn' onClick={handleShowNext}>Next</button>
             </div>
        </Modal.Body>
      </Modal>

       
    </>
  );
}
export default VideoStatus;





