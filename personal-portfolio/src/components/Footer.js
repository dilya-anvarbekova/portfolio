import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-end">
          <Col size={12} sm={6} className="text-sm-start">
            <p>
              Icons: <a href="https://www.flaticon.com/free-icons/electronics" title="electronics icons">Electronics, </a>
              <a href="https://www.flaticon.com/free-icons/embedded" title="embedded icons">Embedded, </a>
              <a href="https://www.flaticon.com/free-icons/asm" title="asm icons">Asm, </a>
              <a href="https://www.flaticon.com/free-icons/coding" title="coding icons">Coding</a>
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/dilya-anvarbekova/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/dilya-anvarbekova"><img src={navIcon4} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
