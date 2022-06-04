import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { css } from "glamor";
import { colors } from "../../../lib/themeColors";
import { FaBars } from "react-icons/fa";
import Searchbar from "../../Searchbar";

const container = css({
  backgroundColor: colors.white,
});

const styles = {
  brand: {
    fontSize: 35,
    color: colors.white,
    fontWeight: "bolder",
  },
  link: {
    marginLeft: 40,
    color: "white",
  },
  nav: {
    diplay: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const NavbarLogged = (props) => {
  return (
    <Navbar
      style={props.style}
      expand="lg"
      className={` ${props.className} bg-myColors-sideNavBar`}
    >
      <Container className=" m-0">
        <FaBars
          className="  cursor-pointer text-white mx-3"
          onClick={props.handleToogle}
          size={25}
        />
        <Navbar.Brand style={styles.brand} href="/">
          Poetizise
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={styles.nav}
            className="me-auto flex flex-row justify-between items-center"
          >
            <Nav.Link
              style={styles.link}
              href={`/profile/${props?.currentUser?.id}`}
            >
              Meu Perfil
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarLogged;
