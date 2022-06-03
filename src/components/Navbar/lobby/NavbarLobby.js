import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { css } from "glamor";
import { colors } from "../../../lib/themeColors";

const container = css({
  backgroundColor: colors.white,
});

const styles = {
  brand: {
    fontSize: 35,
    color: colors.purpleDark,
    fontWeight: "bolder",
  },
  link: {
    marginLeft: 15,
    color: "black",
  },
};

const NavbarLobby = (props) => {
  return (
    <Navbar style={props.style} expand="lg" className={container}>
      <Container>
        <Navbar.Brand style={styles.brand} href="/*">
          Poetizise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link style={styles.link} href="/">
              Poemas
            </Nav.Link>
            <Nav.Link style={styles.link} href="/">
              Entrar
            </Nav.Link>
            <Nav.Link style={styles.link} href="/signup">
              Cadastrar
            </Nav.Link>
            <Nav.Link style={styles.link} href="/literatura">
              Literatura
            </Nav.Link>
            <Nav.Link style={styles.link} href="/about">
              Sobre Nós
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLobby;
