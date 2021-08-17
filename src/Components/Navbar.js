import React , {useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBuilding, faUserPlus, faDesktop, faSearch, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import logo from '../Assets/logo.png';


const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        <img alt="logo" src={logo} style={{width: 30, height: 30}}/>
        房企通
      </NavLink>
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                <FontAwesomeIcon icon={faHome} style={{marginRight: 6}}/>
                首页
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/service" exact>
                <FontAwesomeIcon icon={faBuilding} style={{marginRight: 6}}/>
                房企通服务
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/search" exact>
                <FontAwesomeIcon icon={faSearch} style={{marginRight: 6}}/>
                房税搜
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tutorial" exact>
                <FontAwesomeIcon icon={faChalkboardTeacher} style={{marginRight: 6}}/>
                在线培训
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vipsignup" exact>
                <FontAwesomeIcon icon={faUserPlus} style={{marginRight: 6}}/>
                会员注册
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/applications" exact>
                <FontAwesomeIcon icon={faDesktop} style={{marginRight: 6}}/>
                应用软件
              </NavLink>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;