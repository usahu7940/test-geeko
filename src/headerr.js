import logo from "./images/codegeekologo.png";
import vector from "./images/Vector.png";
import ellipse from "./images/Ellipse 1.png";
import point from "./images/point.png";
import like from "./images/like.png";
import Google from "./images/google.png"
import Facebook from "./images/facebook.png"
import In from "./images/in.png"
import Eye from "./images/eye.png"
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal'

function Headerr() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  const [showlogin, setShowlogin] = useState(false);

  const handleCloselogin = () => setShowlogin(false);
  const handleShowlogin = () => setShowlogin(true);
  

  const [showotp, setShowotp] = useState(false);

  const handleCloseotp = () => setShowotp(false);
  const handleShowotp = () => {
    setShowotp(true);
    setShow(false);
  };
    return (
<>
        <header className="main_header">
            <nav className="navbar navbar-expand-lg main-nav navbar-light ">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <img src={logo} className="logo.images px-5" />
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link link " href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                My videos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                Leaderboard
                            </a>
                        </li>
                    </ul>
                    <div className="search_boxxx">
                        <i className="fa fa-search search_icon"></i>    
                            
                        <input
                            type="search"
                            className=" search_box mx-5"
                            placeholder="search for teachers,subjects videos,and more"></input>
                    </div>
                    
                   <button className ="btn btn-primary sign-up-btn"  onClick={handleShow}>Sign Up </button >
                   <button className ="btn btn-ligth sign-in-btn btn-outline-info" onClick={handleShowlogin}> Sign in</button>
                </div>
                <div className="search_boxx">
                        <i className="fa fa-search search_iconn"></i>    
                            
                        <input
                            type="search"
                            className=" search_boxxxx mx-5"
                            placeholder="search for teachers,subjects videos,and more"></input>
                    </div>
                <img src={ellipse} className="ellipse mx-2" />
            </nav>
            
        </header>
              <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                    <div className = "container">
                    <div className = "row login_sign">
                       <div className = "login_box">
                        <h6 className = "loginn_btn">LOGIN</h6>
                        <div  className = "sign_btn">
                        <h6>SIGN UP</h6>
                        </div>     
                       </div>
                        </div>
                        <div className = "form-group">
                        <h6 className ="login_as">login as</h6>
                            <div className = "form-group ju">
                                <input type = "radio" class="form-check-input radio_btn"></input>
                                <label  class="form-check-label teacher "> Teacher</label>
                                <input type = "radio" class="form-check-input radio_btn_student"></input>
                                <label  class="form-check-label student"> student</label>
                            </div>
                            <div class="form-group">
                                <input type = "text" placeholder = "Enter registered mobile/email" class="form-control mob_email"></input>
                            </div>
                        </div>
                        <div className = "otp_btn">
                        <button className = 'login_otp_btn'  onClick={handleShowotp} Sign Up>LOGIN WITH OTP</button>
                        </div>
                        <div>
                            <p className ="text-center login_other">or logn via</p>
                        </div>
                        <div className = 'social_logo'>
                            <div className = 'google'>
                                <img src ={Google} className = 'social'/>
                            </div>
                            <div className = 'facebook'>
                                <img src = {Facebook}  className = 'social'/>
                            </div>
                            <div className = 'in'>
                                <img src = {In}  className = 'social'/>
                            </div>
                        </div>
                    </div>
              </Modal.Body>
           
            </Modal>
        

            <Modal show={showlogin} onHide={handleCloselogin} >
              
              <Modal.Body> <div className = "container">
                    <div className = "row login_sign">
                       <div className = "login_box">
                        <h6 className = "loginn_btn">LOGIN</h6>
                        <div  className = "sign_btn">
                        <h6>SIGN UP</h6>
                        </div>     
                       </div>
                        </div>
                        <div className = "form-group">
                        <h6 className ="login_as">login as</h6>
                            <div className = "form-group ju">
                                <input type = "radio" class="form-check-input radio_btn"></input>
                                <label  class="form-check-label teacher "> Teacher</label>
                                <input type = "radio" class="form-check-input radio_btn_student"></input>
                                <label  class="form-check-label student"> student</label>
                            </div>
                            <div class="form-group">
                                <input type = "text" placeholder = "Name" class="form-control mob_email"></input>
                            </div>
                            <div class="form-group">
                                <input type = "text" placeholder = "User Email" class="form-control mob_email User_email"></input>
                            </div>
                            <div class="form-group password_div">
                                <input type = "text" placeholder = "Password" class="form-control mob_email User_Password"></input>
                            </div><div className = "eye_div"><img src = {Eye}/></div>
                            <div class="form-group check_btn">
                            <input type = "checkbox" class="form-check-input check_btn_condintion"></input>
                            <label  class="form-check-label condintion ">I agree to CodeGeeko terms and conditions</label>
                            </div>
                        </div>
                        <div className = "sign_btnnn">
                        <button className = 'signnn_up'>SIGN UP</button>
                        </div>
                        <div>
                            <p className ="text-center login_other">or logn via</p>
                        </div>
                        <div className = 'social_logo'>
                            <div className = 'google'>
                                <img src ={Google} className = 'social'/>
                            </div>
                            <div className = 'facebook'>
                                <img src = {Facebook}  className = 'social'/>
                            </div>
                            <div className = 'in'>
                                <img src = {In}  className = 'social'/>
                            </div>
                        </div>
                    </div>
                    </Modal.Body>
            </Modal>
            <Modal show={showotp} onHide={handleCloseotp}> 
              <Modal.Body>
              <div className = "container">
                    <div className = "row login_sign">
                       <div className = "col-12 login_box">
                        <h6 className = "loginn_btn">LOGIN</h6>     
                       </div>
                        <h6 className ="Enter-veri">Enter verification OTP</h6>
                        <h6 className ="wrong-pass">wrong password</h6>
                        <div className = "row time_boxes">
                        <div className = "col-1 six_box">1
                        </div>
                        <div className = "col-1 six_box ">2
                        </div>
                        <div className = "col-1  six_box">2
                        </div>
                        <div className = "col-1 six_box">2
                        </div>
                        <div className = "col-1 six_box">2
                        </div>
                        <div className = "col-1 six_box">2
                    </div> 
                        </div>
                        <p className =" login_other">00:59</p>
                    </div>
                    <div className = "otp_btn">
                        <button className = 'login_otp_btn'>LOGIN WITH OTP</button>
                        </div>
                        <div className = "resend_otp"> 
                        <p className = "">Did not recevied the OTP? </p>  <u><b className = "resend_it">Resend it</b></u>
                        </div>
                        </div>
            </Modal.Body>
            </Modal>
            </>
    )
}
export default Headerr;