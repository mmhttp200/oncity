import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function MainNavbar(props){

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const session = useSelector(state=>state.session)

  const anchors = [
    {text: 'Home', uri: '/', private: false},
    {text: 'Registration', uri: '/create-new-account', private: false},
    {text: 'Login', uri: '/login', private: false},
    {text: 'About', uri: '/about', private: false},
    {text: 'Dashboard', uri: '/dashboard', private: true},
    {text: 'Edit Account', uri: '/edit-account', private: true},
    {text: 'Logout', uri: '/logout', private: true}
  ]

  const [currentAnchors, setCurrentAnchors] = useState(anchors.filter(a=>a.private==session.status))

  useEffect(()=>{
  }, [])

  return (
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">oncity</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {currentAnchors.map((a)=>{
              return (<NavItem><NavLink tag={Link} to={a.uri}>{a.text}</NavLink></NavItem>)
            })}
          </Nav>
        </Collapse>
      </Navbar>
  );
}