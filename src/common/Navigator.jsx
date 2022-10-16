import React from "react";
import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Modal,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navigator = () => {
  const navigate = useNavigate();

  const [isLogined, setIsLogined] = useState(false);
  const loginedUser = localStorage.getItem("userID");

  const [show, setShow] = useState(false);

  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home" onClick={() => navigate("/")}>
            그만하고 싶다.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/study_list")}>
                스터디
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/mypage")}>
                나의 페이지
              </Nav.Link>
              <NavDropdown title="Chatting" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {localStorage.getItem("studyCapstone") ? (
                <Navbar>
                  <Nav.Link eventKey="disabled" disabled>
                    지금 들어오신 분은 {loginedUser}
                  </Nav.Link>
                  <Nav.Link
                    onClick={() => {
                      localStorage.removeItem("studyCapstone");
                      setShow(true);
                      // navigate("/");
                    }}
                  >
                    Log out
                  </Nav.Link>
                </Navbar>
              ) : (
                <Navbar>
                  <Nav.Link onClick={() => navigate("/login")}>
                    Sign in
                  </Nav.Link>
                  <Nav.Link onClick={() => navigate("/regist")}>
                    Sign Up
                  </Nav.Link>
                </Navbar>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>로그아웃</Modal.Title>
        </Modal.Header>
        <Modal.Body>로그아웃되었습니다.</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              setShow(false);
              navigate("/");
            }}
          >
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navigator;
