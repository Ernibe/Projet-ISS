import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./Navbar.css";
import logo from "../../img/logospace.jpg";
import { Link } from 'react-router-dom';

const Example = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
      <Navbar color="faded" light> 
      <div id="imgContainer">     
        <img className='navbar-img' src ={logo} alt=''/>
      </div>
        <NavbarBrand href="/" className="titleNav">ISS SPACESHIP VIEWER</NavbarBrand>       
        <div id="burgerContainer"> 
        <NavbarToggler className="btnBurger" onClick={toggleNavbar}  />
        </div>

        <Collapse isOpen={!collapsed}>
          <Nav className= "burgerNav">   

          <NavItem className="burgerNav">
              <NavLink tag={Link} to="/IssView">ISS STREETVIEW</NavLink>
            </NavItem>        
        
            <NavItem className="burgerNav">
              <NavLink tag={Link} to="/Live">LIVE</NavLink>
            </NavItem>
        
            <NavItem className="burgerNav">
              <NavLink tag={Link} to="/pictureOfDay">PIC OF DAY</NavLink>
            </NavItem>
        
            <NavItem className="burgerNav">
              <NavLink tag={Link} to="/Glossary">GLOSSARY</NavLink>
            </NavItem>
        
            <NavItem className="burgerNav">
              <NavLink tag={Link} to="/Quiz">QUIZ</NavLink>
            </NavItem>
        
            <NavItem className="burgerNav minigames">
              <NavLink tag={Link} to="/Minigame">MINI GAMES</NavLink>
            </NavItem>
          </Nav>
        </Collapse>        
      </Navbar>
      </div>
  );
}
export default Example;