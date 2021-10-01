import arrow from "./images/Group.png";
import downarrow from "./images/downarro.png";
import rectangle from "./images/Rectangle 13.png";
import time from "./images/02_30.png";
import eye from "./images/eye (1).png";
import like from "./images/like.png";
import message from "./images/message.png";
import DetailQa from "./images/detail_qa.png"
import Cross from "./images/cross.png"
import UploadCustom from "./images/upload_custom.png"
import Right from "./images/right.png"
import JavaTutorial from "./images/java_tutorial.png"
import IntroductionJava from "./images/introduction_java.png"
import OptionImage from "./images/option_image.png"
import EmptyCheck from './images/emptycheck.png'
import Successful from "./images/successful.png"
import plus from "./images/+.png"
import "./App.css";
import Header from "./header";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showNext, setShowNext] = useState(false);
  const handleCloseNext = () => setShowNext(false);
  const handleShowNext = () => {setShowNext(true);setShow(false);};

  const [showSubmit, setShowSubmit] = useState(false);
  const handleCloseSubmit = () => setShowSubmit(false);
  const handleShowSubmit = () => {setShowSubmit(true);setShowNext(false);};

  
  return (
    <>
      <div>
        <Header />
        <section className="main_section">
          <div className="py-4 ">
            <div className="container  ">
              <div className="row justify-content-center">
                <div className="col-md-6 col-12">
                  <div
                    className="row  drag justify-content-center py-5"
                    onClick={handleShow}>
                    <div className="col-md-2 arrow_box">
                      <img src={arrow} className = "arrow_image" />
                    </div>
                    <div className="col-md-8 drag_box ">
                      <h1 className="drag_heading">
                        Drag or select your video
                      </h1>
                      <p className = "video_format">Video formats supported: MP4, FLV, WEBM, & GIF</p>
                      <p className="duration">
                        Note: Maximum duration of video can be 3 minutes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container ">
            <div className="row justify-content-center">
              
                <div className="boxes ">
                  <div className=" box me-2 mt-1">
                    <h1 className="box_heading">23rd</h1>
                    <p className="box_para">rank</p>
                  </div>
                  <div className=" box me-2 mt-1">
                    <h1 className="box_heading">25,563</h1>
                    <p className="box_para">viwes</p>
                  </div>
                  <div className=" box me-2 mt-1">
                    <h1 className="box_heading">8,906</h1>
                    <p className="box_para">videos</p>
                  </div>
                  <div className=" box me-2 mt-1">
                    <h1 className="box_heading">8,693</h1>
                    <p className="box_para">likes</p>
                  </div>
                  <div className=" box me-2 mt-1">
                    <h1 className="box_heading">8,693</h1>
                    <p className="box_para">likes</p>
                  </div>
                  <div className="box me-2 mt-1">
                    <h1 className="box_heading">52,000</h1>
                    <p className="box_para">worth gifts</p>
                  </div>
                </div>
              </div>
            </div>
          
          <div className="container">
            <div className="row justify-content-center mt-4">
              <div className = "col-md-10">
              <div className="container col-md-12 ">
                <div className="row video_recent_box">
                  <div className="col-md-12 d-flex myvideo_div justify-content-space-between">
                    <h6 className = "my_video">My Videos </h6>
                    <select className = "selector-box" id ="seclet_Most_recent">
                      <option>Most recent</option>
                    </select>
                  </div>
                </div>
              </div>
           
          <div className="container video_container">
            <div className="row justify-content-center ">
              <div className="col-lg-12 ">
                <div className="row learn_box">
                  <div className="col-xl-2 col-md-3 ">
                    
                      <img src={rectangle} className="rectangle w-100" />
                      <img src={time} className="time" />
                    
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <p className="python_para1">Python, Inheritance</p>
                    <h2 id="python_heading">
                      Learn how to set up the machines in the robotics belt
                    </h2>
                    <p className="python_para">
                      We provide you the best test series for Class XI,XII, JEE,
                      NEET chapterwise, which will be scheduled for whole year.
                    </p>
                    <div>
                      <img src={eye} className="eye" />
                      <span className = 'seen_count'>56,621 </span><img src={like} className="like" />
                      <span className = 'seen_count'>650</span> <img src={message} className="message" />
                      <span className = 'seen_count'>57</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 py-3">
                <div className="row">
                <div className="col-xl-2 col-md-3 ">
                    <div>
                      <img src={rectangle} className="rectangle w-100" />
                      <img src={time} className="time" />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <p className="python_para1">Python, Inheritance</p>
                    <h2 id="python_heading">
                      Learn how to set up the machines in the robotics belt
                    </h2>
                    <p className="python_para">
                      We provide you the best test series for Class XI,XII, JEE,
                      NEET chapterwise, which will be scheduled for whole year.
                    </p>
                    <div>
                      <img src={eye} className="eye" />
                      <span className = 'seen_count'>56,621 </span><img src={like} className="like" />
                      <span className = 'seen_count'>650</span> <img src={message} className="message" />
                      <span className = 'seen_count'>57</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 py-3 ">
                <div className="row">
                <div className="col-xl-2 col-md-3 ">
                    <div>
                      <img src={rectangle} className="rectangle w-100" />
                      <img src={time} className="time" />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <p className="python_para1">Python, Inheritance</p>
                    <h2 id="python_heading">
                      Learn how to set up the machines in the robotics belt
                    </h2>
                    <p className="python_para">
                      We provide you the best test series for Class XI,XII, JEE,
                      NEET chapterwise, which will be scheduled for whole year.
                    </p>
                    <div>
                      <img src={eye} className="eye" />
                      <span className = 'seen_count'>56,621 </span><img src={like} className="like" />
                      <span className = 'seen_count'>650</span> <img src={message} className="message" />
                      <span className = 'seen_count'>57</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 py-3">
                <div className="row">
                <div className="col-xl-2 col-md-3 ">
                    <div>
                      <img src={rectangle} className="rectangle w-100" />
                      <img src={time} className="time" />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <p className="python_para1">Python, Inheritance</p>
                    <h2 id="python_heading">
                      Learn how to set up the machines in the robotics belt
                    </h2>
                    <p className="python_para">
                      We provide you the best test series for Class XI,XII, JEE,
                      NEET chapterwise, which will be scheduled for whole year.
                    </p>
                    <div>
                      <img src={eye} className="eye" />
                      <span className = 'seen_count'>56,621 </span><img src={like} className="like" />
                      <span className = 'seen_count'>650</span> <img src={message} className="message" />
                      <span className = 'seen_count'>57</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 ">
                <div className="row">
                <div className="col-xl-2 col-md-3 ">
                    <div>
                      <img src={rectangle} className="rectangle w-100" />
                      <img src={time} className="time" />
                    </div>
                  </div>
                  <div className="col-lg-10 ">
                    <p className="python_para1">Python, Inheritance</p>
                    <h2 id="python_heading">
                      Learn how to set up the machines in the robotics belt
                    </h2>
                    <p className="python_para">
                      We provide you the best test series for Class XI,XII, JEE,
                      NEET chapterwise, which will be scheduled for whole year.
                    </p>
                    <div>
                      <img src={eye} className="eye" />
                      <span className = 'seen_count'>56,621 </span><img src={like} className="like" />
                      <span className = 'seen_count'>650</span> <img src={message} className="message" />
                      <span className = 'seen_count'>57</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           </div>
          </div>
          </div>
        </section>
      </div>
      <div>
      <Modal contentClassName = "vdo"  dialogClassName = "vd" show={show} onHide={handleClose} >
        <Modal.Header  className = "selecet_video" closeButton>
        <h6 className ='Rhs_heading'>What is the difference between RHS and LHS?</h6>
            <div className ='upload_percantage'>
              <h6 className = "Uploading">Uploading8</h6>
              <h6 className = 'percantage_nine'>9%</h6>
            </div>
        </Modal.Header>
        <Modal.Body id ="drag_video">
          <div className = 'row my-3'>
              <div className = "col-4 detail_Qa">
                <div className = "Details">
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
               <textarea placeholder = " Enter your video title here " className = "video_title" rows="1" cols="50"></textarea>
               </div>
               <div className = ' ' id ='Description_div'>
                  <h6 className = "description_class">Description (required)</h6>
                  <textarea id="Description_textarea"rows="7" cols="50" placeholder ="Brief about your videos to your students">
                  </textarea>
                </div>
                <div className = "Select_inheritance_classes d-flex">
                <select  id="Select_category">
                <option value="volvo">Select a category</option>
                </select>
                <div className = "inheritance_box">
                  <h6 id="inheritance_classes" >inheritance, classes, error handling,</h6>
                </div>
                </div>
                <div className = "Video_tags_div w-100">
               <h6 className = "Video_tags ">Video tags</h6>
               <textarea className = "Video_tags_title" rows="1" cols="50">
               </textarea>
               <div className = "ohms_law_button w-100">
                 <button className = 'ohms_button'>ohms law <img src = {Cross} className = "cross_image"/> </button>
                 <button className = 'ohms_button'>ohms law <img src = {Cross}  className = "cross_image"/> </button>
                 <button className = 'ohms_button'>ohms law <img src = {Cross}  className = "cross_image"/> </button>
                 <button className = 'ohms_button'>ohms law <img src = {Cross}  className = "cross_image"/> </button>
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
                      <img src = {JavaTutorial} className ="w-100"/>
                    </div>
                    <div className = "intoduction_java">
                      <img src = {IntroductionJava} className = " IntroductionJava_image w-100"/>
                      <img src = {Right} className = 'right_image'/>
                    </div>
                    <div className = "upload_custom">
                    <img src = {UploadCustom} className = " UploadCustom _image w-100"/>
                    </div>
                    </div>
                   </div>
                 
                  <div className = "video_series">
                    <h6 className = "video_series_heading">Video series</h6>
                    <div className = "d-flex">
                    <div className = "zero_one me-1 ms-1"> 
                    <h6 className = "numbers">01</h6>
                    </div>
                    <div className = "zero_one me-1"> 
                    <h6 className = "numbers">02</h6>
                    </div>
                    <div className = "zero_one me-1"> 
                    <h6 className = "numbers">03</h6>
                    </div>
                    <div className = "zero_one me-1"> 
                    <h6 className = "numbers">04</h6>
                    </div>
                    <div className = "zero_one me-1"> 
                    <h6 className = "numbers">05</h6>
                    </div>
                    <div className = "zero_one me-1"> 
                    <h6 className = "numbers">06</h6>
                    </div>
                    <div className = "zero_one me-1"> 
                    <h6 className = "numbers">07</h6>
                    </div>
                    <div className = "zero_eight me-1"> 
                    <h6 className = "numbers">08</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">09</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">10</h6>
                    </div>
                    </div>
                    <div className = "d-flex mt-1">
                    <div className = "zero_nine me-1 ms-1"> 
                    <h6 className = "numbers">11</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">12</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">13</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">14</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">15</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">16</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">17</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">18</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">19</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">20</h6>
                    </div>
                    </div>
                    <div className = "d-flex mt-1 mb-1">
                    <div className = "zero_nine me-1 ms-1"> 
                    <h6 className = "numbers">21</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">22</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">23</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">24</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">25</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">26</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">27</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">28</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">29</h6>
                    </div>
                    <div className = "zero_nine me-1"> 
                    <h6 className = "numbers">30</h6>
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
             <button className = "btn btn-primary" id = 'next_btn' onClick={handleShowNext}>Next</button>
             </div>
        </Modal.Body>
      </Modal>
      </div>



      <Modal contentClassName = "vdo"  dialogClassName = "vd" show={showNext} onHide={handleCloseNext} >
        <Modal.Header  className = "selecet_video" closeButton>
        <h6 className ='Rhs_heading'>What is the difference between RHS and LHS?</h6>
            <div className ='upload_percantage'>
              <h6 className = "Uploading">Uploading8</h6>
              <h6 className = 'percantage_nine'>9%</h6>
            </div>
        </Modal.Header>
        <Modal.Body size = "xl" id ="drag_video">
          <div className = 'row my-3'>
              <div className = "col-4 detail_Qa">
                <div className = "Details">
                </div>
                <div className = "Qa">
                </div>
                <span className = "Details_heading ">Details</span> 
                <span className = "Qa_heading">Q&A</span>
              </div>         
              </div>
              <div  id = "main_container">
                <div className= "d-flex " id ="ques_select_box">
                <h6 className = "que_heading">Question 1</h6>
                <select className = "selector-box">
                  <option className = "select_heading">select </option>
                </select>
                </div>
                <div className = " type_question">
                  <h6 className = "type_heading">Type your question</h6>
                </div>
                </div>
                <div className  = "row" id = "options">
                  <div  id =  "option-1">
                  <div>
                    <img src = {OptionImage} className = "option_image_logo"/>
                  <h6 className = "option_heading">Option 1</h6>
                  </div>
                  </div>
                  <div  id =  "option-1">
                  <div>
                    <img src = {EmptyCheck} className = "option_image_logo"/>
                  <h6 className = "option_heading">Option 2</h6>
                  </div>
                  </div>
                  <div  id =  "option-1">
                  <div>
                    <img src = {EmptyCheck} className = "option_image_logo"/>
                  <h6 className = "option_heading">Option 3</h6>
                  </div>
                  </div>
                  <div  id =  "option-1">
                  <div>
                    <img src = {EmptyCheck} className = "option_image_logo"/>
                  <h6 className = "option_heading">Option 4</h6>
                  </div>
                  </div>
                  <div  id =  "plus">
                  <div>
                    <img src = {plus} className = "plus_logo"/>
                  </div>
                  </div>
                  
              </div>
              <div  id = "main_container"  className ="mt-3">
                <div className= "d-flex " id ="ques_select_box">
                <h6 className = "que_heading">Question 1</h6>
                <select className = "selector-box">
                  <option className = "select_heading">select </option>
                </select>
                </div>
                <div className = " type_question">
                  <h6 className = "type_heading">Type your question</h6>
                </div>
                </div>
                <div className  = "row" id = "options">
                  <div  id =  "option-1">
                  <div>
                    <img src = {OptionImage} className = "option_image_logo"/>
                  <h6 className = "option_heading">Option 1</h6>
                  </div>
                  </div>
                  <div  id =  "option-1">
                  <div>
                    <img src = {EmptyCheck} className = "option_image_logo"/>
                  <h6 className = "option_heading">Option 2</h6>
                  </div>
                  </div>
                  <div  id =  "option-1">
                  <div>
                    <img src = {OptionImage} className = "option_image_logo"/>
                  <h6 className = "option_heading">Option 3</h6>
                  </div>
                  </div>
                  <div  id =  "option-1">
                  <div>
                    <img src = {EmptyCheck} className = "option_image_logo"/>
                  <h6 className = "option_heading">Option 4</h6>
                  </div>
                  </div>
                  <div  id =  "plus">
                  <div>
                    <img src = {plus} className = "plus_logo"/>
                  </div>
                  </div>
                  
                  
              </div>
              <div  id = "main_container" className ="mt-3">
                <div className= "d-flex " id ="ques_select_box">
                <h6 className = "que_heading">Question 1</h6>
                <select className = "selector-box">
                  <option className = "select_heading">select</option>
                </select>
                </div>
                <div className = " type_question">
                  <h6 className = "type_heading">Type your question</h6>
                </div>
                </div>
                <div className  = "row" id = "options">
                  <div  id =  "option-1">
                  <div>
                    <img src = {OptionImage} className = "option_image_logo"/>
                  <h6 className = "option_heading">Option 1</h6>
                  </div>
                  </div>
                  <div  id =  "option-1">
                  <div>
                    <img src = {EmptyCheck} className = "option_image_logo"/>
                  <h6 className = "option_heading">Option 2</h6>
                  </div>
                  </div>
                  <div  id =  "option-1">
                  <div>
                    <img src = {EmptyCheck} className = "option_image_logo"/>
                  <h6 className = "option_heading">Option 3</h6>
                  </div>
                  </div>
                  <div  id =  "option-1">
                  <div>
                    <img src = {EmptyCheck} className = "option_image_logo"/>
                  <h6 className = "option_heading">Option 4</h6>
                  </div>
                  </div>
                  <div  id =  "plus">
                  <div>
                    <img src = {plus} className = "plus_logo"/>
                  </div>
                  </div>
                  
              </div>
              <div  className =  "plus">
                  <div>
                    <img src = {plus} className = "plus_logo"/>
                  </div>
                  </div>
                  <div className = "bottom_border">

                  </div>
                  <div className = "d-flex " id ="internet_div">
                    <div className = "">
                      <p  className = "internet_connection">Internet connection lost. Please check your network</p>
                    </div>
                    <div>
                        <button className = " btn-primary" id ="submit_btn" onClick = {handleShowSubmit}>Submit</button>
                    </div>
                  </div>
        </Modal.Body>
        </Modal>


        <Modal contentClassName = "submit_sucessfully" show={showSubmit} onHide={handleCloseSubmit}>
        <Modal.Body >
        <h6 className = "text-center Successful_heading">Successful</h6>
        <div className = "sucessful_border">
        </div>
        <div className ='sucessful_image'>
          <img src = {Successful} className = 'w-25 '/>
        </div>
        <p className = "para_sucess">Your video has been sucessfully <br/> submited to the admin. Please wait for for the approval.</p>
        <div className = "sucessful_border">
        </div>
        <div className = "okay_button">
        <button className ="btn btn-primary mt-3" id ="okayBtn"  onClick = {handleShowSubmit}>Okay</button>
        </div>


        </Modal.Body>

        </Modal>
    </>
  );
}
export default App;
