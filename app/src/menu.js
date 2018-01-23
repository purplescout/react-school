import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

const navbarInstance = ({ location = {} }) => (
  <Router>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">React School</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem componentClass={Link} href="/week1" to="/week1" active={location.pathname === '/week1'}>Week 1</NavItem>
        <NavItem componentClass={Link} href="/week2" to="/week2" active={location.pathname === '/week2'}>Week 2</NavItem>
        {/* <NavItem componentClass={Link} href="/week2" to="/week2" active={location.pathname === '/week2'}>Week 2</NavItem> */}
      </Nav>
    </Navbar>
  </Router>
);

export default navbarInstance;
