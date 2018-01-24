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
				{/* <NavItem componentClass={Link} href="/week3" to="/week3" active={location.pathname === '/week3'}>Week 3</NavItem> */}
				{/* <NavItem componentClass={Link} href="/week4" to="/week4" active={location.pathname === '/week4'}>Week 4</NavItem> */}
				{/* <NavItem componentClass={Link} href="/week5" to="/week5" active={location.pathname === '/week5'}>Week 5</NavItem> */}
				{/* <NavItem componentClass={Link} href="/week6" to="/week6" active={location.pathname === '/week6'}>Week 6</NavItem> */}
				{/* <NavItem componentClass={Link} href="/week7" to="/week7" active={location.pathname === '/week7'}>Week 7</NavItem> */}
			</Nav>
		</Navbar>
	</Router>
);

export default navbarInstance;
