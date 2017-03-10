import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

export const Header = () => (
  <Navbar fixedTop collapseOnSelect fluid>
    <Navbar.Header>
      <Navbar.Brand>Null Nexus</Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <IndexLinkContainer to="/">
          <NavItem>Home</NavItem>
        </IndexLinkContainer>
        <LinkContainer to="/about">
          <NavItem>About (lazy)</NavItem>
        </LinkContainer>
        <LinkContainer to="/frasier">
          <NavItem>Frasier (lazy)</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
