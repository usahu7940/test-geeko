import React from "react";
import Ellipse from "./images/jenny.png";
import Aroma from "./images/aroma.png";
import Taj from "./images/taj.png";
import Rock from "./images/rock.png";
import Saiima from "./images/saiima.png"
import Upper from "./images/upper.png"
import Lower from "./images/lower.png"
import Vector1 from "./images/Vector1.png"
import Dot from './images/dot.png'
import "./App.css";
import Header from "./header";

function sixpage() {
  return (
    <>
      <Header />
      <div className="rank_container">
        <div className = 'last_year1'>
      <select className = "selector-box">
        <option >Last Year</option>
      </select>
      </div>
        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="row justify-content-center">
                    <div className="col-sm-12">
                      <div className="row justify-content-center prizes">
                        <div className="col-lg-2 col-3">
                          <div>
                          <h6 className="Second-prize text-center">2nd</h6>
                          </div>
                         <div className = "jenny_sibas">
                          <img src = {Ellipse} className = "w-100"/>
                         </div>
                        <div>
                        <h6 className="text-center" id ="aroma_name_head">Jenny Sibas</h6>
                        <p className="text-center" id ="aroma_name_view">1m views</p>
                        </div>
                        </div>
                        <div className="col-lg-2 col-3 first_prise_div">
                        <div>
                          <h6 className="first-prize text-center">1st</h6>
                          </div>
                          <div className = "aroma_taj">
                          <div className = "aroma_pavlo">
                          <img src = {Aroma} className = "w-100 aroma_image" />
                         </div>
                         <div>
                         <img src={Taj} className ="taj_images " />
                       </div>  
                       </div>
                         <div>
                         <h6 className="text-center" id ="aroma_name_head">Aroma Pavlo</h6>
                        <p className="text-center "id ="aroma_name_view">5.8m views</p>
                         </div>
                        </div>
                        <div className="col-lg-2 col-3">
                        <div>
                          <h6 className="third-prize text-center">3rd</h6>
                          </div>
                         <div className = "Rock_Devian">
                          <img src = {Rock} className = "w-100"/>
                         </div>
                         <div>
                         <h6 className="text-center" id ="aroma_name_head">Rock Devian</h6>
                        <p className="text-center" id ="aroma_name_view">3m views</p>
                         </div>
                        </div>
                      </div>
                     <div className= 'row justify-content-center'>
                        <div className ='col-lg-8 saiima_westro'>
                        <div className = "ranking">
                         <span className ="px-2 number">4</span>
                        </div>
                        <div className = "images_saiima"> 
                        <img src={Saiima} className="saiima mx-2" /> <span className ="saiima_head">Siama Westro</span>
                        </div>
                        <div className ='views '>
                          <h6>9,66,233 views <img src ={Upper} className= "upper_image"/></h6>
                        </div>
                        </div>
                     </div>
                     <div className= 'row justify-content-center'>
                        <div className ='col-lg-8 saiima_westro'>
                        <div className = "ranking">
                         <span className ="px-2 number">5</span>
                        </div>
                        <div className = "images_saiima"> 
                        <img src={Saiima} className="saiima mx-2" /> <span className ="saiima_head">Siama Westro</span>
                        </div>
                        <div className ='views '>
                          <h6>9,66,233 views <img src ={Upper} className= "upper_image"/></h6>
                        </div>
                        </div>
                     </div>
                     <div className= 'row justify-content-center'>
                        <div className ='col-lg-8 saiima_westro'>
                        <div className = "ranking">
                         <span className ="px-2 number">6</span>
                        </div>
                        <div className = "images_saiima"> 
                        <img src={Saiima} className="saiima mx-2" /> <span className ="saiima_head">Siama Westro</span>
                        </div>
                        <div className ='views '>
                          <h6>9,66,233 views <img src ={Lower} className= "upper_image"/></h6>
                        </div>
                        </div>
                     </div>
                     <div className= 'row justify-content-center'>
                        <div className ='col-lg-8 saiima_westro'>
                        <div className = "ranking">
                         <span className ="px-2 number">7</span>
                        </div>
                        <div className = "images_saiima"> 
                        <img src={Saiima} className="saiima mx-2" /> <span className ="saiima_head">Siama Westro</span>
                        </div>
                        <div className ='views '>
                          <h6>9,66,233 views <img src ={Lower} className= "upper_image"/></h6>
                        </div>
                        </div>
                     </div>
                     <div className= 'row justify-content-center'>
                        <div className ='col-lg-8 saiima_westro'>
                        <div className = "ranking">
                         <span className ="px-2 number">8</span>
                        </div>
                        <div className = "images_saiima"> 
                        <img src={Saiima} className="saiima mx-2" /> <span className ="saiima_head">Siama Westro</span>
                        </div>
                        <div className ='views '>
                          <h6>9,66,233 views <img src ={Upper} className= "upper_image"/></h6>
                        </div>
                        </div>
                     </div>
                     <div className= 'row justify-content-center'>
                        <div className ='col-lg-8 saiima_westro'>
                        <div className = "ranking">
                         <span className ="px-2 number">9</span>
                        </div>
                        <div className = "images_saiima"> 
                        <img src={Saiima} className="saiima mx-2" /> <span className ="saiima_head">Siama Westro</span>
                        </div>
                        <div className ='views '>
                          <h6>9,66,233 views <img src ={Upper} className= "upper_image"/></h6>
                        </div>
                        </div>
                     </div>
                     <div className= 'row justify-content-center'>
                        <div className ='col-lg-8 saiima_westro'>
                        <div className = "ranking">
                         <span className ="px-2 number">10</span>
                        </div>
                        <div className = "images_saiima"> 
                        <img src={Saiima} className="saiima mx-2" /> <span className ="saiima_head">Siama Westro</span>
                        </div>
                        <div className ='views '>
                          <h6>9,66,233 views <img src ={Dot} className= "upper_image"/></h6>
                        </div>
                        </div>
                     </div>
                     <div className= 'row justify-content-center'>
                        <div className ='col-lg-8 saiima_westro'>
                        <div className = "ranking">
                         <span className ="px-2 number">11</span>
                        </div>
                        <div className = "images_saiima"> 
                        <img src={Saiima} className="saiima mx-2" /> <span className ="saiima_head">Siama Westro</span>
                        </div>
                        <div className ='views '>
                          <h6>9,66,233 views <img src ={Dot} className= "upper_image"/></h6>
                        </div>
                        </div>
                     </div>
                     <div className= 'row justify-content-center'>
                        <div className ='col-lg-8 saiima_westro'>
                        <div className = "ranking">
                         <span className ="px-2 number">12</span>
                        </div>
                        <div className = "images_saiima"> 
                        <img src={Saiima} className="saiima mx-2" /> <span className ="saiima_head">Siama Westro</span>
                        </div>
                        <div className ='views '>
                          <h6>9,66,233 views <img src ={Upper} className= "upper_image"/></h6>
                        </div>
                        </div>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default sixpage;







