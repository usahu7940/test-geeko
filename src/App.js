
import arrow from "./images/Group.png";
import downarrow from "./images/downarro.png";
import rectangle from "./images/Rectangle 13.png";
import time from "./images/02_30.png";
import eye from "./images/eye (1).png";
import like from "./images/like.png";
import message from "./images/message.png";
import "./App.css";
import Header from './header';

function App() {
  return (
    <div>
      <Header/>
      <section className = "main_section">
        <div className = "py-4 "> 
      <div className="container  ">
        <div className="row justify-content-center">
          <div className ="col-md-8">
          <div className="row justify-content-center drag py-5">
            <div className="col-md-2 ">
              <img src={arrow} className="py-2" />
            </div>
            <div className="col-md-7 px-5">
              <h1 className="drag_heading">Drag or select your video</h1>
              <p>Video formats supported: MP4, FLV, WEBM, & GIF</p>
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
          <div className="col-md-8 justify-content-center">
            <div className="boxes justify-content-around">
                 <div className=" box">
                  <h1 className="box_heading">23rd</h1>
                  <p className="box_para">rank</p>
                </div>
                <div className=" box">
                  <h1 className="box_heading">25,563</h1>
                  <p className="box_para">viwes</p>
                </div>
                <div className=" box">
                  <h1 className="box_heading">8,906</h1>
                  <p className="box_para">videos</p>
                </div>
                <div className=" box">
                  <h1 className="box_heading">8,693</h1>
                  <p className="box_para">likes</p>
                </div>
                <div className=" box">
                  <h1 className="box_heading">8,693</h1>
                  <p className="box_para">likes</p>
                </div>
                <div className="box">
                  <h1 className="box_heading">52,000</h1>
                  <p className="box_para">worth gifts</p>
                </div>
                </div>
          </div>
        </div>
      </div>
        <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-md-9 ">
            <div className="row ">
              <div className="col-md-6">
                <h6>My Videos </h6>
              </div>
              <div className="col-md-6 recent_btn">
                <button className="most_recent_btn ">
                  Most recent <img src={downarrow} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center py-3">
          <div className="col-md-9 ">
            <div className="row learn_box">
              <div className="col-md-2 col-4">
                <div>
                  <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
                </div>
              </div>
              <div className="col-md-10 col-8">
                <p className="python_para1">Python, Inheritance</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                  We provide you the best test series for Class XI,XII, JEE,
                  NEET chapterwise, which will be scheduled for whole year.
                </p>
                <div>
                  <img src={eye} className="eye" />56,621 <img src={like} className="like" />650 <img src={message}
                    className="message" />57
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 py-3">
            <div className="row">
            <div className="col-md-2 col-4">
                <div>
                  <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
                </div>
              </div>
              <div className="col-md-10 col-8">
                <p className="python_para1">Python, Inheritance</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                  We provide you the best test series for Class XI,XII, JEE,
                  NEET chapterwise, which will be scheduled for whole year.
                </p>
                <div>
                  <img src={eye} className="eye" />56,621 <img src={like} className="like" />650 <img src={message}
                    className="message" />57
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 py-3 ">
            <div className="row">
            <div className="col-md-2 col-4">
                <div>
                  <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
                </div>
              </div>
              <div className="col-md-10 col-8">
                <p className="python_para1">Python, Inheritance</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                  We provide you the best test series for Class XI,XII, JEE,
                  NEET chapterwise, which will be scheduled for whole year.
                </p>
                <div>
                  <img src={eye} className="eye" />56,621 <img src={like} className="like" />650 <img src={message}
                    className="message" />57
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 py-3">
            <div className="row">
            <div className="col-md-2 col-4">
                <div>
                  <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
                </div>
              </div>
              <div className="col-md-10 col-8">
                <p className="python_para1">Python, Inheritance</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                  We provide you the best test series for Class XI,XII, JEE,
                  NEET chapterwise, which will be scheduled for whole year.
                </p>
                <div>
                  <img src={eye} className="eye" />56,621 <img src={like} className="like" />650 <img src={message}
                    className="message" />57
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 ">
            <div className="row">
            <div className="col-md-2 col-4">
                <div>
                  <img src={rectangle} className="rectangle w-100" />
                  <img src={time} className="time" />
                </div>
              </div>
              <div className="col-md-10 col-8">
                <p className="python_para1">Python, Inheritance</p>
                <h2 className="python_heading">
                  Learn how to set up the machines in the robotics belt
                </h2>
                <p className="python_para">
                  We provide you the best test series for Class XI,XII, JEE,
                  NEET chapterwise, which will be scheduled for whole year.
                </p>
                <div>
                  <img src={eye} className="eye" />56,621 <img src={like} className="like" />650 <img src={message}
                    className="message" />57
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
}
export default App;
