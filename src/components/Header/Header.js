import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <div className="ful">
      <Navbar bg="primary" variant="dark" className="col">
        <Container>
          <label className="space">Navbar</label>
          <label>Navbar with text</label>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
