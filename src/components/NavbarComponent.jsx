import { useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { navLinks } from "../data";
import { NavLink } from "react-router-dom";
// import logo from "../assets/img/resto/logo resto clean.png";
import logo from "../assets/img/resto/3raja-logo.png";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);

  const changeBackgroundNavbar = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    changeBackgroundNavbar();
    window.addEventListener("scroll", changeBackgroundNavbar);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", changeBackgroundNavbar);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleClickOutside);
    };
  }, []);

  return (
    <div ref={navbarRef}>
      <Navbar
        expand="lg"
        className={`${changeColor ? "color-active" : ""} ${
          isMenuOpen ? "menu-active" : ""
        }`}
        expanded={isMenuOpen}
        onToggle={(expanded) => setIsMenuOpen(expanded)}
      >
        <Container>
          <Navbar.Brand href="/" className="logo">
            <img src={logo} alt="logo-resto" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div className="text-center ">
              <a
                className="contact-us"
                href="https://wa.me/+6287776441192"
                onClick={() => setIsMenuOpen(false)}
              >
                Hubungi Kami!
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
